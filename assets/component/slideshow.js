import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions,Text } from 'react-native';
import Swiper from 'react-native-swiper';
import {LinearGradient} from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const Slideshow = ({ images, slideInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [images, slideInterval]);

  return (
<>
<View style={{position:'relative',    flex: 1,}}>
      <Swiper
        style={styles.wrapper}
        loop={true}
        autoplay={true}
        autoplayTimeout={3}
        showsPagination={true}
        dotStyle={[styles.progressBarItem,{width: (width/images.length )-30}]}
        activeDotStyle={[styles.activeDot,{width: (width/images.length )-30}]}
        onIndexChanged={(index) => setCurrentIndex(index)} 
        paginationStyle={{position:'absolute', top: -260, left:0}}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <View style={{flexDirection:'row',gap:6, position:'absolute', top:20, zIndex:2,left:24}}>
                <Image source={require('../img/dummy-pic.jpg')} style={styles.userImg} resizeMode="cover" />
                <Text style={styles.userText}>Niti Palta</Text>
            </View>
            <Image source={image} style={styles.image} resizeMode="cover" />
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
              style={styles.gradient}
            />
            <View style={[{position:'absolute', bottom:20, zIndex:2,left:24}]}>
                <Text style={[styles.description]}>"Immune Plus is where the heart is, and today, our hearts are overflowing with joy and gratitude. ”</Text>
                <Text style={styles.date}>19 Sept 2023</Text>
            </View>
          </View>
        ))}
      </Swiper>

      </View>
</>
  );
};

const styles = StyleSheet.create({

  wrapper: {height: 350, paddingTop: 50},
  slide: {

  },
  image: {
    width:'100%',
    height: 250,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  progressBarItem: {
    height: 3,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor:'#ffffff30'
  },
  activeDot:{
    height: 3,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor:'#ffffff'
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  userImg:{
    width:20,
    height:20,
    resizeMode:'cover',
    overflow:'hidden',
    borderRadius: 20
  },
  userText:{
    fontSize: 12,
    color:'#ffffff',
    fontWeight:'300',
    fontWeight:'500'
  },
  description:{
    fontSize: 13,
    color:'#C0C0C0',
    fontWeight:'300'
  },
  date:{
    fontSize: 12,
    color:'#8A8A8A',
    fontWeight:'300',
    marginTop: 10
  }
});

export default Slideshow;
