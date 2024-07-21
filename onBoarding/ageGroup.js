import React, { useState, useEffect, useRef } from 'react';
import { Text, Image, View, TextInput, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Platform, Alert, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style2';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';

export default function AgeGroup({ route }) {
  const { gender } = route.params;
  const [ageGroups, setAgeGroups] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchAgeGroups = async () => {
      try {
        const response = await axios.get('https://immuneapi-production.up.railway.app/Agegroups/records');
        setAgeGroups(response.data);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch age groups');
      }
    };
    fetchAgeGroups();
  }, []);

  const handlePress = (ageGroup) => {
    navigateNext(ageGroup);
  };

  const navigateNext = (ageGroup) => {
    navigation.navigate('previousHistory', { gender, ageGroup });
  };

  return (
  <View style={styles.container2}>
    <View style={styles.container}>
      <View style={[styles.rectangle, styles.greenRectangle]} />
      <View style={[styles.rectangle, styles.greenRectangle]} />
      <View style={[styles.rectangle, styles.greenRectangle]} />
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
    <View style={{ marginTop: 80 }}>
      <Text style={styles.Text}>Age Group</Text>
    </View>
    <View style={{ marginTop: 10 }}>
      <Text style={styles.Text1}>Welcome! Get started now and turn your real {'\n'}estate dreams to reality</Text>
    </View>
    <View>
        {ageGroups.map((ageGroup, index) => (
          <View key={index} style={styles.row}>
            <TouchableOpacity style={styles.ageBox} onPress={() => handlePress(ageGroup)}>
              <View style={{ justifyContent: 'flex-start' }}>
                <Text style={styles.ageBoxText}>
                  {ageGroup.name} Years
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
);
};