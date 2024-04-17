import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SignedOut, useAuth, useUser } from '@clerk/clerk-expo'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { it } from 'date-fns/locale';
import { useNavigation } from '@react-navigation/native';
import { useClerk } from "@clerk/clerk-react";
import LoginScreen from './LoginScreen';
export default function ProfileScreen() {
  const {user} = useUser();
  const navigation = useNavigation();
  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut();
  };

  return (
    <View   >
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',padding:20,backgroundColor:'orange'}}>
        <Image source={{uri : user.imageUrl}} style={{width: 90,height:90,borderRadius:99}} />
        <Text style={{fontSize:26,fontFamily:'Poppins-SemiBold',color:'white'}}>{user.fullName}</Text>
        <Text style={{fontSize:20,fontFamily:'Poppins-Regular',color:'white'}}>{user?.primaryEmailAddress.emailAddress}</Text>
      </View>

      <View>
        
          <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10,marginBottom:20,marginTop:100,justifyContent:'center'}}>
              <Feather name="home" size={24} color="orange" />
              <Text style={{fontFamily:'Poppins-Regular',fontSize:20}}>Home</Text>
          </TouchableOpacity>


          <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10,marginBottom:20,justifyContent:'center'}}>
          <MaterialIcons name="favorite" size={24} color="orange" style={{marginLeft:20}} />
              <Text style={{fontFamily:'Poppins-Regular',fontSize:20}}>Favourite</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10,marginBottom:20,justifyContent:'center'}} onPress={handleLogout}>
          <Feather name="log-out" size={24} color="orange" style={{marginLeft:15}} />
              <Text style={{fontFamily:'Poppins-Regular',fontSize:20}}>Log out</Text>
          </TouchableOpacity>
          
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})