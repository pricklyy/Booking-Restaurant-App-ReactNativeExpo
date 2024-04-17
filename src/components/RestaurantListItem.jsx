import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
export default function RestaurantListItem({restaurant,booking}) {

  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => {
      navigation.push('detail',{
        restaurant:restaurant
      })
    }}>
      <Image source={{uri:restaurant?.image[0]?.url}} style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:18}}>{restaurant.name}</Text>
        <Text style={{fontFamily:'Poppins-Regular',fontSize:16}} ><Entypo name="old-phone" size={24} color="#EA7B0C" /> {restaurant.contact}</Text>
        <Text style={{fontFamily:'Poppins-Regular',fontSize:16,}} >{restaurant.address}</Text>
        
        
        {booking?.id?<Text style={[{
          padding:5,borderRadius:5,fontSize:14,alignSelf:'flex-start'},
          booking?.bookingStatus == 'Completed' ? {backgroundColor:'green',color:'white',borderRadius:99} : 
          booking?.bookingStatus == 'Canceled' ? {backgroundColor :'red' , color:'white'} :{
            backgroundColor:'orange' , color:'white'
          }
          
          ]}>
          {booking?.bookingStatus}</Text>: null}
        
        {booking?.id?<Text style={{fontFamily:'Poppins-Regular',color:'gray',fontSize:16}}>
        <AntDesign name="calendar" size={24} color="#EA7B0C" />
          {booking.date} at {booking.time}</Text>: null}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container : {
        padding:10,
        backgroundColor:'#fff',
        borderRadius : 15,
        marginBottom: 15,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    image  : {
        width: 100,
        height: 100,
        borderRadius : 15,
    },
    subContainer : {
        flex : 1,
        gap : 8,
    }
})