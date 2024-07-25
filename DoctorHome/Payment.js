import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GradientButton from '../assets/component/GradientButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PaymentDetailsScreen() {

  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [patientData, setPatientData] = useState(null);
  const [doctorInfo, setDoctorInfo] = useState(null);

  const fetchPatientData = async () => {
    try {
      const id = await AsyncStorage.getItem('userId');
      if (id) {
        const response = await axios.get('https://immuneapi-production.up.railway.app/users/getById', {
          params: { id: id },
        });
        if (response.status === 200) {
          const record = response.data[0];
          setPatientData(record);
        } else {
          console.error('Failed to fetch user details');
        }
      }
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };

  const fetchDoctorInfo = async () => {
    try {
      const doctorId = await AsyncStorage.getItem('doctorId');
      const storedDate = await AsyncStorage.getItem('selectedDate');
      const storedTime = await AsyncStorage.getItem('selectedTime');
      setSelectedDate(storedDate);
      setSelectedTime(storedTime);
      if (doctorId) {
        const response = await axios.get('https://immuneapi-production.up.railway.app/docter/getById', {
          params: { id: doctorId },
        });
        if (response.status === 200) {
          const record = response.data[0];
          setDoctorInfo(record);
        } else {
          console.error('Failed to fetch Doctor details');
        }
      }
    } catch (error) {
      console.error('Error fetching doctor data:', error);
    }
  };

  useEffect(() => {
    fetchPatientData();
    fetchDoctorInfo();
  }, []);

  if (!patientData) {
    return (
      <View style={styles.patientDetailsBox}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const createSchedule = async () => {
    try {
      const doctorId = await AsyncStorage.getItem('doctorId');
      const date = await AsyncStorage.getItem('selectedDate');
      const workingHours = ['9:00 AM', '10:00 AM', '11:00 AM']; // Example working hours, replace with actual data
      const availableSlots = [5, 5, 5]; // Example available slots, replace with actual data

      const response = await axios.post('https://immuneapi-production.up.railway.app/docter/schedule', {
        doctorId,
        date,
        workingHours,
        availableSlots
      });

      if (response.status === 200) {
        const { scheduleId } = response.data;
        await AsyncStorage.setItem('scheduleId', scheduleId);
        return scheduleId;
      } else {
        console.error('Failed to create schedule:', response.data.message);
        return null;
      }
    } catch (error) {
      console.error('Error creating schedule:', error.message);
      return null;
    }
  };

  const handlePress = async () => {
    try {
      const scheduleId = await createSchedule();
      const patientId = await AsyncStorage.getItem('userId');

      if (!scheduleId || !patientId) {
        console.error('Schedule ID or Patient ID not found in AsyncStorage');
        return;
      }

      const response = await axios.post('https://immuneapi-production.up.railway.app/docter/book', {
        scheduleId,
        patientId
      });

      if (response.status === 200) {
        Alert.alert('Appointment Booked', 'Your appointment has been successfully booked.', [{ text: 'OK' }]);
        navigation.navigate('myAppointment');
      } else {
        console.error('Failed to book appointment:', response.data.message);
        Alert.alert('Booking Failed', 'Failed to book appointment. Please try again later.', [{ text: 'OK' }]);
      }
    } catch (error) {
      console.error('Error booking appointment:', error.message);
      Alert.alert('Error', 'Failed to book appointment. Please try again later.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review Appointment</Text>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Image source={require('../assets/img/docter-home.png')} style={styles.doctorImage} />
            <View style={styles.textContainer}>
              <Text style={styles.doctorName}>{doctorInfo.name}</Text>
              <Text style={styles.speciality}>Speciality: {doctorInfo.speciality}</Text>
              <View style={{ flexDirection: 'row', gap: 5, marginTop: 10 }}>
                {doctorInfo.consultancyType === 1 && (
                  <View style={[styles.typeCon, { backgroundColor: '#FFC3EE' }]}>
                    <Image source={require('../assets/img/homeopathy-sec.png')} style={styles.typeImg} />
                    <Text style={[styles.typeText, { color: '#C2008C' }]}>Homeopathy</Text>
                  </View>
                )}

                {doctorInfo.consultancyType === 2 && (
                  <View style={[styles.typeCon, { backgroundColor: '#C3CCFF' }]}>
                    <Image source={require('../assets/img/allopathy-sec.png')} style={styles.typeImg} />
                    <Text style={[styles.typeText, { color: '#0036C2' }]}>Allopathy</Text>
                  </View>
                )}

                {doctorInfo.consultancyType === 3 && (
                  <View style={[styles.typeCon, { backgroundColor: '#7ED95720' }]}>
                    <Image source={require('../assets/img/ayurveda-sec.png')} style={styles.typeImg} />
                    <Text style={[styles.typeText, { color: '#7ED957' }]}>Ayurvedic</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
          <View style={styles.videoConsultancyContainer}>
            <MaterialIcons name="videocam" size={18} color="#5C9A41" />
            <Text style={styles.videoConsultancy}>Video Consultancy</Text>
          </View>
          <View style={styles.additionalInfoContainer}>
            <View style={styles.appointmentContainer}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="date-range" size={18} color="#555555" />
              </View>
              <Text style={styles.appointmentText}>{selectedDate}</Text>
            </View>
            <View style={styles.appointmentContainer}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="timer" size={18} color="#555555" />
              </View>
              <Text style={styles.appointmentText}>{selectedTime}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.patientDetailsHeadline}>
        <Text style={styles.headlineText}>Patient Details</Text>
      </View>
      <View style={styles.patientDetailsBox}>
        <View style={styles.header1}>
          <Text style={styles.name}>{patientData.fullName}</Text>
        </View>
        <Text>Age: {patientData.age}  Gender: {patientData.gender}</Text>
        <Text>Phone: {patientData.phoneNumber}</Text>
        <Text>Email: {patientData.email}</Text>
      </View>
      <View style={styles.paymentDetailsHeadline}>
        <Text style={styles.headlineText}>Payment Details</Text>
      </View>
      <View style={styles.paymentDetailsBox}>
        <View style={styles.row}>
          <Text style={styles.label}>Consultancy Fee:</Text>
          <Text style={styles.price}>$50</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>GST:</Text>
          <Text style={styles.price}>$5</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Platform Fee:</Text>
          <Text style={styles.price}>$10</Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={[styles.label, styles.total]}>Total:</Text>
          <Text style={[styles.price, styles.total]}>$65</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <GradientButton onPress={handlePress} buttonText="Pay Now" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  contentWrapper: {
    flex: 1,
    marginTop: 20,
  },
  content: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00000060',
    padding: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 20,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  speciality: {
    fontSize: 16,
    color: '#555555',
  },
  tabContainer: {
    backgroundColor: '#7ED957',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  tabText: {
    color: '#ffffff',
  },
  additionalInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#7ED95760',
    padding: 10,
    borderRadius: 10,
    borderColor: '#2F551F',
  },
  videoConsultancyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  videoConsultancy: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555555',
    marginLeft: 10,
  },
  appointmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  iconContainer: {
    marginRight: 5,
  },
  appointmentText: {
    fontSize: 12,
    color: '#555555',
  },
  patientDetailsHeadline: {
    marginTop: 20, // Adjust margin as needed
  },
  headlineText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  patientDetailsBox: {
    borderWidth: 1,
    borderColor: '#00000033',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  header1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  paymentDetailsHeadline: {
    marginTop: 10,
  },
  paymentDetailsBox: {
    borderWidth: 1,
    borderColor: '#00000033',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    flex: 1,
  },
  price: {
    textAlign: 'right',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#00000033',
    marginVertical: 10,
  },
  total: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    marginHorizontal: 20,
  },
  typeCon: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4
  },
  typeImg: {
    width: 16,
    height: 16,
    objectFit: 'contain',
  },
});
