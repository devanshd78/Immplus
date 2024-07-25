import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions } from 'react-native';
import styles from '../style';
import { LinearGradient } from 'expo-linear-gradient';
import DocterCard from '../assets/component/docter-card';
import DocterSlider from '../assets/component/docter-slider';
import CommentCard from '../assets/component/comments-cards';
import axios from 'axios';

const images = [
    require('../assets/img/banner-pic-1.png'),
    require('../assets/img/category-1.png'),
    require('../assets/img/category-2.png'),
    require('../assets/img/category-3.png'),
    require('../assets/img/category-4.png'),
];

export default function DocterDesc() {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const widthPadding = windowWidth - 40
    const [doctorData, setDoctorData] = useState([]);
    
    const commentData = [{ remark: "Good", rating: "4.0", name: "Shivam Lahoty", date: "Mar 08, 2022", review: "Maintenance is superb, staff members are very humble and sweet especially vikash singh and brajesh and receptionist vipin and ranbir are so kind spoken and humble Read More" }, { remark: "Good", rating: "4.0", name: "Shivam Lahoty", date: "Mar 08, 2022", review: "Maintenance is superb, staff members are very humble and sweet especially vikash singh and brajesh and receptionist vipin and ranbir are so kind spoken and humble Read More" }]
    
    useEffect(() => {
        fetchDoctorData();
    }, []);

    const fetchDoctorData = async () => {
        try {
            const response = await axios.get('https://immuneapi-production.up.railway.app/docter/records');
            if (response.status === 200) {
                setDoctorData(response.data);
            } else {
                console.error('Failed to fetch doctor data');
            }
        } catch (error) {
            console.error('Error fetching doctor data:', error);
        }
    };

    return (
        <>
            <View style={{ backgroundColor: '#ffffff' }}>
                <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
                <SafeAreaView>
                    <ScrollView contentContainerStyle={[styles.scrollViewContent]} animated={true} showsVerticalScrollIndicator={false}>
                        <View style={[styles.headerCon, { padding: widthPadding }]}>
                            <TouchableOpacity style={styles.backBtnCon}>
                                <Image source={require('../assets/img/back-Btn.png')} style={styles.backBtn} />
                            </TouchableOpacity>
                            <Text style={styles.headerText}>Doctor Details</Text>
                        </View>

                        <DocterSlider images={images} slideInterval={3000} />
                        <View style={{ alignItems: 'center' }}>
                            <View style={[{ width: widthPadding, marginTop: 20 }]}>
                                <Text style={styles.bigBoldHeading}>Dr. Raja Ravish Kumar</Text>
                                <Text style={styles.secondaryHeading}>Kidney Specialist</Text>
                                <View style={[styles.flexRow, { gap: 6, marginTop: 4 }]}>
                                    <Image source={require('../assets/img/hospital-grey.png')} style={styles.smallIcon} />
                                    <Text style={styles.bigGreyText}>Kalesh Hospital</Text>
                                </View>


                                <View style={[styles.flexRow, styles.justifyContentBetween, { marginTop: 20, paddingHorizontal: 10 }]}>
                                    <View style={{ alignItems: 'center' }}>
                                        <View style={styles.greenRoundCon}>
                                            <Image source={require('../assets/img/allopathy-green.png')} style={styles.mediumIcon} />
                                        </View>
                                        <Text style={styles.tabText}>Allopathy</Text>
                                        <Text style={styles.shadowSubHeading}>Doctor</Text>
                                    </View>

                                    <View style={{ alignItems: 'center' }}>
                                        <View style={styles.greenRoundCon}>
                                            <Image source={require('../assets/img/patient-green.png')} style={styles.mediumIcon} />
                                        </View>
                                        <Text style={styles.tabText}>8000+</Text>
                                        <Text style={styles.shadowSubHeading}>Patients</Text>
                                    </View>

                                    <View style={{ alignItems: 'center' }}>
                                        <View style={styles.greenRoundCon}>
                                            <Image source={require('../assets/img/exprience-green.png')} style={styles.mediumIcon} />
                                        </View>
                                        <Text style={styles.tabText}>5+</Text>
                                        <Text style={styles.shadowSubHeading}>Experience</Text>
                                    </View>

                                    <View style={{ alignItems: 'center' }}>
                                        <View style={styles.greenRoundCon}>
                                            <Image source={require('../assets/img/rating-green.png')} style={styles.mediumIcon} />
                                        </View>
                                        <Text style={styles.tabText}>4.5</Text>
                                        <Text style={styles.shadowSubHeading}>Rating</Text>
                                    </View>

                                </View>

                                <View>
                                    <Text style={[styles.heading, { paddingLeft: 0, marginBottom: 10 }]}>About Me</Text>
                                    <Text style={[styles.shadowSubHeading, { marginTop: 0, fontSize: 14 }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Read More</Text>
                                </View>

                                <View>
                                    <Text style={[styles.heading, { paddingLeft: 0, marginBottom: 10 }]}>Location</Text>
                                    <Text style={[styles.shadowSubHeading, { marginTop: 0, fontSize: 14 }]}>Monday - Friday , 08:00 - 22:30</Text>
                                </View>

                                <View>
                                    <Text style={[styles.heading, { paddingLeft: 0, marginBottom: 10 }]}>Working Hours</Text>
                                    <Text style={[styles.shadowSubHeading, { marginTop: 0, fontSize: 14 }]}>G-181, JagatFarm, Greater Noida, Gautam Budda Nagar,Uttar Pradesh, 201310</Text>
                                </View>
                            </View>



                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: widthPadding }}>
                                <Text style={[styles.heading, { paddingLeft: 0, marginBottom: 10 }]}>Reviews</Text>
                                <View style={styles.flexRow}>
                                    <View style={styles.ratingCon}><Text style={styles.rating}>4</Text><Text style={styles.totalRating}>/5</Text></View>
                                    <View style={{ paddingHorizontal: 10, paddingVertical: 6 }}>
                                        <Text style={[styles.heading, { marginTop: 0, fontSize: 14, paddingLeft: 0, marginBottom: 6 }]}>Very Good</Text>
                                        <Text style={[styles.shadowSubHeading, { marginTop: 0, fontSize: 14 }]}>267 Rating and 200 Reviews</Text>
                                    </View>
                                </View>
                            </View>

                            <ScrollView contentContainerStyle={styles.bannerCon} horizontal showsHorizontalScrollIndicator={false} bounces={false} scrollEventThrottle={16} snapToInterval={windowWidth * 0.8} decelerationRate="fast">
                                {commentData.map((item, index) => {
                                    return (
                                        <CommentCard remark={item.remark} rating={item.rating} name={item.name} date={item.date} review={item.review} index={index} />
                                    )
                                })}
                            </ScrollView>

                            <View style={[styles.justifyContentBetween, styles.flexRow, styles.alignCenter, { width: widthPadding }]}>
                                <Text style={[styles.heading, { paddingLeft: 0 }]}>Top Rated Doctors</Text>
                                <TouchableOpacity>
                                    <Text style={styles.seeMoreBtn}>See More</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.alignItemsCenter]}>
                                <View style={[styles.categoryCon, styles.flexRow, { paddingHorizontal: 20, flexWrap: 'wrap', justifyContent: 'space-evenly', gap: 10, borderBottomEndRadius: 40, borderBottomLeftRadius: 40, backgroundColor: '#ffffff', paddingBottom: 30 }]}>
                                    {docterData.map((item, index) => {
                                        return (
                                            <DocterCard name={item.name} type={item.type} description={item.description} exp={item.exp} rating={item.rating} review={item.review} img={item.img} />
                                        )
                                    })}
                                </View>
                            </View>
                        </View>


                    </ScrollView>
                    <TouchableOpacity style={[styles.gradientBtnCon, { width: widthPadding }]}>
                            <Text style={styles.gradientBtnText}>Book Appointment</Text>
                            <LinearGradient
                                colors={['rgba(126, 217, 87, 1)', 'rgba(92, 154, 65, 1)']}
                                style={[styles.gradient,{    borderRadius: 10}]}
                            />
                        </TouchableOpacity>
                </SafeAreaView>
            </View>
        </>
    );
}

