import React, { useState, useEffect, useRef } from 'react';
import { Text, Image, View, TextInput, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Platform, Alert, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style2';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';
import {LinearGradient} from 'expo-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto'


export default function FindDocter() {

      const [modalVisible, setModalVisible] = useState(false);
const [phoneNumber, setPhoneNumber] = useState('');
const otpInputsRefs = useRef([]);
const [region, setRegion] = useState(null);
const [address, setAddress] = useState(null);
const [addressLine1, setAddressLine1] = useState('123 Sample Street');
const [state, setState] = useState('Sample State');
const [pinCode, setPinCode] = useState('12345');
  const handlePress = () => {
  setModalVisible(true)
  };

  const navigation = useNavigation();

    const navigateNext = () => {
        navigation.navigate("treatmentType");
    };

  return (
    <View style={styles.container2}>
      <View>
        <Text style={styles.Text2}>
          Find a Doctor
        </Text>
      </View>
      <View style={{ marginTop: 10, marginLeft: 20 }}>
        <Text>
          Welcome! Get started now and turn your real {'\n'}estate dreams to reality
        </Text>
      </View>
      <View style={styles.inputContainer2}>
        <FontAwesome name="search" size={24} style={{ marginLeft: 10 }} color="#00000060" />
        <TextInput
          style={styles.input1}
          placeholder="Search Doctor by Name" />
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.doctorcontainer}>
              <Fontisto name='doctor' size={24} style={{ marginLeft: 10, marginRight: 20 }} color="#00000060" />
              <View>
                <Text style={{ color: 'black', fontFamily: 'Syne-SemiBold', fontSize: 12 }}>
                  Schedule a doctor appointment at the Clinic
                </Text>
                <Text style={{ fontSize: 10, marginTop: 2 }}>
                  Welcome! Get started now and turn your real estate{'\n'}dreams to reality
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.doctorcontainer}>
              <Fontisto name='doctor' size={24} style={{ marginLeft: 10, marginRight: 20 }} color="#00000060" />
              <View>
                <Text style={{ color: 'black', fontFamily: 'Syne-SemiBold', fontSize: 12 }}>
                Get an online consultation
                </Text>
                <Text style={{ fontSize: 10, marginTop: 2 }}>
                  Welcome! Get started now and turn your real estate{'\n'}dreams to reality
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.doctorcontainer}>
              <Fontisto name='doctor' size={24} style={{ marginLeft: 10, marginRight: 20 }} color="#00000060" />
              <View>
                <Text style={{ color: 'black', fontFamily: 'Syne-SemiBold', fontSize: 12 }}>
                Book a House Call Docter
                </Text>
                <Text style={{ fontSize: 10, marginTop: 2 }}>
                  Welcome! Get started now and turn your real estate{'\n'}dreams to reality
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button1} onPress={navigateNext}>
          <LinearGradient colors={['#7ED957', '#5C9A41']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.linearGradient}>
            <View style={styles.custbutton1}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View> 
  );
};