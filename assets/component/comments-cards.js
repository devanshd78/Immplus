
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions, useWindowDimensions,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CommentCard({remark,rating,name,date,review,index}) {
    const windowWidth = Dimensions.get('window').width;
    const widthPadding = windowWidth - 40;
    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity style={[styles.mainCon,{width: windowWidth * 0.8, marginRight: 10,  marginLeft: index == 0 ? 20 : 0},]}>
        
                <View style={styles.commentCon}>
                    <View style={[styles.flexRow,{alignItems:'center'}]} >
                        <Text style={styles.heading}>{remark}</Text>
                        <View style={styles.ratingCon}>
                            <Text style={styles.rating}>{rating}</Text>
                        </View>
                        
                    </View>
                    <Text style={styles.greyText}>{name} .  {date}</Text>
                    
                        <Text style={styles.expText}>{review}</Text>
                        

                </View>

            </TouchableOpacity>

        </>
    );
}
const styles = StyleSheet.create({
    mainCon: {
        backgroundColor: '#ffffff',
        padding: 18,
        borderColor: '#00000030',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 6,
        flexDirection:'row', 
    },
    flexRow:{
        flexDirection:'row'
    },
    shadowSubHeading: {
        fontSize: 12,
        fontWeight: '400',
        marginTop: 10,
        color: '#00000070',
        textAlign: 'center'
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000',
        marginRight: 10
    },
    greyText:{
        fontSize: 14,
        fontWeight: '400',
        color: '#00000050',
        marginTop:20
    },
    expText:{
        fontSize: 14,
        fontWeight: '400',
        color: '#00000090',
        marginTop:10
    },
    rowBetween:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start'
    },
    ratingCon:{
        borderWidth: 2,
        borderColor: '#54B42B',
        borderStyle:'solid',
        borderRadius: 6,
        padding: 10
    },
    rating:{
        color: '#54B42B',
        fontSize: 16,
        fontWeight: '800',

    }

})
