import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style2';
import { LinearGradient } from 'expo-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto'
import axios from 'axios';

export default function TreatmentType() {

  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const response = await axios.get('https://immuneapi-production.up.railway.app/TypeOfTreatment/records');
        setTreatments(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching treatments:', error);
        setLoading(false);
      }
    };

    fetchTreatments();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#5C9A41" />
      </View>
    );
  }

  const navigation = useNavigation();

  const navigateNext = () => {
    navigation.navigate("docSpecialization");
  };

  return (
    <View style={styles.container2}>
      <View>
        <Text style={styles.Text2}>
          Treatment Type
        </Text>
      </View>
      <View style={{ marginTop: 10, marginLeft: 20 }}>
        <Text>Welcome! Get started now and turn your real {'\n'}estate dreams to reality
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
      {treatments.map((treatment) => (
        <View style={styles.row} key={treatment._id}>
          <TouchableOpacity>
            <View style={styles.doctorcontainer}>
              <Fontisto name="doctor" size={24} style={{ marginLeft: 10, marginRight: 20 }} color="#00000060" />
              <View>
                <Text style={styles.treatmentName}>
                  {treatment.name}
                </Text>
                <Text style={styles.treatmentDescription}>
                  {treatment.description}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
      <View>
        <TouchableOpacity style={styles.button2} onPress={navigateNext}>
          <LinearGradient colors={['#7ED957', '#5C9A41']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.linearGradient}>
            <View style={styles.custbutton1}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};