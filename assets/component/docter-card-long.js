
import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions, useWindowDimensions, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function DocterCard({ name, type, description, exp, rating, review, img, slot, doctorId  }) {
    const windowWidth = Dimensions.get('window').width;
    const widthPadding = windowWidth - 40;
    const navigation = useNavigation();

    const navigateToDoctorDescription = () => {
        navigation.navigate('docterDesc');
    };

    const handleAppointNow = async () => {
        try {
            await AsyncStorage.setItem('doctorId', doctorId.toString());
            navigation.navigate('patientDetail');
        } catch (error) {
            console.error('Error saving doctor ID to local storage:', error);
        }
    };

    return (
        <>
            <TouchableOpacity style={[styles.mainCon]} onPress={navigateToDoctorDescription}>

                <Image source={img} style={styles.categoryImg} />
                <View style={styles.doctorCon}>
                    <View style={styles.rowBetween} >
                        <Text style={styles.heading}>{name}</Text>


                    </View>
                    <Text style={styles.secondaryHeading}>{description}</Text>
                    <View style={{ flexDirection: 'row', gap: 5, marginTop: 10 }}>
                        {type == 1 && (
                            <>
                                <View style={[styles.typeCon, { backgroundColor: '#FFC3EE', }]}><Image source={require('../img/homeopathy-sec.png')} style={styles.typeImg} /><Text style={[styles.typeText, { color: '#C2008C', }]}>Homeopathy</Text></View>
                            </>
                        )}

                        {type == 2 && (
                            <>
                                <View style={[styles.typeCon, { backgroundColor: '#C3CCFF', }]}><Image source={require('../img/allopathy-sec.png')} style={styles.typeImg} /><Text style={[styles.typeText, { color: '#0036C2', }]}>Allopathy</Text></View>
                            </>
                        )}

                        {type == 3 && (
                            <>
                                <View style={[styles.typeCon, { backgroundColor: '#7ED95720', }]}><Image source={require('../img/ayurveda-sec.png')} style={styles.typeImg} /><Text style={[styles.typeText, { color: '#7ED957', }]}>Ayurvedic</Text></View>
                            </>
                        )}

                        <View style={[styles.typeCon, { backgroundColor: '#CDDBFF', }]}><Text style={[styles.typeText, { color: '#0036C2', }]}>{exp}Yrs Exp</Text></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 10 }} >
                        <Image source={require('../img/experience.png')} style={styles.expImg} />
                        <Text style={styles.expText}>{rating}</Text>
                        <Text style={styles.expTextReview}>({review} reviews)</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Image source={require('../img/calender-green.png')} style={styles.expImg} />
                            <Text style={styles.slotText}>{slot} Slots Available</Text>
                        </View>
                        <TouchableOpacity onPress={handleAppointNow}>
                            <Text style={[styles.appointBtn, { fontSize: 12 }]}>Appoint Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </TouchableOpacity>

        </>
    );
}
const styles = StyleSheet.create({
    mainCon: {
        backgroundColor: '#00000007',
        flexDirection: 'row',
        padding: 10,
        marginTop: 10
    },
    shadowSubHeading: {
        fontSize: 12,
        fontWeight: '400',
        marginTop: 10,
        color: '#00000070',
        textAlign: 'center'
    },
    heading: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000000',
    },
    secondaryHeading: {
        fontSize: 14,
        fontWeight: '500',
        color: '#00000080',
        fontStyle: 'italic',
        marginTop: 10
    },
    doctorCon:{
        width: '65%'
    },

    greyText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#00000050',
        marginTop: 4
    },
    categoryImg: {
        width: '30%',
        height: 'auto',
        marginRight: 10,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    typeCon: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4
    },
    typeImg: {
        width: 16,
        height: 16,
        objectFit: 'contain',
    },
    expImg: {
        width: 16,
        height: 16,
        objectFit: 'contain',
    },
    typeText: {
        fontSize: 9,
        fontWeight: '600',
    },
    expText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#00000090',
    },
    expTextReview: {
        fontSize: 12,
        fontWeight: '400',
        color: '#00000070',
    },
    slotText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#2F551F',
        marginRight: 10,
        textDecorationLine: 'underline',
    },
    appointBtn: {
        fontSize: 13,
        color: '#00000090',
        fontWeight: '500',
        textDecorationLine: 'underline',
        gap: 5
    }

})
