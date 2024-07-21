import { useNavigation, CommonActions } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Dimensions, Platform, TouchableOpacity, Alert, Keyboard, ActivityIndicator } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GradientButton from './assets/component/GradientButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

//import styles from './style2';
//import styles from './style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: '5%',
        paddingTop: '10%',  // Adjusted top padding for better positioning
    },
    logoContainer: {
        width: 60,
        height: 60,
        borderRadius: 5,
        top: 50,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    logo: {
        width: '85%',
        height: '85%',
        borderRadius: 5,
        resizeMode: 'contain',
    },
    loginText: {
        marginTop: '18%',
        color: '#5C9A41',
        fontFamily: 'Syne-SemiBold',
        fontSize: 36,
        fontWeight: '600',
        lineHeight: 43,
        letterSpacing: 0,
        textAlign: 'left',
    },
    subtitle: {
        marginTop: windowHeight * 0.01,  // Adjusted margin top for spacing
        color: 'black',
        fontFamily: 'Syne-Regular',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
        letterSpacing: 1.5,
        textAlign: 'left',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#A9A9A9',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        color: 'black',
    },
    forgotPassword: {
        fontSize: 14,
        color: '#1E90FF',
        textAlign: 'right',
        marginBottom: 20,
    },
    signUpContainer: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
    },
    signUpText: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
    signUpLink: {
        color: '#5C9A41',
        fontWeight: '600',
        textAlignVertical: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        marginHorizontal: 20,
    },
});

export default function LoginComponent() {

    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    const handleLoginPress = async () => {
        if (!phoneNumber && !password) {
            Alert.alert('Please enter both phone number and password.');
            return;
        }
        if (!phoneNumber) {
            Alert.alert('Please enter phone number');
            return;
        }
        if (!password) {
            Alert.alert('Please enter password');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post('https://immuneapi-production.up.railway.app/users/login', {
                phoneNumber: phoneNumber,
                password: password,
            });

            setLoading(false);

            if (response.status === 200) {
                await AsyncStorage.setItem('userId', response.data.user.id.toString());
                navigateNext();
            } else {
                Alert.alert(response.data.message || 'Login failed');
            }
        } catch (error) {
            setLoading(false);
            setError('Failed to log in. Please try again later.');
        }
    };

    const navigateNext = () => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "home" }],
          })
        );
      };

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        "keyboardDidShow",
        () => {
          setKeyboardVisible(true); // or set the component visibility to false
        }
      );
      const keyboardDidHideListener = Keyboard.addListener(
        "keyboardDidHide",
        () => {
          setKeyboardVisible(false); // or set the component visibility to true
        }
      );
  
      // Clean up the event listeners
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);

    const handleSignUpPress = () => {
        navigation.navigate('gender');
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 0, marginTop: 100 }}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('./assets/img/logo.png')}
                        style={styles.logo} />
                </View>
            </View>
            <Text style={styles.loginText}>Login</Text>
            <Text style={styles.subtitle}>
                Get started now and turn your real estate {'\n'}dreams to reality
            </Text>
            <View style={{ width: windowWidth - 40, marginTop: 30 }}>
                <View style={styles.inputContainer}>
                    <Feather name="smartphone" size={24} color="black" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        placeholderTextColor="#A9A9A9"
                        onChangeText={(text) => {
                            setPhoneNumber(text);
                            setError('');
                        }}
                        value={phoneNumber}
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="password" size={24} color="black" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#A9A9A9"
                        onChangeText={(text) => {
                            setPassword(text);
                            setError('');
                        }}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>
            </View>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TouchableOpacity onPress={handleSignUpPress} style={{ position: 'absolute', marginTop: 505, right: '5%' }}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>
                    Don't Have an Account?{' '}
                    <TouchableOpacity onPress={handleSignUpPress}>
                        <Text style={[styles.signUpLink, { textDecorationLine: 'underline' }]}>Sign Up</Text>
                    </TouchableOpacity>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <GradientButton onPress={handleLoginPress} buttonText="Login" />
            </View>
        </View>
    );
}