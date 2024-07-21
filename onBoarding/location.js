import React, { useState, useEffect, useRef } from 'react';
import { Text, Image, View, TextInput, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Platform, Alert, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style2';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
export default function Location() {

  const [modalVisible, setModalVisible] = useState(false);
const [phoneNumber, setPhoneNumber] = useState('');
const otpInputsRefs = useRef([]);
const [region, setRegion] = useState(null);
const [address, setAddress] = useState(null);
const [addressLine1, setAddressLine1] = useState('123 Sample Street');
const [state, setState] = useState('Sample State');
const [pinCode, setPinCode] = useState('12345');

const navigation = useNavigation();

const navigateNext = () => {
    navigation.navigate("gender");
};
const handlePress = () => {
  setModalVisible(true);
};

const handleCloseModal = () => {
  setModalVisible(false);
};

useEffect(() => {
  fetchUserLocation();
}, []);

const fetchUserLocation = () => {
  Geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      getAddressFromCoordinates(latitude, longitude);
    },
    error => {
      console.error('Error getting user location:', error);
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
};

const getAddressFromCoordinates = async (latitude, longitude) => {
  try {
    const res = await Geocoder.from({ latitude, longitude });
    const address = res.results[0].formatted_address;
    setAddress(address);
  } catch (error) {
    console.error('Error getting address from coordinates:', error);
  }
};

const toggleModal = () => {
  setModalVisible(!modalVisible);
};

return (
  <View style={{ flex: 1 }}>
    {/* MapView */}
    {region && (
      <MapView
        style={{ flex: 1 }}
        initialRegion={region}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker coordinate={region} />
      </MapView>
    )}

    {/* Modal */}
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        toggleModal();
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent1}>
          <Text style={styles.locationText}>Location:</Text>
          <Text>
            Address Line-1
          </Text>
          <TextInput
          style={styles.input}
          value={addressLine1}
          onChangeText={(text) => setAddressLine1(text)}
          placeholder="Address Line 1"
        />
        <TextInput
          style={styles.input}
          value={state}
          onChangeText={(text) => setState(text)}
          placeholder="State"
        />
        <TextInput
          style={styles.input}
          value={pinCode}
          onChangeText={(text) => setPinCode(text)}
          placeholder="Pin Code"
          keyboardType="numeric"
          />
          <Button title="Next" onPress={toggleModal} />
        </View>
      </View>
    </Modal>

    <View style={styles.buttonContainer}>
      <Button title="Open Modal" onPress={toggleModal} />
    </View>
  </View>
);
};