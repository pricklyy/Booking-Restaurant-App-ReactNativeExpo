import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
export default function PageHeading({title}) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:10}} onPress={() =>{
        navigation.goBack();
      }}>
      <Ionicons name="arrow-back-outline" size={30} color="black" />
      <Text style={{fontSize:25,fontFamily:'Poppins-SemiBold'}}>{title}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})