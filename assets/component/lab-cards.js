
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions, useWindowDimensions, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function LabCard({ name, type, description, exp, rating, review, img }) {
    const windowWidth = Dimensions.get('window').width;
    const widthPadding = windowWidth - 40;
    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity style={[styles.mainCon, { width: widthPadding }]} onPress={() => navigation.navigate('labTestDesc')}>
                {type == 1 && (
                    <>
                        <View style={[styles.typeCon, { backgroundColor: '#7ED95720', }]}><Text style={[styles.typeText, { color: '#2F551F', }]}>Open Now</Text></View>
                    </>
                )}

                {type == 2 && (
                    <>
                        <View style={[styles.typeCon, { backgroundColor: '#F7396220', }]}><Text style={[styles.typeText, { color: '#F73962', }]}>Closed Now</Text></View>
                    </>
                )}

                <Image source={img} style={styles.categoryImg} />
                <View style={styles.doctorCon}>
                    <View style={styles.rowBetween} >
                        <Text style={styles.heading}>{name}</Text>


                    </View>
                    <Text style={styles.secondaryHeading}>{description}</Text>
                    <Text style={styles.greyText}>{exp} Years Experience</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 10 }} >
                        <Image source={require('../img/experience.png')} style={styles.expImg} />
                        <Text style={styles.expText}>{rating}</Text>
                        <Text style={styles.expTextReview}>({review} reviews)</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.appointBtn}>Book Now</Text>
                    </TouchableOpacity>
                </View>

            </TouchableOpacity>

        </>
    );
}
const styles = StyleSheet.create({
    mainCon: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderColor: '#00000030',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 6,
        flexDirection: 'row',
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
        width: '78%'
    },
    secondaryHeading: {
        fontSize: 14,
        fontWeight: '500',
        color: '#00000080',
        fontStyle: 'italic',
        marginTop: 10
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
        borderRadius: 6,
        overflow: 'hidden'
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    typeCon: {
        position: 'absolute',
        top: 10,
        right: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4
    },
    typeImg: {
        width: 20,
        height: 20,
        objectFit: 'contain',
    },
    expImg: {
        width: 16,
        height: 16,
        objectFit: 'contain',
    },
    typeText: {
        fontSize: 10,
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
    appointBtn: {
        fontSize: 14,
        color: '#00000090',
        fontWeight: '500',
        textDecorationLine: 'underline',
        marginTop: 10
    }

})
