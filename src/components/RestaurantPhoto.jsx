import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from './Heading'

export default function RestaurantPhoto({restaurant}) {
  return (
    <View>
      <Heading  text={'Ảnh'}/>
      <FlatList 
      data={restaurant.image}
      numColumns={2}
      renderItem={({item}) => (
        <Image source={{uri:item.url}} style={{width: '100%', height: 120,flex: 1,borderRadius:15,margin:7}}/>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})