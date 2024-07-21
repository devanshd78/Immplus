import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions,Text } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const DocterSlider = ({ images, slideInterval }) => {
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
        autoplay={false}
        showsPagination={true}
        dotStyle={[styles.progressBarItem,{width: (width/images.length )-30}]}
        activeDotStyle={[styles.activeDot,{width: (width/images.length )-30}]}
        paginationStyle={{position:'absolute', bottom: 20, left:0}}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </Swiper>

      </View>
</>
  );
};

const styles = StyleSheet.create({

  wrapper: {height: 370},
  slide: {

  },
  image: {
    width:'100%',
    height: 370,
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

});

export default DocterSlider;
