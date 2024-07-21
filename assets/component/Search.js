import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBox = ({ placeholder }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      Keyboard.dismiss();
      handleSearch();
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="black" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
        onKeyPress={handleKeyPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#00000033',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: '90%',
      },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
});

export default SearchBox;