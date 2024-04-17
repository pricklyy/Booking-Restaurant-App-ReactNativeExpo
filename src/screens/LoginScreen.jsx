import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { useOAuth } from "@clerk/clerk-expo";
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('../../assets/cutlery.png')} style={styles.loginImage} resizeMode='contain'/>

      
      <View style={styles.subContainer}>
      <View style={styles.view1}>
            <Text style={styles.text1}>
            Welcome back . Let's book a table
            </Text>

            <Text style={{fontSize:15, marginTop:8,textAlign:'center',color:'#fff'}} >
            Choose for yourself the most relaxing space
            </Text>
        </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
            
            <Text style={{textAlign:'center',fontSize:17,color:'#EA7B0C'}}>Let's Get Started</Text>
            
        </TouchableOpacity>
    </View>
    </View>
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginImage : {
        height: 300,
        marginTop:50
    },
    subContainer : {
        width : '100%',
        backgroundColor:'#EA7B0C',
        height:'100%',
        marginTop:90,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    view1: {
        paddingHorizontal: 16*4,
        paddingTop:16,
    },
    text1 : {
        color: '#fff',
        fontSize: 30,
        textAlign:'center',
        fontWeight : 'bold',
        
       
    },
    button : {
        padding:20,
        backgroundColor:'#fff',
        borderRadius : 99,
        marginTop:40,
        width:'70%',
        marginLeft:62,
        
       
    },
   
})