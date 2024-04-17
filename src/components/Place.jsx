import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../utils/GlobalApi'
import Heading from './Heading';
import { useNavigation } from '@react-navigation/native';

export default function Place() {

    const [place,setPlace] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        getPlace();
    })
    const getPlace = () => {
        GlobalApi.getPlace().then(resp=> {
            setPlace(resp?.places);
        })
    }
  return (
    <View style={{marginTop : 10}}>
        <Heading text={'Place'} isViewAll={true}/>
        <FlatList 
        data={place}
        numColumns={4}
        renderItem={({item,index}) =>index<=3&& (
            <TouchableOpacity style={styles.container}
            onPress={() => {
                navigation.push('restaurant-list',{
                    place:item.name
                })
            }}
            >
                <View style={styles.iconContainer}>
                    <Image  source={{uri:item?.icon.url}} style={{width: 30,height: 30}}/>
                </View>
                <Text style={{fontFamily:'Poppins-Regular'}}>{item?.name}</Text>
            </TouchableOpacity>
        )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems:'center'
    },
    iconContainer : {
        backgroundColor : '#EDEDED',
        padding:17,
        borderRadius:99
    }
})