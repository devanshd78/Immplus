import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GradientButton from '../assets/component/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import DocterCard from '../assets/component/docter-card-long.js';
import axios from 'axios';
import { RefreshControl } from 'react-native-gesture-handler';

export default function Doctors() {

    const navigation = useNavigation();
    const [doctorData, setDoctorData] = useState([]);
    const [searchedResults, setSearchedResults] = useState(0);
    const [availableSlotsMap, setAvailableSlotsMap] = useState({});
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchDoctorRecords();
        fetchAvailableSlots();
    }, []);

    const fetchDoctorRecords = async () => {
        try {
            const response = await axios.get('https://immuneapi-production.up.railway.app/docter/records');
            if (response.status === 200) {
                setDoctorData(response.data);
                setSearchedResults(response.data.length);
                // Initialize available slots map with default values
                const initialSlotsMap = {};
                response.data.forEach(doctor => {
                    initialSlotsMap[doctor._id] = 0; // Initialize slots to 0 for each doctor
                });
                setAvailableSlotsMap(initialSlotsMap);
            } else {
                console.error('Failed to fetch doctor records');
            }
        } catch (error) {
            console.error('Error fetching doctor records:', error);
        }
    };

    const fetchAvailableSlots = async () => {
        try {
            const response = await axios.get('https://immuneapi-production.up.railway.app/docter/getAllAvailable');
            if (response.status === 200) {
                // Update available slots map based on response data
                const updatedSlotsMap = { ...availableSlotsMap };
                response.data.forEach(slotData => {
                    if (updatedSlotsMap.hasOwnProperty(slotData.doctorId)) {
                        updatedSlotsMap[slotData.doctorId] += slotData.availableSlots;
                    } else {
                        updatedSlotsMap[slotData.doctorId] = slotData.availableSlots;
                    }
                });
                setAvailableSlotsMap(updatedSlotsMap);
            } else {
                console.error('Failed to fetch available slots');
            }
        } catch (error) {
            console.error('Error fetching available slots:', error);
        }
    };

    const handlepress = async () => {
        navigation.navigate('')
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchDoctorRecords();
        fetchAvailableSlots();
        setTimeout(() => setRefreshing(false), 1000); // Example of how to set refreshing to false after 1 second
    }, []);

    return (
        <View style={styles.container2}>
            <View>
                <Text style={styles.Text2}>
                    Doctors
                </Text>
            </View>
            <View style={styles.resultsContainer}>
                <Text style={styles.label}>{searchedResults} searched results</Text>
            </View>
            <View style={styles.editCon}>
                <View style={styles.column}>
                    <Text style={styles.label}>Treatment Type</Text>
                    <Text style={styles.value}>Homeopathy</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.label}>Specialization</Text>
                    <Text style={styles.value}>Cardiologist</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.label}>Date & Time</Text>
                    <Text style={styles.value}>Mon 8, 11:30</Text>
                </View>
                <TouchableOpacity>
                    <FontAwesome name="edit" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#5C9A41']}
                        tintColor="#5C9A41"
                    />
                }
            >
                {doctorData.map((item, index) => {
                  return (
                    <DocterCard
                        key={index}
                        name={item.name}
                        type={item.type}
                        description={item.specialist} // Adjust as per your API response structure
                        exp={item.experience} // Adjust as per your API response structure
                        rating={item.rating ? item.rating.toString() : 'N/A'} // Convert rating to string if needed
                        review={item.patients} // Adjust as per your API response structure
                        slot={availableSlotsMap[item._id] || 0}
                        img={{ uri: `https:immuneapi-production.up.railway.app/${item._id}` }} // Adjust as per your API response structure
                        doctorId ={item._id} // Ensure each card has a unique key
                    />
                  )
                })}

              </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    editCon: {
        flexDirection: 'row', 
        borderTopColor: '#00000010',
        borderTopWidth: 1, 
        borderBottomColor: '#00000010', 
        borderBottomWidth: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 10,
        marginTop: 10
    },
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
        margin: 10,
    },
    container2: {
        flex: 1,
        backgroundColor: 'white',
    },
    Text2: {
        marginTop: 50,
        marginLeft: 20,
        color: '#5C9A41',
        fontFamily: 'Syne-SemiBold',
        fontSize: 36,
        fontWeight: '600',
        lineHeight: 43,
        letterSpacing: 0,
        textAlign: 'left',
    },
    resultsContainer: {
        marginTop: 10,
        marginLeft: 20,
    },
    column: {
        flex: 1,
        alignItems: 'center',
        marginRight: 5,
    },
    label: {
        fontSize: 12,
        color: '#00000060',
        textAlign: 'left'
    },
    value: {
        fontSize: 12,
        color: '#000000',
        fontWeight: '500',
        marginTop: 5,
        textAlign: 'left'
    },
});