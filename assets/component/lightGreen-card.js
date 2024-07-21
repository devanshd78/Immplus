
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LightGreenCard({ img, name }) {

    const windowWidth = Dimensions.get('window').width;
    const navigation = useNavigation();
    return (
        <>
            <TouchableOpacity style={[styles.greenConSer, { width: (windowWidth / 2) - 26 }]} onPress={() => navigation.navigate('labtest')}>

                <Image source={img} style={styles.serviceImg} />
                <Text style={[styles.shadowHeading, { textAlign: 'center' }]}>{name}</Text>
                <Text style={[styles.shadowSubHeading, { textAlign: 'center', marginTop: 10 }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </Text>

            </TouchableOpacity>

        </>
    );
}
const styles = StyleSheet.create({
    greenConSer: {
        backgroundColor: '#7ED95720',
        borderRadius: 6,
        paddingHorizontal: 14,
        paddingVertical: 28,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
      },
      serviceImg:{
        width:60,
        height:60,
        resizeMode:'contain',
        marginBottom: 10
      },
      shadowHeading: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontSize: 18,
        fontWeight: '500',
      },
      shadowSubHeading: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 12,
        fontWeight: '400',
        marginTop: 4
      },
})
