import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions, useWindowDimensions, Button } from 'react-native';
import styles from './style';
import { LinearGradient } from 'expo-linear-gradient';
import DocterCard from './assets/component/docter-card';
import DocterSlider from './assets/component/docter-slider';
import CommentCard from './assets/component/comments-cards';
import PharmaProduct from './assets/component/pharma-productcard';
import { useNavigation } from '@react-navigation/native';

const images = [
    require('./assets/img/banner-pic-1.png'),
    require('./assets/img/category-1.png'),
    require('./assets/img/category-2.png'),
    require('./assets/img/category-3.png'),
    require('./assets/img/category-4.png'),
];
const pieces = [12, 15, 20, 30, 50]
const dose = [0.5, 1, 1.5, 2]
const pharmaData = [{ id:"1",name: "Evergreen Pharmacy", price: "100", accPrice: "150", time: "15"},{ id:"2",name: "Evergreen Pharmacy", price: "100", accPrice: "150", time: "15"},{ id:"3",name: "Evergreen Pharmacy", price: "100", accPrice: "150", time: "15"}]   
const products = [
    { img: require('./assets/img/category-1.png'), name: "Cold Relief Smoothing Syrup", discount: '10', price: "10", accPrice: '15' },
    { img: require('./assets/img/category-2.png'), name: "Cold Relief Smoothing Syrup", discount: '10', price: "10", accPrice: '15' },
    { img: require('./assets/img/category-3.png'), name: "Cold Relief Smoothing Syrup", discount: '10', price: "10", accPrice: '15' },
    { img: require('./assets/img/category-4.png'), name: "Cold Relief Smoothing Syrup", discount: '10', price: "10", accPrice: '15' },

]
export default function PharmaDesc() {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [selectedTab, setSelectedTab] = useState(1);
    const [selectedDoseTab, setSelectedDoseTab] = useState(1);
    const [selectedPharmaTab, setSelectedPharmaTab] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const { width } = useWindowDimensions();
    const widthPadding = windowWidth - 40
    const commentData = [{ remark: "Good", rating: "4.0", name: "Shivam Lahoty", date: "Mar 08, 2022", review: "Maintenance is superb, staff members are very humble and sweet especially vikash singh and brajesh and receptionist vipin and ranbir are so kind spoken and humble Read More" }, { remark: "Good", rating: "4.0", name: "Shivam Lahoty", date: "Mar 08, 2022", review: "Maintenance is superb, staff members are very humble and sweet especially vikash singh and brajesh and receptionist vipin and ranbir are so kind spoken and humble Read More" }]
    const docterData = [{ name: 'Dr. Raja Ravish Kumar', type: 1, description: 'PHD · Kidney Specialist', exp: '5 +', rating: '4.5', review: '2101', img: require('./assets/img/dummy-pic.jpg') }, { name: 'Dr. Raja Ravish Kumar', type: 2, description: 'PHD · Kidney Specialist', exp: '5 +', rating: '4.5', review: '2101', img: require('./assets/img/dummy-pic.jpg') }, { name: 'Dr. Raja Ravish Kumar', type: 3, description: 'PHD · Kidney Specialist', exp: '5 +', rating: '4.5', review: '2101', img: require('./assets/img/dummy-pic.jpg') }]
    const navigation = useNavigation();

    const handleTabPress = (tabNumber) => {
        setSelectedTab(tabNumber);
    };


    const handleDosePress = (tabNumber) => {
        setSelectedDoseTab(tabNumber);
    };

    const handlePharmaPress = (tabNumber) => {
        setSelectedPharmaTab(tabNumber);
    };

    const handleAdd = () => {
        setQuantity(quantity +1);
    };
    const handleMinus = () => {
        if(quantity !=0){
        setQuantity(quantity -1);
        }
    };
    return (
        <>
            <View style={{ backgroundColor: '#ffffff' }}>
                <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
                <SafeAreaView>
                    <ScrollView contentContainerStyle={[styles.scrollViewContent,{paddingBottom:100}]} animated={true} showsVerticalScrollIndicator={false}>
                        <View style={[styles.headerCon, { padding: widthPadding }]}>
                            <TouchableOpacity style={styles.backBtnCon}  onPress={() => navigation.navigate('pharmacy')}>
                                <Image source={require('./assets/img/back-Btn.png')} style={styles.backBtn} />
                            </TouchableOpacity>
                            <Text style={styles.headerText}>Products Details</Text>
                        </View>

                        <DocterSlider images={images} slideInterval={3000} />
                        <View style={{ alignItems: 'center' }}>
                            <View style={[{ width: widthPadding, marginTop: 20 }]}>
                                <Text style={styles.bigBoldHeading}>Happy Tummy + Pre-Probiotics With Clinically Studied BC30</Text>


                                <View style={[styles.flexRow, styles.justifyContentBetween, { marginTop: 20, paddingHorizontal: 10 }]}>
                                    <View style={[styles.flexRow, { alignItems: 'flex-end', gap: 6 }]}>
                                        <Text style={[styles.bigBoldHeading, { fontSize: 30, fontWeight: "700" }]}>₹100.50</Text>
                                        <Text style={[styles.secondaryHeading, { textDecorationLine: 'line-through', fontStyle: 'normal' }]}>₹1500</Text>

                                    </View>

                                    <View style={[styles.flexRow, { alignItems: 'center', gap: 6 }]}>
                                        <TouchableOpacity onPress={handleMinus}>
                                            <Image source={require('./assets/img/minus-orange-btn.png')} style={styles.mediumIcon} />
                                        </TouchableOpacity>
                                        <Text style={[styles.bigBoldHeading, { fontSize: 18, fontWeight: "700", paddingHorizontal: 10 }]}>{quantity}</Text>
                                        <TouchableOpacity  onPress={handleAdd}>
                                            <Image source={require('./assets/img/add-orange-btn.png')} style={styles.mediumIcon} />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View>
                        <Text style={[styles.heading, { width: widthPadding, marginBottom: 10 }]}>Pieces</Text>

                        <ScrollView contentContainerStyle={[styles.flexRow, { justifyContent: 'center', alignItems: 'center', height: 40 }]} horizontal={true} showsHorizontalScrollIndicator={false}>

                            {pieces.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        style={[
                                            styles.yellowTab,
                                            item === selectedTab && styles.selectedYellowTab,
                                            { marginRight: 10, marginLeft: index == 0 ? 20 : 0 },

                                        ]}
                                        onPress={() => handleTabPress(item)}
                                    >

                                        <Text style={[styles.tabText, item === selectedTab && styles.selectedTabText, { paddingLeft: 0 }]}>
                                            {item} Pack
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>

                        <Text style={[styles.heading, { width: widthPadding, marginBottom: 10 }]}>Dose</Text>

                        <ScrollView contentContainerStyle={[styles.flexRow, { justifyContent: 'center', alignItems: 'center', height: 40 }]} horizontal={true} showsHorizontalScrollIndicator={false}>

                            {dose.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        style={[
                                            styles.yellowTab,
                                            item === selectedDoseTab && styles.selectedYellowTab,
                                            { marginRight: 10, marginLeft: index == 0 ? 20 : 0 },

                                        ]}
                                        onPress={() => handleDosePress(item)}
                                    >

                                        <Text style={[styles.tabText, item === selectedDoseTab && styles.selectedTabText, { paddingLeft: 0 }]}>
                                            {item} Mg
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>




                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: widthPadding }}>
                                <View style={[styles.flexRow, styles.alignItemsCenter]}>
                                    <Image source={require('./assets/img/pharma-sign-green.png')} style={styles.mediumIcon} />
                                    <Text style={[styles.heading, { paddingLeft: 8, color: '#2F551F' }]}>Near By Pharmacy</Text>
                                </View>


                                {pharmaData.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            style={[
                                                styles.greenLightCon,
                                                item.id === selectedPharmaTab && styles.selectedGreenLightCon,
                                                { marginBottom: 10 },

                                            ]}
                                            onPress={() => handlePharmaPress(item.id)}
                                        >
                                            <View style={[styles.flexRow, styles.justifyContentBetween]}>

                                                <Text style={[styles.tabText, { paddingLeft: 0,fontWeight:'600' }]}>{item.name}</Text>
                                                <View style={[styles.flexRow, { alignItems: 'flex-end', gap: 6 }]}>
                                                    <Text style={[styles.bigBoldHeading, { fontSize: 18, fontWeight: "700" }]}>₹{item.price}</Text>
                                                    <Text style={[styles.secondaryHeading, { textDecorationLine: 'line-through', fontStyle: 'normal', fontSize: 12 }]}>₹{item.accPrice}</Text>

                                                </View>
                                            </View>

                                            <View style={[styles.flexRow, styles.justifyContentBetween,{marginTop: 10}]}>
                                                <View style={[styles.flexRow, { alignItems: 'flex-end', gap: 6 }]}>
                                                   
                                                    <Text style={[styles.secondaryHeading, {  fontStyle: 'normal', fontSize: 14 }]}>Arrives:</Text>
                                                    <Text style={[styles.bigBoldHeading, { fontSize: 14, fontWeight: "700" }]}>{item.time} min</Text>
                                                </View>

                                                <View style={[styles.flexRow, { justifyContent: 'center', gap: 6 }]}>
                                                   
                                                 <Image source={require("./assets/img/delivery-icon-orange.png")} style={{width:20,resizeMode:'contain',height:20}} />
                                                   <Text style={[styles.bigBoldHeading, { fontSize: 12, fontWeight: "400" }]}>Free Delivery</Text>
                                               </View>
                                            </View>

                                        </TouchableOpacity>
                                    )
                                })}


                                <Text style={[styles.heading, { paddingLeft: 0, marginBottom: 10 }]}>About Me</Text>
                                <Text style={[styles.shadowSubHeading, { marginTop: 0, fontSize: 14 }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Read More</Text>



                            </View>
                        </View>

                        
                        <Text style={[styles.heading, { paddingLeft: 0, marginBottom: 10, width: widthPadding,alignSelf:'center' }]}>HealthCare Products</Text>

<ScrollView contentContainerStyle={{ marginTop: 16 }} horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16} snapToInterval={windowWidth * 0.4} decelerationRate="fast">


    {products.map((item, index) => {

        return (
            <PharmaProduct
                img={item.img} name={item.name} price={item.price} accPrice={item.accPrice} index={index} discount={item.discount}
            />
        )

    })}


</ScrollView>

                    </ScrollView>
                    <TouchableOpacity style={[styles.gradientBtnCon, { width: widthPadding }]}>
                        <Text style={styles.gradientBtnText}>Order Now</Text>
                        <LinearGradient
                            colors={['rgba(126, 217, 87, 1)', 'rgba(92, 154, 65, 1)']}
                            style={[styles.gradient, { borderRadius: 10 }]}
                        />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </>
    );
}

