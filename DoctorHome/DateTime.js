import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateComponent from '../assets/component/Calender.js';
import TimeSlot from '../assets/component/TimeSlot.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GradientButton from '../assets/component/GradientButton.js';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from '../style2.js';

const DateTime = () => {
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handlePress = async () => {
        if (selectedDate && selectedTime) {
            try {
                await AsyncStorage.setItem('selectedDate', selectedDate.toString());
                await AsyncStorage.setItem('selectedTime', selectedTime);
                navigation.navigate('doctors');
            } catch (error) {
                console.error('Failed to save date and time:', error);
            }
        } else {
            console.error('Please select both date and time');
        }
    };

    const clearDateTime = async () => {
        try {
            await AsyncStorage.removeItem('selectedDate');
            await AsyncStorage.removeItem('selectedTime');
        } catch (error) {
            console.error('Failed to clear date and time:', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                clearDateTime();
                return false; // Prevent default back behavior
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
    );

    return (
        <View style={styles.container2}>
            <View>
                <Text style={styles.Text2}>
                    Date & Time
                </Text>
            </View>
            <View style={{ marginTop: 10, marginLeft: 20 }}>
                <Text>Welcome! Get started now and turn your real {'\n'}estate dreams to reality</Text>
            </View>
            <View style={styles.header}>
                <FontAwesome name="calendar" size={18} color="#000" style={styles.icon} />
                <Text style={styles.title}>Date of Appointment</Text>
            </View>
            <DateComponent setSelectedDate={setSelectedDate} />
            <View style={styles.header}>
                <FontAwesome name="clock-o" size={18} color="#000" style={styles.icon} />
                <Text style={styles.title}>Time of Appointment</Text>
            </View>
            <TimeSlot setSelectedTime={setSelectedTime} />
            <View style={styles.buttonContainer}>
                <GradientButton onPress={handlePress} buttonText="Search" />
            </View>
        </View>
    );
};

export default DateTime;