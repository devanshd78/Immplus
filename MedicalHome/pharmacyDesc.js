import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions, useWindowDimensions, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PharmaProduct from '../assets/component/pharma-productcard';
import styles from '../style';
import { useNavigation } from '@react-navigation/native';
import DocterCard from '../assets/component/docter-card';
import DocterSlider from '../assets/component/docter-slider';
import CommentCard from '../assets/component/comments-cards';
import axios from 'axios';

const pharmaData = [{ id: "1", name: "Evergreen Pharmacy", price: "100", accPrice: "150", time: "15" }];

export default function PharmaDesc() {
    const [selectedTab, setSelectedTab] = useState(1);
    const [selectedDoseTab, setSelectedDoseTab] = useState(1);
    const [selectedPharmaTab, setSelectedPharmaTab] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [productDetails, setProductDetails] = useState(null);
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
    const windowWidth = Dimensions.get('window').width;
    const widthPadding = windowWidth - 40;
    const [images, setImages] = useState([]);
    const [products, setProducts] = useState([]);
    const [UserId, setUserId] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const placeOrder = async () => {
        try {
            const response = await axios.post('https://immuneapi-production.up.railway.app/order/create', {
                userId: UserId,
                products: [
                    {
                        productId: productDetails._id,
                        name: productDetails.name,
                        price: productDetails.price,
                        pieces: selectedTab,
                        dose: selectedDoseTab,
                        quantity: quantity,
                    },
                ],
                location: 'Delhi',
            });

            if (response.status === 200) {
                console.log('Order placed successfully');
            } else {
                console.error('Failed to place order');
            }
        } catch (error) {
            console.error('An error occurred while placing the order:', error.message);
        }
    };


    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://immuneapi-production.up.railway.app/product/records');
            if (response.status === 200) {
                setProducts(response.data);
            } else {
                console.error('Failed to fetch product data');
            }
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    const fetchProductDetails = async () => {
        try {
            const productId = await AsyncStorage.getItem('ProductId');
            if (productId) {
                const response = await axios.get('https://immuneapi-production.up.railway.app/product/getById', {
                    params: { id: productId },
                });

                if (response.status === 200) {
                    const product = response.data[0];
                    setProductDetails(product);
                    const imageUrls = [product.img];
                    setImages(imageUrls.map(img => ({
                        uri: `https://immuneapi-production.up.railway.app/${img}`
                    })));
                } else {
                    console.error('Failed to fetch product details');
                }
            }
        } catch (error) {
            console.error('Failed to fetch product details:', error);
        }
    };

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchProducts();
        await fetchProductDetails();
        setRefreshing(false);
    }, []);

    useEffect(() => {
        const getUserId = async () => {
            const userId = await AsyncStorage.getItem('UserId');
            setUserId(userId);
        };

        getUserId();
        fetchProducts();
        fetchProductDetails();
    }, []);

    if (!productDetails) {
        return <Text>Loading...</Text>;
    }

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
        setQuantity(quantity + 1);
    };

    const handleMinus = () => {
        if (quantity !== 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <View style={{ backgroundColor: '#ffffff' }}>
                <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
                <SafeAreaView>
                    <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 100 }]} animated={true} showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} >
                        <View style={[styles.headerCon, { padding: widthPadding }]}>
                            <TouchableOpacity style={styles.backBtnCon} onPress={() => navigation.navigate('pharmacy')}>
                                <Image source={require('../assets/img/back-Btn.png')} style={styles.backBtn} />
                            </TouchableOpacity>
                            <Text style={styles.headerText}>Products Details</Text>
                        </View>

                        {/* Assuming DocterSlider is a component that shows a slider of images */}
                        <DocterSlider images={images} slideInterval={3000} />
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: widthPadding }}>
                                <Text style={styles.bigBoldHeading}>{productDetails.name}</Text>
                                <View style={[styles.flexRow, styles.justifyContentBetween, { marginTop: 20, paddingHorizontal: 10 }]}>
                                    <View style={[styles.flexRow, { alignItems: 'flex-end', gap: 6 }]}>
                                        <Text style={[styles.bigBoldHeading, { fontSize: 30, fontWeight: "700" }]}>₹{productDetails.price}</Text>
                                        <Text style={[styles.secondaryHeading, { textDecorationLine: 'line-through', fontStyle: 'normal' }]}>₹{productDetails.accPrice}</Text>
                                    </View>
                                    <View style={[styles.flexRow, { alignItems: 'center', gap: 6 }]}>
                                        <TouchableOpacity onPress={handleMinus}>
                                            <Image source={require('../assets/img/minus-orange-btn.png')} style={styles.mediumIcon} />
                                        </TouchableOpacity>
                                        <Text style={[styles.bigBoldHeading, { fontSize: 18, fontWeight: "700", paddingHorizontal: 10 }]}>{quantity}</Text>
                                        <TouchableOpacity onPress={handleAdd}>
                                            <Image source={require('../assets/img/add-orange-btn.png')} style={styles.mediumIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* Pieces Selection */}
                        <Text style={[styles.heading, { width: widthPadding, marginBottom: 10 }]}>Pieces</Text>
                        <ScrollView contentContainerStyle={[styles.flexRow, { justifyContent: 'center', alignItems: 'center', height: 40 }]} horizontal={true} showsHorizontalScrollIndicator={false}>
                            {productDetails.pieces.map((item, index) => (
                                <TouchableOpacity
                                    key={item}
                                    style={[
                                        styles.yellowTab,
                                        item === selectedTab && styles.selectedYellowTab,
                                        { marginRight: 10, marginLeft: index === 0 ? 20 : 0 },
                                    ]}
                                    onPress={() => handleTabPress(item)}
                                >
                                    <Text style={[styles.tabText, item === selectedTab && styles.selectedTabText, { paddingLeft: 0 }]}>
                                        {item} Pack
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>

                        {/* Dose Selection */}
                        <Text style={[styles.heading, { width: widthPadding, marginBottom: 10 }]}>Dose</Text>
                        <ScrollView contentContainerStyle={[styles.flexRow, { justifyContent: 'center', alignItems: 'center', height: 40 }]} horizontal={true} showsHorizontalScrollIndicator={false}>
                            {productDetails.dose.map((item, index) => (
                                <TouchableOpacity
                                    key={item}
                                    style={[
                                        styles.yellowTab,
                                        item === selectedDoseTab && styles.selectedYellowTab,
                                        { marginRight: 10, marginLeft: index === 0 ? 20 : 0 },
                                    ]}
                                    onPress={() => handleDosePress(item)}
                                >
                                    <Text style={[styles.tabText, item === selectedDoseTab && styles.selectedTabText, { paddingLeft: 0 }]}>
                                        {item} Mg
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>

                        {/* Pharmacy Information */}
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: widthPadding }}>
                                <View style={[styles.flexRow, styles.alignItemsCenter]}>
                                    <Image source={require('../assets/img/pharma-sign-green.png')} style={styles.mediumIcon} />
                                    <Text style={[styles.heading, { paddingLeft: 8, color: '#2F551F' }]}>Near By Pharmacy</Text>
                                </View>

                                {pharmaData.map((item) => (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={[
                                            styles.greenLightCon,
                                            item.id === selectedPharmaTab && styles.selectedGreenLightCon,
                                            { marginBottom: 10 },
                                        ]}
                                        onPress={() => handlePharmaPress(item.id)}
                                    >
                                        <View style={[styles.flexRow, styles.justifyContentBetween]}>
                                            <Text style={[styles.tabText, { paddingLeft: 0, fontWeight: '600' }]}>{item.name}</Text>
                                            <View style={[styles.flexRow, { alignItems: 'flex-end', gap: 6 }]}>
                                                <Text style={[styles.bigBoldHeading, { fontSize: 18, fontWeight: "700" }]}>₹{item.price}</Text>
                                                <Text style={[styles.secondaryHeading, { textDecorationLine: 'line-through', fontStyle: 'normal', fontSize: 12 }]}>₹{item.accPrice}</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.flexRow, styles.justifyContentBetween, { marginTop: 10 }]}>
                                            <View style={[styles.flexRow, { alignItems: 'flex-end', gap: 6 }]}>
                                                <Text style={[styles.secondaryHeading, { fontStyle: 'normal', fontSize: 14 }]}>Arrives:</Text>
                                                <Text style={[styles.bigBoldHeading, { fontSize: 14, fontWeight: "700" }]}>{item.time} min</Text>
                                            </View>
                                            <View style={[styles.flexRow, { justifyContent: 'center', gap: 6 }]}>
                                                <Image source={require("../assets/img/delivery-icon-orange.png")} style={{ width: 20, resizeMode: 'contain', height: 20 }} />
                                                <Text style={[styles.bigBoldHeading, { fontSize: 12, fontWeight: "400" }]}>Free Delivery</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}

                                {/* About the Product */}
                                <Text style={[styles.heading, { paddingLeft: 0, marginBottom: 10 }]}>About Me</Text>
                                <Text style={[styles.shadowSubHeading, { marginTop: 0, fontSize: 14 }]}>
                                    {productDetails.description}
                                </Text>
                            </View>
                        </View>

                        {/* Related Products */}
                        <Text style={[styles.heading, { paddingLeft: 0, marginBottom: 10, width: widthPadding, alignSelf: 'center' }]}>HealthCare Products</Text>
                        <ScrollView contentContainerStyle={{ marginTop: 16 }} horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16} snapToInterval={windowWidth * 0.4} decelerationRate="fast">
                            {products.map((item, index) => {
                                return (
                                    <PharmaProduct
                                        img={{ uri: `https://immuneapi-production.up.railway.app/${item.img}` }} name={item.name} price={item.price} accPrice={item.accPrice} index={index} discount={item.discount} productId={item._id}
                                    />
                                )
                            })}
                        </ScrollView>
                    </ScrollView>
                    <TouchableOpacity style={[styles.gradientBtnCon, { width: widthPadding }]} onPress={placeOrder}>
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