
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Category({ img, name }) {

    const navigation = useNavigation();
    return (
        <>
            <TouchableOpacity style={[styles.mainCon]} onPress={() => navigation.navigate('pharmacy')}>
                <View style={styles.categoryCon}>
                    <Image source={img} style={styles.categoryImg}/>
                </View>
                <Text style={styles.shadowSubHeading}>{name}</Text>
            </TouchableOpacity>

        </>
    );
}
const styles = StyleSheet.create({
    categoryCon:{
        backgroundColor: '#7ED95720',
        padding: 20,
        borderColor: '#00000020',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 6,
    },
    shadowSubHeading:{
        fontSize: 12,
        fontWeight:'400',
        marginTop: 10,
        color: '#00000070',
        textAlign:'center'
    },
    categoryImg:{
        width:50,
        height:50
    },
    mainCon:{
        justifyContent:'center',
        textAlign:'center',
        marginBottom:20
    }
})
