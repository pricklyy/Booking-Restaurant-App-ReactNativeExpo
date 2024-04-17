import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Place from '../components/Place'
import RestaurantList from '../components/RestaurantList'

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <View style={{padding:20}}>
      <Slider />
      <Place />
      <RestaurantList />
      
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({})