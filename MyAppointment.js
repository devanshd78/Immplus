import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function MyAppointmentsScreen(){

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>My Appointments</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={{marginBottom:5}}>27 Feb 2024</Text>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Image source={require('./assets/img/docter-home.png')} style={styles.doctorImage} />
            <View style={styles.textContainer}>
              <Text style={styles.doctorName}>Dr. John Doe</Text>
              <Text style={styles.speciality}>Speciality: General Physician</Text>
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>Ayurvedic</Text>
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
              <Text style={styles.appointmentText}>Wed, 27th Feb 2024</Text>
            </View>
            <View style={styles.appointmentContainer}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="timer" size={18} color="#555555" />
              </View>
              <Text style={styles.appointmentText}>17:00 - 17:30</Text>
            </View>
          </View>
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={18} color="#555555" />
            <Text style={styles.locationText}>1234 Example St, City, Country</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingTop: 20,
  },
  headlineContainer: {
    marginBottom: 20,
  },
  headline: {
    marginTop: 50,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#5C9A41'
  },
  contentWrapper: {
    flex: 1,
    marginTop: 20,
  },
  content: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00000060',
    padding: 10,
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
    fontSize: 18,
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
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#555555',
  },
});
