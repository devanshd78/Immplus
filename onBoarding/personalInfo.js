import React, { useState, useEffect, useRef } from 'react';
import { Text, Image, View, TextInput, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Platform, Alert, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style2';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

export default function PerosnalInfo({route}) {

  const { gender, ageGroup, previousHistory } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const otpInputsRefs = useRef([]);
  const [region, setRegion] = useState(null);
  const [address, setAddress] = useState('123 Sample Street');
  const [state, setState] = useState('Sample State');
  const [pincode, setPinCode] = useState('1234');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = async () => {
    const registerBody = {
      phoneNumber,
      password,
      fullName,
      ageGroup,
      email,
      gender,
      address,
      state,
      pincode,
      previousHistory,
    };
    try {
      const response = await axios.post('https://immuneapi-production.up.railway.app/users/register', registerBody);
      if (response.status === 200) {
        navigation.navigate('home');
      } else {
        Alert.alert('Error', 'There was a problem with registration');
      }
    } catch (error) {
      Alert.alert('Error', 'There was a problem with registration');
    }
  };

  const handlePress = () => {
    setModalVisible(true)
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container2}>
      <View style={styles.container}>
        <View style={[styles.rectangle, styles.greenRectangle]} />
        <View style={[styles.rectangle, styles.greenRectangle]} />
        <View style={[styles.rectangle, styles.greenRectangle]} />
        <View style={[styles.rectangle, styles.greenRectangle]} />
        <View style={[styles.rectangle, styles.greenRectangle]} />
      </View>
      <View style={{ flex: 0, }}>
        <View style={styles.container1}>
          <Image
            source={require('../assets/img/logo.png')}
            style={styles.image} />
        </View>
      </View>
      <View style={{ marginTop: 80 }}>
        <Text style={styles.Text}>Personal Info</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.Text1}>Welcome! Get started now and turn your real {'\n'}estate dreams to reality</Text>
      </View>
      <View style={styles.inputContainer1}>
        <FontAwesome5 name="user-edit" size={24} style={{ marginLeft: 10 }} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName} />
      </View>
      <View style={styles.inputContainer1}>
        <Feather name="smartphone" size={24} style={{ marginLeft: 10 }} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="numeric"
          maxLength={10}
          value={phoneNumber}
          onChangeText={text => {
            const formattedPhoneNumber = text.replace(/[^0-9]/g, '');
            setPhoneNumber(formattedPhoneNumber);
          }}
        />
      </View>
      <View style={styles.inputContainer1}>
        <MaterialIcons name="alternate-email" size={24} style={{ marginLeft: 10 }} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer1}>
        <MaterialIcons name="password" size={24} style={{ marginLeft: 10 }} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          onSubmitEditing={handleSubmit}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <LinearGradient colors={['#7ED957', '#5C9A41']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.linearGradient}>
          <View style={styles.custbutton}>
            <Text style={styles.buttonText}>Get OTP</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <MaterialIcons name="password" size={48} color="#5C9A41" style={styles.passwordIcon} />

            <Text style={styles.modalText}>OTP</Text>
            <Text style={styles.modalText1}>OTP has been sent to your registered phone number: +91 {phoneNumber}</Text>
            <View style={styles.otpContainer}>
              {Array.from({ length: 6 }).map((_, index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="numeric"
                  onChangeText={text => {
                    const numericInput = text.replace(/[^0-9]/g, '');
                    otpInputsRefs[index].setNativeProps({ text: numericInput });
                    if (numericInput.length === 1 && index < 5) {
                      otpInputsRefs[index + 1]?.focus();
                    }
                  }}
                  ref={ref => {
                    otpInputsRefs[index] = ref;
                  }}
                />
              ))}
            </View>
            <TouchableOpacity style={{ marginTop: 20 }} onPress={handleCloseModal}>
              <Text style={{ color: 'black' }}>Resend OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <LinearGradient colors={['#7ED957', '#5C9A41']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.linearGradient}>
                <View style={styles.custbutton}>
                  <Text style={styles.buttonText}>Get OTP</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
    </View>
  );
};