import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions, useWindowDimensions,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PharmaProduct({img,name,price,accPrice,index, discount, productId}) {
    const windowWidth = Dimensions.get('window').width;
    const widthPadding = windowWidth - 40;
    const navigation = useNavigation();

    const handlePress = async () => {
        try {
            await AsyncStorage.setItem('ProductId', productId.toString());
            navigation.navigate('pharmacyDesc');
        } catch (error) {
            console.error('Failed to save productId to local storage:', error);
        }
    };

    return (
        <>
            <TouchableOpacity style={[styles.mainCon,{width:windowWidth * 0.4, marginLeft: index == 0 ? 20 : 0}]} onPress={handlePress}>
                <View style={styles.DiscountCon}>
                    <Text  style={styles.DiscountText}>{discount}% OFF</Text>
                </View>
                <Image source={img} style={styles.categoryImg} />
                <View style={styles.doctorCon}>
                    <View style={styles.rowBetween} >
                        <Text style={styles.secondaryHeading}>{name}</Text>

                    </View>

                    <View style={styles.rowBetween}>
                    <View  style={{flexDirection:'row', alignItems:'center',gap:4,marginTop:10}} >
                    <Text style={styles.heading}>₹{price}</Text>
                    <Text style={styles.greyText}>₹{accPrice}</Text>
                    </View>

                    <TouchableOpacity>
                        <Image source={require('../img/add-orange-btn.png')} style={styles.addIcon} />
                    </TouchableOpacity>
                    </View>
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
        width: 150,
        marginRight: 20
    },
    DiscountCon:{
        backgroundColor:'#6CB355',
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
        position:'absolute',
        top: 10,
        left: 6,
        zIndex: 2
    },
    DiscountText:{
        color: 'white',
        fontSize: 12,
        fontWeight: '500',
    },
    shadowSubHeading: {
        fontSize: 12,
        fontWeight: '400',
        marginTop: 10,
        color: '#00000070',
        textAlign: 'center'
    },
    heading: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000000',
    },
    secondaryHeading:{
        fontSize: 14,
        fontWeight: '400',
        color: '#00000090',
        marginTop:10,
    },
    greyText:{
        fontSize: 14,
        fontWeight: '400',
        color: '#00000050',
        textDecorationLine: 'line-through'
    },
    categoryImg: {
        width: '100%',
        height: 100,
        marginRight:10,
        borderRadius: 6,
        overflow:'hidden',
        resizeMode:'contain'
    },
    addIcon:{
        width: 30,
        height: 30,
        resizeMode:'contain',
    },
    rowBetween:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    typeCon:{
        position:'absolute',
        top:10,
        right:10,
        paddingHorizontal: 8,
        paddingVertical:4,
        borderRadius: 30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:4
    },
    typeImg:{
        width: 20,
        height:20,
        objectFit:'contain',
    },
    expImg:{
        width: 16,
        height:16,
        objectFit:'contain',
    },
    typeText:{
        fontSize: 8,
        fontWeight: '600',
    },
    expText:{
        fontSize: 12,
        fontWeight: '600',
        color: '#00000090',
    },
    expTextReview:{
        fontSize: 12,
        fontWeight: '400',
        color: '#00000070',
    },
    appointBtn:{
        fontSize: 14,
        color: '#00000090',
        fontWeight:'500',
        textDecorationLine:'underline',
        marginTop: 10
    }

})