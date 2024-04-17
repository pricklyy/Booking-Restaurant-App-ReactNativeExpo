import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../utils/GlobalApi'
import Heading from './Heading';

export default function Slider() {

    const [slider,setSlider] = useState();
    useEffect(() => {
        getSlider();
    },[]) 
    const getSlider=()=> {
        GlobalApi.getSlider().then(resp => {
            // console.log("resp",resp.sliders);
            setSlider(resp?.sliders)
        })
    }
  return (
    <View>
      <Heading  text={'Offer for you'}/>
      <FlatList 
      data={slider}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index}) => (
        <View>
            <Image source={{uri:item.image?.url}} style={styles.sliderImage}/>
        </View>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 20,
        fontFamily:'Poppins-SemiBold',
        marginBottom: 10
    },
    sliderImage : {
        width: 270,
        height:150,
        borderRadius :8,
        objectFit:'contain',
    }
})