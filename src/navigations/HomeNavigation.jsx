import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import RestaurantListByPlaceScreen from '../screens/RestaurantListByPlaceScreen';
import LoginScreen from '../screens/LoginScreen'
const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='restaurant-list' component={RestaurantListByPlaceScreen} />
        <Stack.Screen name='detail' component={DetailScreen} />
        <Stack.Screen name='login' component={LoginScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})