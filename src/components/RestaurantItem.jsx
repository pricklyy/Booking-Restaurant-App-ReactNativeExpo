import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function RestaurantItem({restaurant}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => {
      navigation.push('detail', {
        restaurant:restaurant
      })
    }}>
      <Image source={{uri:restaurant.image[0]?.url}} style={styles.image}/>
      <View style={styles.infoContainer}>
        <Text style={{fontSize: 17,fontFamily:'Poppins-SemiBold'}}>{restaurant?.name}</Text>
        <Text style={{fontSize:13,fontFamily:'Poppins-Light'}}><Entypo name="old-phone" size={20} color="#EA7B0C" /> {restaurant?.contact}</Text>
        <Text style={{fontSize:13,fontFamily:'Poppins-Regular'}}><Ionicons name="location-sharp" size={20} color="#EA7B0C" /> {restaurant?.place.name}</Text>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor:'#EDEDED',
        borderRadius:10,
        
    },
    image : {
        width: 160,
        height:100,
        borderRadius : 10,
    },
    infoContainer : {
        padding:7,
        display:'flex',
        gap:1
    }
})