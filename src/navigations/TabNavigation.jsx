import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'#EA7B0C'
    }}>
        <Tab.Screen name='home' component={HomeNavigation} 
        options={{
            tabBarLabel:({color} ) => (
                <Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>
            ),
            tabBarIcon:({color,size}) => (
                <Feather name="home" size={size} color={color} />
            )
        }}
        />
        <Tab.Screen name='booking' component={BookingScreen}
         options={{
            tabBarLabel:({color} ) => (
                <Text style={{color:color,fontSize:12,marginTop:-7}}>Booking</Text>
            ),
            tabBarIcon:({color,size}) => (
                <FontAwesome5 name="bookmark" size={size} color={color} />
            )
        }}
        />
        <Tab.Screen name='profile' component={ProfileScreen}
         options={{
            tabBarLabel:({color} ) => (
                <Text style={{color:color,fontSize:12,marginTop:-7}}>Profile</Text>
            ),
            tabBarIcon:({color,size}) => (
                <AntDesign name="user" size={size} color={color} />
            )
        }}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})