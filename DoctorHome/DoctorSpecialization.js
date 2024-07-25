import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert, TouchableOpacity } from 'react-native';
import GradientButton from '../assets/component/GradientButton'
import { Ionicons } from '@expo/vector-icons';
import SearchBox from '../assets/component/Search'
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export default function DocterSpecialization() {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('datetime')
    //Alert.alert(`You pressed ${item}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Any Doctor's Specialization</Text>
      </View>
      <View style={styles.searchContainer}>
        <SearchBox placeholder="Search Specialization" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {[...Array(1).keys()].map((index) => (
          <View key={index} style={styles.rowContainer}>
            <TouchableOpacity>
              <View style={[styles.box, { width: windowWidth * 0.4 }]}>
                <Ionicons name="md-person" size={32} color="black" />
                <Text style={styles.boxText}>Doctor {index + 1}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.box, { width: windowWidth * 0.4 }]}>
                <Ionicons name="md-medical" size={32} color="black" />
                <Text style={styles.boxText}>Specialization {index + 1}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <GradientButton onPress={handlePress} buttonText="Search" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    marginBottom: 40,
  },
  titleText: {
    color: '#5C9A41',
    fontSize: 36,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingLeft: '5%',
  },
  searchContainer: {
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: -22,
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  box: {
    width: '40%',
    aspectRatio: 1,
    backgroundColor: '#7ED95733',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  boxText: {
    marginTop: 10,
    fontSize: 16,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});
