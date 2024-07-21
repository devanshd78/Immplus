import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TimeSlot = ({ setSelectedTime }) => {
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

    const selectTimeSlot = (time) => {
        setSelectedTimeSlot(time);
        setSelectedTime(time);
    };

    const timeSlots = [];
    const startTime = 10;
    const endTime = 18;
    const interval = 30;

    for (let hour = startTime; hour <= endTime; hour++) {
        for (let minute = 0; minute < 60; minute += interval) {
            const time = `${hour < 10 ? '0' + hour : hour}:${minute === 0 ? '00' : minute}`;
            const isSelected = time === selectedTimeSlot;
            timeSlots.push(
                <TouchableOpacity key={time} onPress={() => selectTimeSlot(time)} style={[styles.timeSlot, isSelected && styles.selectedTimeSlot]}>
                    <Text style={styles.timeSlotText}>{time}</Text>
                </TouchableOpacity>
            );
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.timeSlotsContainer}>
                    {timeSlots}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
    },
    timeSlotsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginLeft: 10,
    },
    timeSlot: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },
    selectedTimeSlot: {
        backgroundColor: '#FF9D1A',
    },
    timeSlotText: {
        fontSize: 16,
    },
});

export default TimeSlot;