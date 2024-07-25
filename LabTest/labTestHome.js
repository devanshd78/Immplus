import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions, useWindowDimensions, Button, TextInput } from 'react-native';
import styles from '../style';
import { LinearGradient } from 'expo-linear-gradient';
import PharmaProduct from '../assets/component/pharma-productcard';
import Category from '../assets/component/category-card';
import LabCard from '../assets/component/lab-cards';
import { useNavigation } from '@react-navigation/native';

const images = [
    require('../assets/img/banner-pic-1.png'),
    require('../assets/img/category-1.png'),
    require('../assets/img/category-2.png'),
    require('../assets/img/category-3.png'),
    require('../assets/img/category-4.png'),
];

const productBanner = [
    require('../assets/img/pharmacy-product-banner-1.png'),
    require('../assets/img/pharmacy-product-banner-1.png'),
    require('../assets/img/pharmacy-product-banner-1.png'),
    require('../assets/img/pharmacy-product-banner-1.png'),
    require('../assets/img/pharmacy-product-banner-2.png'),
    require('../assets/img/pharmacy-product-banner-2.png'),
    require('../assets/img/pharmacy-product-banner-2.png'),
    require('../assets/img/pharmacy-product-banner-2.png'),
];

const labTest = [
    { img: require('../assets/img/lab-test-1.png'), name: "X-Ray" },
    { img: require('../assets/img/lab-test-2.png'), name: "Dentist checkup" },
    { img: require('../assets/img/lab-test-3.png'), name: "Blood pressure " },
    { img: require('../assets/img/lab-test-4.png'), name: "Sugar Test" },
    { img: require('../assets/img/lab-test-5.png'), name: "Infection test" },
    { img: require('../assets/img/lab-test-6.png'), name: "CT scan" },
    { img: require('../assets/img/lab-test-7.png'), name: "Thyroid Test" },
    { img: require('../assets/img/lab-test-8.png'), name: "Full body checkup" },

]

const categoryData = [{ name: 'CT Scans', image: require('../assets/img/test-category-1.png') }, { name: 'X rays', image: require('../assets/img/test-category-2.png') }, { name: 'Full Body', image: require('../assets/img/test-category-3.png') }, { name: 'Dental Care', image: require('../assets/img/test-category-4.png') }]


export default function LabTestHome() {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { width } = useWindowDimensions();
    const widthPadding = windowWidth - 40
    const BannerSize = width * 0.8;
    const [search, setSearch] = useState('');
    const clinicData = [{ name: 'Dr. Raja Ravish Kumar', type: 1, description: 'Blood Pressure · Kidney Tests', exp: '5 +', rating: '4.5', review: '2101', img: require('../assets/img/dummy-pic.jpg') }, { name: 'Dr. Raja Ravish Kumar', type: 2, description: 'Blood Pressure · Kidney Tests', exp: '5 +', rating: '4.5', review: '2101', img: require('../assets/img/dummy-pic.jpg') }, { name: 'Dr. Raja Ravish Kumar', type: 1, description: 'Blood Pressure · Kidney Tests', exp: '5 +', rating: '4.5', review: '2101', img: require('../assets/img/dummy-pic.jpg') }]
 
    const navigation = useNavigation();
    return (
        <>
            <View style={{ backgroundColor: '#ffffff' }}>
                <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
                <SafeAreaView>
                    <ScrollView contentContainerStyle={[{ alignItems: 'center' }]} animated={true} showsVerticalScrollIndicator={false}>
                        <View style={[styles.headerCon, { width: widthPadding, alignItems: 'baseline', justifyContent: 'space-between' }]}>
                            <View style={[{ width: '80%' }]}>
                                <Text style={styles.bigGreenText}>Lab Test</Text>
                                <Text style={styles.greyBoldText}>Welcome! Get started now and turn your real estate dreams to reality</Text>
                            </View>

                            <TouchableOpacity style={styles.greyRoundCon}>
                                <Image source={require('../assets/img/wallet-green.png')} style={styles.mediumIcon} />
                            </TouchableOpacity>

                        </View>


                        <View style={[{ width: widthPadding, marginTop: 20, alignSelf: 'center' }]}>
                            <View style={styles.searchCon}>
                                <Image source={require('../assets/img/search-grey.png')} style={styles.mediumIcon} />
                                <TextInput
                                    style={styles.searchInput}
                                    onChangeText={setSearch}
                                    value={search}
                                    placeholder="Search Anything"
                                />
                            </View>
                        </View>

                        <View style={[styles.justifyContentBetween, styles.flexRow, styles.alignCenter, { width: widthPadding }]}>
                            <Text style={[styles.heading]}>Popular Lab Test</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeMoreBtn}>See More</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.flexRow, { flexWrap: 'wrap', width: widthPadding, justifyContent: 'space-between' }]}>
                            {labTest.map((item, index) => {

                                return (
                                    <TouchableOpacity style={[{ width: windowWidth * 0.22, alignItems: 'center', marginTop: 20 }]} onPress={()=> navigation.navigate('labTestDesc')}>

                                        <Image
                                            source={item.img}
                                            style={[{ resizeMode: 'contain', height: 50, width: 150 }]}
                                        />
                                        <Text style={[styles.secondaryHeading, { textAlign: 'center', marginTop: 10, fontStyle: 'normal', fontWeight: '400', fontSize: 14 }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                )

                            })}

                        </View>

                        <Text style={[styles.heading, { alignSelf: 'baseline' }]}>Test By Category</Text>

                        <View style={styles.alignItemsCenter}>
                            <View style={[styles.categoryCon, styles.flexRow, { width: widthPadding, flexWrap: 'wrap', justifyContent: 'space-evenly' }]}>
                                {categoryData.map((item, index) => {
                                    return (
                                        <Category name={item.name} img={item.image} />
                                    )
                                })}
                            </View>


                        </View>

                        <View style={[styles.justifyContentBetween, styles.flexRow, styles.alignCenter, { width: widthPadding }]}>
                            <Text style={[styles.heading]}>Clinics near you</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeMoreBtn}>See More</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.alignItemsCenter]}>
                                <View style={[styles.categoryCon, styles.flexRow, { paddingHorizontal: 20, flexWrap: 'wrap', justifyContent: 'space-evenly', gap: 10, borderBottomEndRadius: 40, borderBottomLeftRadius: 40, backgroundColor: '#ffffff', paddingBottom: 30 }]}>
                                    {clinicData.map((item, index) => {
                                        return (
                                            <LabCard name={item.name} type={item.type} description={item.description} exp={item.exp} rating={item.rating} review={item.review} img={item.img} />
                                        )
                                    })}
                                </View>
                            </View>


                    </ScrollView>
                </SafeAreaView>
            </View>
        </>
    );
}

