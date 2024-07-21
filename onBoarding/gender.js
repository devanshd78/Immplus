import React, { useState, useEffect, useRef } from 'react';
import { Text, Image, View, TextInput, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Platform, Alert, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style2';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';

export default function Gender({route}) {

  const navigation = useNavigation();
  const [gender, setGender] = useState('');

  const handlePress = (selectedGender) => {
    setGender(selectedGender);
    navigateNext(selectedGender);
  };

  const navigateNext = (selectedGender) => {
    navigation.navigate('ageGroup', { gender: selectedGender });
  };

  return (
      <View style={styles.container2}>
        <View style={styles.container}>
          <View style={[styles.rectangle, styles.greenRectangle]} />
          <View style={[styles.rectangle, styles.greenRectangle]} />
          <View style={[styles.rectangle, styles.greyRectangle]} />
          <View style={[styles.rectangle, styles.greyRectangle]} />
          <View style={[styles.rectangle, styles.greyRectangle]} />
        </View>
        <View style={{ flex: 0, }}>
          <View style={styles.container1}>
            <Image
              source={require('../assets/img/logo.png')}
              style={styles.image} />
          </View>
        </View>
        <View style={{ top: 80 }}>
          <Text style={styles.Text}>Gender</Text>
        </View>
        <View style={{ top: 80 }}>
          <Text style={styles.Text1}>Welcome! Get started now and turn your real {'\n'}estate dreams to reality</Text>
        </View>
        <View style={styles.container5}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.container6} onPress={() => handlePress('male')}>
              <View style={styles.box1}>
                <View style={{ left: 10, bottom: 10 }}>
                  <MaterialIcons name="male" size={90} color="#5C9A41" />
                </View>
                <Text style={styles.text1}>Male</Text>
              </View>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.container6} onPress={() => handlePress('female')}>
              <View style={styles.box1}>
                <View style={{ left: 10, bottom: 10 }}>
                  <MaterialIcons name="female" size={90} color="#5C9A41" />
                </View>
                <Text style={styles.text1}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
};