import React, { useState, useEffect, useRef } from 'react';
import { Text, Image, View, TextInput, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Platform, Alert, Modal, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyCWnFLUQ8C9hYXOG7nYrZnBP63BekF_OKc');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();

// interface CustomButtonProps {
//   title: string;
//   onPress: () => void;
// }

// const ImmunePlusApp = () => {

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Main">
//         <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SecondComponent" component={SecondComponent} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };




// const SecondComponent: React.FC<{ onNextPress: () => void }> = ({ onNextPress }) => {
//   const navigation = useNavigation();
//   const handlePress = () => {
//     onNextPress();
//   };

//   return (
//     <View>

//     </View>
//   );
// };



const ImmunePlusApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainScreen = () => {
  return (
    <View style={styles.container2}>
      <View>
        <Text style={styles.Text2}>
          Treatment Type
        </Text>
      </View>
      <View style={{ marginTop: 10, marginLeft: 20 }}>
        <Text>Welcome! Get started now and turn your real {'\n'}estate dreams to reality
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.doctorcontainer}>
              <Fontisto name='doctor' size={24} style={{ marginLeft: 10, marginRight: 20 }} color="#00000060" />
              <View>
                <Text style={{ color: 'black', fontFamily: 'Syne-SemiBold', fontSize: 12 }}>
                  Homeopathy
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
                Allopathy
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
                Ayurvedic
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
        <TouchableOpacity style={styles.button2}>
          <LinearGradient colors={['#7ED957', '#5C9A41']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.linearGradient}>
            <View style={styles.custbutton1}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ImmunePlusApp;



{/* <View style={styles.container2}>
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
        <TouchableOpacity style={styles.button1}>
          <LinearGradient colors={['#7ED957', '#5C9A41']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.linearGradient}>
            <View style={styles.custbutton1}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View> */}


// return (
//   <View style={styles.container2}>
//     <View style={styles.container}>
//       <View style={[styles.rectangle, styles.greenRectangle]} />
//       <View style={[styles.rectangle, styles.greenRectangle]} />
//       <View style={[styles.rectangle, styles.greyRectangle]} />
//       <View style={[styles.rectangle, styles.greyRectangle]} />
//       <View style={[styles.rectangle, styles.greyRectangle]} />
//     </View>
//     <View style={{ flex: 0, }}>
//       <View style={styles.container1}>
//         <Image
//           source={require('./assets/Logo.png')}
//           style={styles.image} />
//       </View>
//     </View>
//     <View style={{ top: 80 }}>
//       <Text style={styles.Text}>Gender</Text>
//     </View>
//     <View style={{ top: 80 }}>
//       <Text style={styles.Text1}>Welcome! Get started now and turn your real {'\n'}estate dreams to reality</Text>
//     </View>
//     <View style={styles.container5}>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.container6} onPress={handlePress}>
//           <View style={styles.box1}>
//             <View style={{ left: 10, bottom: 10 }}>
//               <MaterialIcons name="male" size={90} color="#5C9A41" />
//             </View>
//             <Text style={styles.text1}>Male</Text>
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.container6} onPress={handlePress}>
//           <View style={styles.box1}>
//             <View style={{ left: 10, bottom: 10 }}>
//               <MaterialIcons name="female" size={90} color="#5C9A41" />
//             </View>
//             <Text style={styles.text1}>Female</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
// );



// return (
//   <View style={styles.container2}>
//     <View style={styles.container}>
//       <View style={[styles.rectangle, styles.greenRectangle]} />
//       <View style={[styles.rectangle, styles.greenRectangle]} />
//       <View style={[styles.rectangle, styles.greenRectangle]} />
//       <View style={[styles.rectangle, styles.greyRectangle]} />
//       <View style={[styles.rectangle, styles.greyRectangle]} />
//     </View>
//     <View style={{ flex: 0, }}>
//       <View style={styles.container1}>
//         <Image
//           source={require('./assets/Logo.png')}
//           style={styles.image} />
//       </View>
//     </View>
//     <View style={{ marginTop: 80 }}>
//       <Text style={styles.Text}>Age Group</Text>
//     </View>
//     <View style={{ marginTop: 10 }}>
//       <Text style={styles.Text1}>Welcome! Get started now and turn your real {'\n'}estate dreams to reality</Text>
//     </View>
//     <View style={{}}>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.ageBox} onPress={() => handlePress('5-18')}>
//           <View style={{ justifyContent: 'flex-start' }}>
//             <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'Syne-Regular', textAlign: 'left', color:'black' }}>5-18 Years</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.ageBox} onPress={() => handlePress('19-30')}>
//           <View style={{ justifyContent: 'flex-start' }}>
//             <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'Syne-Regular', textAlign: 'left', color:'black' }}>19-30 Years</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.ageBox} onPress={() => handlePress('31-50')}>
//           <View style={{ justifyContent: 'flex-start' }}>
//             <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'Syne-Regular', textAlign: 'left', color:'black' }}>31-50 Years</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.ageBox1} onPress={() => handlePress('above 50')}>
//           <View style={{ justifyContent: 'flex-start' }}>
//             <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'Syne-Regular', textAlign: 'left', color:'black' }}>above 50 Years</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
// );




// const [diseaseName, setDiseaseName] = useState('');
//   const [diseaseList, setDiseaseList] = useState<string[]>([]);

//   const handleAddDisease = () => {
//     if (diseaseName.trim() !== '') {
//       setDiseaseList([...diseaseList, diseaseName]);
//       setDiseaseName('');
//     }
//   };


//   return (
//     <View style={styles.container2}>
//       <View style={styles.container}>
//         <View style={[styles.rectangle, styles.greenRectangle]} />
//         <View style={[styles.rectangle, styles.greenRectangle]} />
//         <View style={[styles.rectangle, styles.greenRectangle]} />
//         <View style={[styles.rectangle, styles.greenRectangle]} />
//         <View style={[styles.rectangle, styles.greyRectangle]} />
//       </View>
//       <View style={{ flex: 0, }}>
//         <View style={styles.container1}>
//           <Image
//             source={require('./assets/Logo.png')}
//             style={styles.image} />
//         </View>
//       </View>
//       <View style={{ marginTop: 80 }}>
//         <Text style={styles.Text}>Previous History</Text>
//       </View>
//       <View style={{ marginTop: 10 }}>
//         <Text style={styles.Text1}>Welcome! Get started now and turn your real {'\n'}estate dreams to reality</Text>
//       </View>
//       <View style={styles.inputContainer}>
//         <FontAwesome name="heartbeat" size={24} style={{ marginRight: 20 }} color="black" />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter disease name"
//           value={diseaseName}
//           onChangeText={text => setDiseaseName(text)}
//           onSubmitEditing={handleAddDisease}
//         />
//         <TouchableOpacity onPress={handleAddDisease}>
//           <MaterialIcons name="add" size={24} color="black" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.diseaseListContainer}>
//         {diseaseList.map((disease, index) => (
//           <View key={index} style={styles.diseaseItemWrapper}>
//             <Text style={styles.diseaseItem}>{disease}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );



{/* <View style={styles.container2}>
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
            source={require('./assets/Logo.png')}
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
          placeholder="Full Name" />
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
          placeholder="Email Address" />
      </View>
      <View style={styles.inputContainer1}>
        <MaterialIcons name="password" size={24} style={{ marginLeft: 10 }} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Password" />
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
            <TouchableOpacity style={{marginTop:20}} onPress={handleCloseModal}>
              <Text style={{color:'black'}}>Resend OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCloseModal}>
              <LinearGradient colors={['#7ED957', '#5C9A41']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.linearGradient}>
                <View style={styles.custbutton}>
                  <Text style={styles.buttonText}>Get OTP</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
    </View> */}



//   const [modalVisible, setModalVisible] = useState(false);
// const [phoneNumber, setPhoneNumber] = useState('');
// const otpInputsRefs = useRef<TextInput[]>([]);
// const [region, setRegion] = useState(null);
// const [address, setAddress] = useState(null);
// const [addressLine1, setAddressLine1] = useState('123 Sample Street');
// const [state, setState] = useState('Sample State');
// const [pinCode, setPinCode] = useState('12345');

// const handlePress = () => {
//   setModalVisible(true);
// };

// const handleCloseModal = () => {
//   setModalVisible(false);
// };

// useEffect(() => {
//   fetchUserLocation();
// }, []);

// const fetchUserLocation = () => {
//   Geolocation.getCurrentPosition(
//     position => {
//       const { latitude, longitude } = position.coords;
//       setRegion({
//         latitude,
//         longitude,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       });
//       getAddressFromCoordinates(latitude, longitude);
//     },
//     error => {
//       console.error('Error getting user location:', error);
//     },
//     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//   );
// };

// const getAddressFromCoordinates = async (latitude, longitude) => {
//   try {
//     const res = await Geocoder.from({ latitude, longitude });
//     const address = res.results[0].formatted_address;
//     setAddress(address);
//   } catch (error) {
//     console.error('Error getting address from coordinates:', error);
//   }
// };

// const toggleModal = () => {
//   setModalVisible(!modalVisible);
// };

// return (
//   <View style={{ flex: 1 }}>
//     {/* MapView */}
//     {region && (
//       <MapView
//         style={{ flex: 1 }}
//         initialRegion={region}
//         showsUserLocation={true}
//         showsMyLocationButton={true}
//       >
//         <Marker coordinate={region} />
//       </MapView>
//     )}

//     {/* Modal */}
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={modalVisible}
//       onRequestClose={() => {
//         toggleModal();
//       }}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent1}>
//           <Text style={styles.locationText}>Location:</Text>
//           <Text>
//             Address Line-1
//           </Text>
//           <TextInput
//           style={styles.input}
//           value={addressLine1}
//           onChangeText={(text) => setAddressLine1(text)}
//           placeholder="Address Line 1"
//         />
//         <TextInput
//           style={styles.input}
//           value={state}
//           onChangeText={(text) => setState(text)}
//           placeholder="State"
//         />
//         <TextInput
//           style={styles.input}
//           value={pinCode}
//           onChangeText={(text) => setPinCode(text)}
//           placeholder="Pin Code"
//           keyboardType="numeric"
//           />
//           <Button title="Next" onPress={toggleModal} />
//         </View>
//       </View>
//     </Modal>

//     <View style={styles.buttonContainer}>
//       <Button title="Open Modal" onPress={toggleModal} />
//     </View>
//   </View>
// );