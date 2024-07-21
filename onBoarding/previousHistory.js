import React, { useState, useEffect, useRef } from 'react';
import { Text, Image, View, TextInput, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Platform, Alert, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style2';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';

export default function PreviousHistory({route}) {

  const { gender, ageGroup } = route.params;
  const navigation = useNavigation();

  const [diseaseName, setDiseaseName] = useState('');
  const [diseaseList, setDiseaseList] = useState([]);

  const handleAddDisease = () => {
    if (diseaseName.trim() !== '') {
      setDiseaseList([...diseaseList, diseaseName]);
      setDiseaseName('');
    }
  };

  const navigateNext = () => {
    navigation.navigate('personalInfo', { gender, ageGroup, previousHistory: diseaseList });
  };

  return (
    <View style={styles.container2}>
      <View style={styles.container}>
        <View style={[styles.rectangle, styles.greenRectangle]} />
        <View style={[styles.rectangle, styles.greenRectangle]} />
        <View style={[styles.rectangle, styles.greenRectangle]} />
        <View style={[styles.rectangle, styles.greenRectangle]} />
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
        <Text style={styles.Text}>Previous History</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.Text1}>Welcome! Get started now and turn your real {'\n'}estate dreams to reality</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="heartbeat" size={24} style={{ marginRight: 20 }} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Enter disease name"
          value={diseaseName}
          onChangeText={text => setDiseaseName(text)}
          onSubmitEditing={handleAddDisease}
        />
        <TouchableOpacity onPress={handleAddDisease}>
          <MaterialIcons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.diseaseListContainer}>
        {diseaseList.map((disease, index) => (
          <View key={index} style={styles.diseaseItemWrapper}>
            <Text style={styles.diseaseItem}>{disease}</Text>
          </View>
        ))}
      </View>
      <View style={styles.bottomCon}>
                  <TouchableOpacity style={styles.redBtn}  onPress={navigateNext}>
            <Text style={styles.redBtntext}>Next</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};