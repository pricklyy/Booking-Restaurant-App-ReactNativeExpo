import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
    const {user,isLoading} = useUser();
  return user&& (
    <View style={styles.container}>
        <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
        <Image source={{uri:user?.imageUrl}} style={styles.userImage}/>
        <View>
            <Text style={{color:'#fff',fontFamily:'Poppins-Regular'}}>Welcome back!</Text>
            <Text style={{color:'#fff',fontSize:20,fontFamily:'Poppins-SemiBold'}}>{user?.fullName}</Text>
        </View>
        </View>
        <Feather name="bookmark" size={24} color="white" />
        </View>

        <View style={styles.searchBarContainer}>
            <TextInput placeholder='Search' style={styles.textInput}/>
            <FontAwesome5 name="search" size={24} color="#EA7B0C"  style={styles.searchBtn}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        padding:20,
        paddingTop:20,
        backgroundColor:'#EA7B0C',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
    },
    userImage : {
        width: 45,
        height:45,
        borderRadius:99
    },
    profileContainer : {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    profileMainContainer : {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    textInput: {
        padding: 7,
        paddingHorizontal:16,
        backgroundColor:'#fff',
        width:'85%',
        fontSize:16,
        fontFamily:'Poppins-Regular',
        color:'#EA7B0C'
    },
    searchBarContainer : {
        marginTop:15,
        display : 'flex',
        flexDirection:'row',
        gap:10,
        marginBottom:20,

    },
    searchBtn : {
        borderRadius:8,
        backgroundColor:'#fff',
        padding:10
        
    }
})