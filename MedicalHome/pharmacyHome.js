import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions, useWindowDimensions, Button, TextInput, RefreshControl } from 'react-native';
import styles from '../style';
import { LinearGradient } from 'expo-linear-gradient';
import PharmaProduct from '../assets/component/pharma-productcard';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


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

export default function PharmacyHome() {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { width } = useWindowDimensions();
    const widthPadding = windowWidth - 40
    const BannerSize = width * 0.8;
    const [search, setSearch] = useState('');
    const bannerData = [{ image: require('../assets/img/banner-pic-1.png') }, { image: require('../assets/img/banner-pic-1.png') }, { image: require('../assets/img/banner-pic-1.png') }]
    const [products, setProducts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation();

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

    useEffect(() => {
        fetchProducts();
    }, []);

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchProducts();
        setRefreshing(false);
    };

    return (
        <>
            <View style={{ backgroundColor: '#ffffff' }}>
                <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
                <SafeAreaView>
                    <ScrollView contentContainerStyle={[{ alignItems: 'center' }]} animated={true} showsVerticalScrollIndicator={false} refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                        <View style={[styles.headerCon, { width: widthPadding, alignItems: 'baseline', justifyContent: 'space-between' }]}>
                            <View style={[{ width: '80%' }]}>
                                <Text style={styles.bigGreenText}>Pharmacy</Text>
                                <Text style={styles.greyBoldText}>Welcome! Get started now and turn your real estate dreams to reality</Text>
                            </View>

                            <TouchableOpacity style={styles.greyRoundCon}>
                                <Image source={require('../assets/img/wallet-green.png')} style={styles.mediumIcon} />
                            </TouchableOpacity>

                        </View>

                        <ScrollView contentContainerStyle={{ marginTop: 10 }} horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16} snapToInterval={windowWidth * 0.8} decelerationRate="fast">
                            {bannerData.map((item, index) => {
                                return (
                                    <View style={[{ width: BannerSize, marginLeft: index == 0 ? 20 : 0, marginRight: 20 }]}>
                                        <View style={[styles.imageContainer]}>
                                            <Image
                                                source={item.image}
                                                style={[styles.banner,]}
                                            />
                                        </View>
                                    </View>
                                )
                            })}

                        </ScrollView>


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

                        <Text style={[styles.heading, { paddingLeft: 0, marginBottom: 10, width: widthPadding }]}>Browse Medicine & Health Products</Text>
                        <ScrollView contentContainerStyle={{ marginTop: 6 }} horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16} snapToInterval={windowWidth * 0.8} decelerationRate="fast">
                            {productBanner.map((item, index) => {
                                if (index <= 3) {
                                    return (
                                        <View style={[{ width: 150, marginLeft: index == 0 ? 20 : 0, marginRight: 20 }]}>
                                            <View style={[styles.productsBanner]}>
                                                <Image
                                                    source={item}
                                                    style={[{ resizeMode: 'contain', height: 50, width: 150 }]}
                                                />
                                            </View>
                                        </View>
                                    )
                                }
                            })}


                        </ScrollView>

                        <ScrollView contentContainerStyle={{ marginTop: 16 }} horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16} snapToInterval={windowWidth * 0.8} decelerationRate="fast">


                            {productBanner.map((item, index) => {
                                if (index >= 4 && index <= 7) {
                                    return (
                                        <View style={[{ width: 150, marginLeft: index == 4 ? 20 : 0, marginRight: 20 }]}>
                                            <View style={[styles.productsBanner]}>
                                                <Image
                                                    source={item}
                                                    style={[{ resizeMode: 'contain', height: 50, width: 150 }]}
                                                />
                                            </View>
                                        </View>
                                    )
                                }
                            })}


                        </ScrollView>


                        <Text style={[styles.heading, { paddingLeft: 0, marginBottom: 10, width: widthPadding }]}>Best Selling Products</Text>

                        <ScrollView contentContainerStyle={{ marginTop: 16 }} horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16} snapToInterval={windowWidth * 0.4} decelerationRate="fast">


                            {products.map((item, index) => {

                                return (
                                    <PharmaProduct
                                        img={{ uri: `https://immuneapi-production.up.railway.app/${item.img}` }} name={item.name} price={item.price} accPrice={item.accPrice} index={index} discount={item.discount} productId={item._id}
                                    />
                                )

                            })}

                        </ScrollView>

                        <Text style={[styles.heading, { paddingLeft: 0, marginBottom: 10, width: widthPadding }]}>HealthCare Products</Text>

                        <ScrollView contentContainerStyle={{ marginTop: 16 }} horizontal showsHorizontalScrollIndicator={false} bounces={false} scrollEventThrottle={16} snapToInterval={windowWidth * 0.4} decelerationRate="fast">

                            {products.map((item, index) => {

                                return (
                                    <PharmaProduct
                                        img={{ uri: `https://immuneapi-production.up.railway.app/${item.img}` }} name={item.name} price={item.price} accPrice={item.accPrice} index={index} discount={item.discount}
                                    />
                                )
                            })}
                        </ScrollView>

                        <Image source={require('../assets/img/get-help-banner.png')} style={[styles.greenHelpBanner, { width: widthPadding }]} />

                        <Text style={[styles.heading, { paddingLeft: 0, marginBottom: 10, width: widthPadding }]}>HealthCare Products</Text>

                        <ScrollView contentContainerStyle={{ marginTop: 16 }} horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16} snapToInterval={windowWidth * 0.4} decelerationRate="fast">

                            {products.map((item, index) => {

                                return (
                                    <PharmaProduct
                                        img={{ uri: `https://immuneapi-production.up.railway.app/${item.img}` }} name={item.name} price={item.price} accPrice={item.accPrice} index={index} discount={item.discount}
                                    />
                                )
                            })}
                        </ScrollView>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </>
    );
}

