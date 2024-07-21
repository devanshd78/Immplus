import React, { useState, useEffect, useRef } from 'react';
import { Text, Image, View, TextInput, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Platform, Alert, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from '../style2';
export default function TypeOfAccount() {

  

  const handlePress = () => {
   navigateNext()
  };
  const navigation = useNavigation();

    const navigateNext = () => {
        navigation.navigate("gender");
    };
  return (
    <View style={styles.container2}>
      <View style={styles.container}>
        <View style={[styles.rectangle, styles.greenRectangle]} />
        <View style={[styles.rectangle, styles.greyRectangle]} />
        <View style={[styles.rectangle, styles.greyRectangle]} />
        <View style={[styles.rectangle, styles.greyRectangle]} />
        <View style={[styles.rectangle, styles.greyRectangle]} />
      </View>
      <View style={{flex:0,}}>
        <View style={styles.container1}>
          <Image
             source={require('../assets/img/logo.png')}
            style={styles.image} />
        </View>
      </View>
      <View style={{top:80}}>
        <Text style={styles.Text}>Type of Account</Text>
      </View>
      <View style={{top:80}}>
        <Text style={styles.Text1}>Welcome! Get started now and turn your real {'\n'}estate dreams to reality</Text>
      </View>
      <TouchableOpacity style={styles.container3} onPress={handlePress}>
      <View style={styles.box}>
        <Text style={styles.text}>I am a Doctor</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, {'\n'}consectetur adipiscing elit, sed .</Text>
        {/* <Image
          source={require('../assets/img/image.png')}
          style={styles.image1}
        /> */}
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.container4} onPress={handlePress}>
      <View style={styles.box}>
        <Text style={styles.text}>I am a User</Text>
        <Text style={styles.description1}>Lorem ipsum dolor sit amet, {'\n'}consectetur adipiscing elit, sed .</Text>
        {/* <Image
          source={require('../assets/img/image1.png')}
          style={styles.image2}
        /> */}
      </View>
    </TouchableOpacity>
    </View>
  );
};