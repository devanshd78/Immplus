import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import GradientButton from '../assets/component/GradientButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

//import DocumentPicker from 'react-native-document-picker';

const options = [
  { label: 'Select Gender', value: '' },
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Other', value: 'Other' },
];

const PatientDetailsBox = ({ name, age, gender, phone, email }) => {
  return (
    <View style={styles.patientDetailsBox}>
      <View style={styles.header1}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity>
          <FontAwesome5 name='edit' size={24} color="#7ED957" />
        </TouchableOpacity>
      </View>
      <Text>Age: {age}  Gender: {gender}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

export default function PatientDetailsScreen() {

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    phoneNumber: '',
    email: '',
    medicalHistory: '',
    //attachment: null,
  });

  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [showOptions, setShowOptions] = useState(false);
  const [patientData, setPatientData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId'); // Get userId from AsyncStorage
        if (userId) {
          const response = await axios.get('https://immuneapi-production.up.railway.app/users/records'); // Replace with your API URL
          if (response.status === 200) {
            const userRecord = response.data.find(record => record._id.toString() === userId);
            if (userRecord) {
              setPatientData(userRecord);
              setFormData({
                fullName: userRecord.fullName,
                age: userRecord.ageGroup,
                gender: userRecord.gender,
                phoneNumber: userRecord.phoneNumber,
                email: userRecord.email,
                medicalHistory: userRecord.medicalHistory,
              });
            } else {
              console.error('User record not found');
            }
          } else {
            console.error('Failed to fetch patient data');
          }
        } else {
          console.error('User ID not found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatientDetails();
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRadioButtonPress = (option) => {
    setSelectedOption(option);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const selectOption = (option) => {
    handleInputChange('gender', option);
    toggleOptions();
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePress = () => {
    navigation.navigate('paymentDetail');
  };

  const handleFileInput = async () => {
    // try {
    //   const res = await DocumentPicker.pick({
    //     type: [DocumentPicker.types.allFiles],
    //   });
    //   console.log(
    //     'URI : ' + res.uri,
    //     'Type : ' + res.type,
    //     'Name : ' + res.name,
    //     'Size : ' + res.size
    //   );
    //   // Update the attachment field in formData
    //   handleInputChange('attachment', res);
    // } catch (error) {
    //   console.error('Error picking file:', error);
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <FontAwesome5 name='long-arrow-alt-left' size={24} color="#00000060" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Patient Details</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Fill out the Patient Details</Text>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => handleRadioButtonPress('Option 1')}
        >
          <View style={styles.radioButtonCircle}>
            {selectedOption === 'Option 1' && <View style={styles.radioButtonInnerCircle} />}
          </View>
          <Text>Make Appointment For You</Text>
        </TouchableOpacity>
        {selectedOption === 'Option 1' && (
          <PatientDetailsBox
            name={formData.fullName}
            age={formData.age}
            gender={formData.gender}
            phone={formData.phoneNumber}
            email={formData.email}
          />
        )}
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => handleRadioButtonPress('Option 2')}
        >
          <View style={styles.radioButtonCircle}>
            {selectedOption === 'Option 2' && <View style={styles.radioButtonInnerCircle} />}
          </View>
          <Text>Make Appointment For Someone else</Text>
        </TouchableOpacity>
        {selectedOption === 'Option 2' && (
          <View>
            <View style={styles.formField}>
              <FontAwesome6 name='user-pen' style={{ marginLeft: 10 }} size={24} color="#00000060" />
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                onChangeText={(text) => handleInputChange('fullName', text)}
              />
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.formField1}>
                <MaterialIcons name='family-restroom' size={24} style={{ marginLeft: 10 }} color="#00000060" />
                <TextInput
                  style={styles.input}
                  placeholder="Age"
                  keyboardType="numeric"
                  onChangeText={(text) => handleInputChange('age', text)}
                />
              </View>
              <View style={styles.formField1}>
                <MaterialCommunityIcons name='gender-male-female' size={24} style={{ marginLeft: 10 }} color="#00000060" />
                <SelectDropdown
                  data={['Male', 'Female', 'Other']}
                  onSelect={(selectedItem, index) => {
                    handleInputChange('gender', selectedItem);
                  }}
                  renderButton={(selectedItem, isOpened) => (
                    <View style={styles.dropdownButtonStyle}>
                      <Text style={styles.dropdownButtonTxtStyle}>{selectedItem || 'Select Gender'}</Text>
                    </View>
                  )}
                  renderItem={(item, index, isSelected) => (
                    <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                      <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                    </View>
                  )}
                  showsVerticalScrollIndicator={false}
                  dropdownStyle={styles.dropdownMenuStyle}
                />
              </View>
            </View>

            <View style={styles.formField}>
              <Feather name='smartphone' size={24} style={{ marginLeft: 10 }} color="#00000060" />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                onChangeText={(text) => handleInputChange('phoneNumber', text)}
              />
            </View>
            <View style={styles.formField}>
              <MaterialIcons name='alternate-email' size={24} style={{ marginLeft: 10 }} color="#00000060" />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={(text) => handleInputChange('email', text)}
              />
            </View>
            <View style={styles.formField}>
              <MaterialCommunityIcons name='history' size={24} style={{ marginLeft: 10 }} color="#00000060" />
              <TextInput
                style={styles.input}
                placeholder="Medical History"
                onChangeText={(text) => handleInputChange('medicalHistory', text)}
              />
            </View>
            <View style={styles.formField}>
              <MaterialIcons name='attachment' size={24} style={{ marginLeft: 10 }} color="#00000060" />
              <TouchableOpacity onPress={handleFileInput}>
                <Text style={styles.uploadText}>Attachment (File)</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <GradientButton onPress={handlePress} buttonText="Continue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    marginRight: 16,
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButtonCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5C9A41',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonInnerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#5C9A41',
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
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginLeft: 10,
  },
  formField1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginLeft: 10,
    width: '47%'
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  dropdownButtonStyle: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginLeft: 10,
  },
  dropdownButtonTxtStyle: {
    fontSize: 16,
  },
  dropdownItemStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  dropdownItemTxtStyle: {
    fontSize: 16,
  },
  dropdownMenuStyle: {
    marginTop: 2,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
  },
  uploadText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#5C9A41',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    marginHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});