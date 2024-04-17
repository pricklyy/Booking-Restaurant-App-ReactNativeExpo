import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeading from '../components/PageHeading'
import GlobalApi from '../utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import Heading from '../components/Heading'
import RestaurantListItem from '../components/RestaurantListItem'
export default function BookingScreen() {

  const {user} = useUser();
  const [bookingList,setBookingList] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
   user&&getUserBookings();
  },[user]);
  const getUserBookings = () => {
    setLoading(true);
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp => {
      setBookingList(resp.bookings)
      setLoading(false);
    })
  }
  return (
    <View style={{padding:20}}>
      <Heading text={'My Bookings'}/>

      <View>
        <FlatList 
        data={bookingList}
        showsVerticalScrollIndicator={false}
        onRefresh={() =>getUserBookings()}
        refreshing={loading}
        renderItem={({item,index}) => (
          <RestaurantListItem restaurant={item?.restaurantList}
          booking={item}
          />
        )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})