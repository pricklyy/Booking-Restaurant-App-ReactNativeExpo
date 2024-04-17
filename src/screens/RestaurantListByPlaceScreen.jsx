import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../utils/GlobalApi';
import RestaurantListItem from '../components/RestaurantListItem';
import PageHeading from '../components/PageHeading';

export default function RestaurantListByPlaceScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();

  const [restaurantList,setRestaurantList] = useState([]);
  useEffect(() => {
    param&&getRestaurantListByPlace()
  },[param])

  const getRestaurantListByPlace= () => {
    GlobalApi.getRestaurantListByPlace(param.place).then(resp=> {
      setRestaurantList(resp.restaurantLists);
    })
  }
  return (
    <View style={{padding:20,paddingTop:30}}>
      <PageHeading title={param.place}/>
      {restaurantList?.length>0 ? 
      <FlatList 
      data={restaurantList}
      style={{marginTop:15}}
      renderItem={({item,index}) => (
        <RestaurantListItem restaurant={item}/>
      )}
      /> : 
      <Text style={{fontFamily:'Poppins-SemiBold',textAlign:'center',marginTop:'20%',color:'#EDEDED'}}>No Place Found...</Text> }
    </View>
  )
}

const styles = StyleSheet.create({})