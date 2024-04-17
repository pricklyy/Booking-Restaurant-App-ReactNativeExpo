import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Heading({text,isViewAll=false}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{text}</Text>
   {isViewAll&& <Text style={{color:'#EA7B0C'}}>View All</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container :{ 
        display:'flex',
        flexDirection : 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headingText : {
        fontSize : 20,
        fontFamily:'Poppins-SemiBold',
        marginBottom: 10,
       
    }
})