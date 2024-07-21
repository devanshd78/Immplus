import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const DateComponent = ({ setSelectedDate }) => {
    const [activeDate, setActiveDate] = useState(new Date());

    useEffect(() => {
        setSelectedDate(activeDate);
    }, []);

    const changeMonth = (increment) => {
        setActiveDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + increment);
            return newDate;
        });
    };


    const selectDate = (date) => {
        setActiveDate(date);
        setSelectedDate(date);
    };

    const year = activeDate.getFullYear();
    const month = activeDate.getMonth();
    const monthName = months[month];

    let maxDays = nDays[month];
    if (month === 1 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
        maxDays += 1; // Leap year adjustment
    }

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    const daysGrid = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        daysGrid.push(<View key={`empty_${i}`} style={[styles.dateBox, styles.emptyDateBox]}></View>);
    }

    for (let i = 1; i <= maxDays; i++) {
        const date = new Date(year, month, i);
        const isSelected = i === activeDate.getDate() && month === activeDate.getMonth() && year === activeDate.getFullYear();
        const isPastDate = date < today.setHours(0, 0, 0, 0);
        daysGrid.push(
            <TouchableOpacity 
                key={i} 
                onPress={() => !isPastDate && selectDate(date)} 
                style={[styles.dateBox, isSelected && styles.selectedDateBox, isPastDate && styles.disabledDateBox]}
                disabled={isPastDate}
            >
                <View>
                    <Text style={[styles.dateText, isPastDate && styles.disabledDateText]}>{i}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => changeMonth(-1)}>
                    <Text style={styles.navigationText}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.monthYearText}>{monthName} {year}</Text>
                <TouchableOpacity onPress={() => changeMonth(1)}>
                    <Text style={styles.navigationText}>{'>'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.calendar}>
                <View style={styles.weekDays}>
                    {weekDays.map(day => (
                        <Text key={day} style={styles.weekDayText}>{day}</Text>
                    ))}
                </View>
                <View style={styles.dates}>{daysGrid}</View>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginHorizontal: 10,
    },
    navigationText: {
        fontSize: 20,
        paddingHorizontal: 5,
    },
    monthYearText: {
        fontSize: 18,
    },
    calendar: {
        marginTop: 10,
        width: '90%',
    },
    weekDays: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    weekDayText: {
        fontSize: 16,
        textAlign: 'center',
        width: '14%',
    },
    dates: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    dateBox: {
        width: '12%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 3,
        borderRadius: 5,
    },
    emptyDateBox: {
        width: '12%',
        aspectRatio: 1,
        margin: 3,
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    selectedDateBox: {
        backgroundColor: '#FF9D1A',
    },
    disabledDateBox: {
        backgroundColor: '#d3d3d3',
        borderColor: '#d3d3d3',
    },
    dateText: {
        fontSize: 16,
    },
    disabledDateText: {
        color: '#a9a9a9',
    },
});

export default DateComponent;