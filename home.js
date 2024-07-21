import { StatusBar } from 'expo-status-bar';
import { AppRegistry, Platform } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions, useWindowDimensions, Button } from 'react-native';
import styles from './style';
import { Animated, useSharedValue, useAnimationStyle, useAnimationScrollHandler, interpolate } from 'react-native-reanimated';
import { onScroll } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import { useNavigation } from '@react-navigation/native';
import Category from './assets/component/category-card';
import DocterCard from './assets/component/docter-card';
import Slideshow from './assets/component/slideshow';
import LightGreenCard from './assets/component/lightGreen-card';

AppRegistry.registerComponent('main', () => App);
export default function Home() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [imageURIs, setImageURIs] = useState([require('./assets/img/banner-pic-1.png'), require('./assets/img/banner-pic-1.png'),]);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { width } = useWindowDimensions();
  const widthPadding = windowWidth - 40
  const BannerSize = width * 0.8
  const bannerData = [{ image: require('./assets/img/banner-pic-1.png') }, { image: require('./assets/img/banner-pic-1.png') }, { image: require('./assets/img/banner-pic-1.png') }]
  const categoryData = [{ name: 'Top Products', image: require('./assets/img/category-1.png') }, { name: 'Health Care', image: require('./assets/img/category-2.png') }, { name: 'Elderly Care', image: require('./assets/img/category-3.png') }, { name: 'Child Care', image: require('./assets/img/category-4.png') }, { name: 'Top Products', image: require('./assets/img/category-1.png') }, { name: 'Health Care', image: require('./assets/img/category-2.png') }, { name: 'Elderly Care', image: require('./assets/img/category-3.png') }, { name: 'Child Care', image: require('./assets/img/category-4.png') }]
  const docterData = [{ name: 'Dr. Raja Ravish Kumar', type: 1, description: 'PHD · Kidney Specialist', exp: '5 +', rating: '4.5', review: '2101', img: require('./assets/img/dummy-pic.jpg') }, { name: 'Dr. Raja Ravish Kumar', type: 2, description: 'PHD · Kidney Specialist', exp: '5 +', rating: '4.5', review: '2101', img: require('./assets/img/dummy-pic.jpg') }, { name: 'Dr. Raja Ravish Kumar', type: 3, description: 'PHD · Kidney Specialist', exp: '5 +', rating: '4.5', review: '2101', img: require('./assets/img/dummy-pic.jpg') }]
  const handleTabPress = (tabNumber) => {
    setSelectedTab(tabNumber);
  };
  const navigation = useNavigation();


  const images = [
    require('./assets/img/banner-pic-1.png'),
    require('./assets/img/category-1.png'),
    require('./assets/img/category-1.png'),
    require('./assets/img/category-1.png'),
    require('./assets/img/category-1.png'),
  ];


  return (
    <>
    <View style={{backgroundColor:'#ffffff'}}>
      <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={[styles.scrollViewContent,{backgroundColor:'#ffffff'}]} animated={true}>
          <View style={[styles.flexRow, styles.justifyContentBetween, styles.paddingHor20]}>
            <View style={[styles.flexRow, styles.locationCon, styles.alignItemsCenter]}>
              <View style={styles.greenCon}>
                <Image
                  source={require('./assets/img/location-home.png')}
                  style={styles.locationImg}
                />
              </View>
              <TouchableOpacity style={styles.ml10} >
                <Text style={styles.subHeading}>Current Location</Text>
                <View style={[styles.flexRow, styles.alignItemsCenter]}>
                  <Text style={styles.location}>Location</Text>
                  <Image
                    source={require('./assets/img/down-arrow.png')}
                    style={styles.downArrow}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.userConHome} >
              <Image
                source={require('./assets/img/no-user-pic.png')}
                style={styles.userPicHome}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={[styles.heading]}>Type of Treatment</Text>

            <ScrollView contentContainerStyle={[styles.flexRow, { gap: 10 }]} horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={[
                  styles.tab,
                  selectedTab === 1 && styles.selectedTab,
                  styles.marginLeft20
                ]}
                onPress={() => handleTabPress(1)}
              >

                <Image source={require('./assets/img/homeopathy-main.png')} style={[styles.tabIcon]} />
                <Text style={[styles.tabText, selectedTab === 1 && styles.selectedTabText]}>
                  Homeopathy
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tab,
                  selectedTab === 2 && styles.selectedTab,
                ]}
                onPress={() => handleTabPress(2)}
              >
                <Image source={require('./assets/img/allopathy-main.png')} style={styles.tabIcon} />
                <Text style={[styles.tabText, selectedTab === 2 && styles.selectedTabText]}>

                  Allopathy
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tab,
                  selectedTab === 3 && styles.selectedTab,
                ]}
                onPress={() => handleTabPress(3)}
              >
                <Image source={require('./assets/img/ayurveda-main.png')} style={styles.tabIcon} />
                <Text style={[styles.tabText, selectedTab === 3 && styles.selectedTabText]}>

                  Ayurveda
                </Text>
              </TouchableOpacity>


            </ScrollView>


          </View>
          <View>
            <Text style={[styles.heading]}>Services</Text>

            <View style={styles.alignItemsCenter}>
              <View style={[styles.serviceCon, styles.flexRow, styles.justifyContentBetween, { width: widthPadding }]}>
                <View style={styles.firstRow}>
                  <TouchableOpacity onPress={()=> navigation.navigate('findDocter')}>
                    <View style={[styles.shadowBox]}>
                      <View>
                        <Text style={styles.shadowHeading}>Find a Doctor</Text>
                        <Text style={styles.shadowSubHeading}>302 Doctors  Available</Text>

                        <Image
                          source={require('./assets/img/docter-home.png')}
                          style={styles.shadowBoxImg1}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.shadowBox}>
                      <View>
                        <Text style={styles.shadowHeading}>Treatments</Text>
                        <Text style={styles.shadowSubHeading}>Home Diagnostic sample collection</Text>

                        <Image
                          source={require('./assets/img/treatments-home.png')}
                          style={styles.shadowBoxImg2}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.firstRow}>
                  <TouchableOpacity onPress={()=> navigation.navigate('pharmacy')}>
                    <View style={[styles.shadowBox]}>
                      <View>
                        <Text style={styles.shadowHeading}>Order Medicine</Text>
                        <Text style={styles.shadowSubHeading}>Get genuine medicine delivered within hours</Text>

                        <Image
                          source={require('./assets/img/medicine-home.png')}
                          style={styles.shadowBoxImg3}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={[styles.shadowBox]}>
                      <View>
                        <Text style={styles.shadowHeading}>Diagnostic Tests</Text>
                        <Text style={styles.shadowSubHeading}>Home Diagnostic sample collection</Text>

                        <Image
                          source={require('./assets/img/tests-home.png')}
                          style={styles.shadowBoxImg4}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <ScrollView contentContainerStyle={styles.bannerCon} horizontal showsHorizontalScrollIndicator={false} bounces={false} scrollEventThrottle={16} snapToInterval={windowWidth * 0.8} decelerationRate="fast">
                {bannerData.map((item, index) => {
                  return (
                    <View style={[, { width: BannerSize, marginLeft: index == 0 ? 20 : 0, marginRight: 20 }]}>
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


            </View>


          </View>

          <View>
            <Text style={[styles.heading]}>Shop By Category</Text>

            <View style={styles.alignItemsCenter}>
              <View style={[styles.categoryCon, styles.flexRow, { width: widthPadding, flexWrap: 'wrap', justifyContent: 'space-evenly' }]}>
                {categoryData.map((item, index) => {
                  return (
                    <Category name={item.name} img={item.image} />
                  )
                })}
              </View>


            </View>


          </View>

          <View>
            <View style={[styles.justifyContentBetween, styles.flexRow, styles.alignCenter, { width: widthPadding }]}>
              <Text style={[styles.heading]}>Top Rated Doctors</Text>
              <TouchableOpacity>
                <Text style={styles.seeMoreBtn}>See More</Text>
              </TouchableOpacity>
            </View>


            <View style={[styles.alignItemsCenter, { backgroundColor: '#000000', }]}>
              <View style={[styles.categoryCon, styles.flexRow, { paddingHorizontal: 20, flexWrap: 'wrap', justifyContent: 'space-evenly', gap: 10, borderBottomEndRadius: 40, borderBottomLeftRadius: 40, backgroundColor: '#ffffff', paddingBottom: 30 }]}>
                {docterData.map((item, index) => {
                  return (
                    <DocterCard name={item.name} type={item.type} description={item.description} exp={item.exp} rating={item.rating} review={item.review} img={item.img} />
                  )
                })}

              </View>
              <View style={[styles.flexRow, styles.justifyContentBetween, { paddingTop: 30, width: widthPadding }]}>
                <View style={{}}>
                  <View style={[styles.flexRow, { marginBottom: 6 }]}>
                    <Image source={require('./assets/img/comment-star.png')} style={[styles.smallIcon,{marginRight: 10}]} />
                    <Text style={styles.whiteHeading}>People using Immune Plus</Text>
                  </View>
                  <Text style={styles.greyText}>Feedback from our users</Text>
                </View>
                <Image source={require('./assets/img/star-review-decor.png')} style={styles.startBg} />
              </View>
              <Slideshow images={images} slideInterval={3000} />

            </View>

            <View style={[styles.alignItemsCenter, { backgroundColor: '#000000', }]}>
              <View style={[styles.categoryCon, styles.flexRow, { paddingHorizontal: 20, flexWrap: 'wrap', justifyContent: 'space-evenly', gap: 10, borderTopLeftRadius: 40, borderTopEndRadius: 40, backgroundColor: '#ffffff', paddingTop: 30, paddingBottom: 30 }]}>
                <Text style={[styles.heading, { textAlign: 'left', width: '100%' }]}>Services Shortcuts</Text>
                <View style={[styles.flexRow, styles.justifyContentBetween, { width: widthPadding, flexWrap: 'wrap' }]}>
                    <LightGreenCard name={"Make Appointment"} img={require('./assets/img/make-appointment-ser.png')}/>
                    <LightGreenCard name={"Online Consultation"} img={require('./assets/img/online-cosultation-ser.png')}/>
                    <LightGreenCard name={"Order Medicine"} img={require('./assets/img/online-medicine-ser.png')}/>
                    <LightGreenCard name={"Home Lab Tests"} img={require('./assets/img/home-lab-ser.png')}/>

                </View>
              </View>

            </View>

            <View style={[styles.footer,{paddingVertical:20}]}>
              <Image source={require('./assets/img/footer-img.png')} style={styles.footerImg} />
              <Text style={styles.footerText}>Good health is not something we can buy. However, it can be an extremely valuable savings account.</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      </View>
    </>
  );
}