import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const GradientButton = ({ onPress, buttonText }) => {
  return (
    <LinearGradient
      colors={['#7ED957', '#5C9A41']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={[styles.buttonContainer, { width: windowWidth - 40 }]}
    >
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    height: 50,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GradientButton;
