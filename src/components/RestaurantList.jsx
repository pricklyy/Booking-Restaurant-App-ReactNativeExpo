import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import GlobalApi from '../utils/GlobalApi'
import RestaurantItem from './RestaurantItem';

export default function RestaurantList() {

  const [restaurantList,setRestaurantList] = useState([]);
  useEffect(() => {
    getRestaurantList();
  })
  const getRestaurantList=() => {
    GlobalApi.getRestaurantList().then(resp=> {
      // console.log(resp);
      setRestaurantList(resp.restaurantLists);
    })
  }
  return (
    <View style={{marginTop:10}}>
      <Heading text={'Restaurant'} isViewAll={true}/>
      <FlatList 
      data={restaurantList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index}) => (
        <View style={{marginRight:10}}>
          <RestaurantItem restaurant={item}/>
        </View>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})