import { Alert, FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, {  useEffect, useState } from 'react'
import PageHeading from './PageHeading'
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from "react-native-calendar-picker";
import Heading from './Heading';
import { tr } from 'date-fns/locale';
import GlobalApi from '../utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
export default function BookingModal({restaurantId,hideModal}) {

    const [timeList,setTimeList] = useState();
    const [selectedTime,setSelectedTime] = useState();
    const [selectedDate,setSelectedDate] = useState();
    const [note,setNote] = useState();
    const {user} = useUser();
    const navigation = useNavigation();
    useEffect(() => {
        getTime();
    },[])
    const getTime=() => {
        const timeList = [];
        for(let i=6;i <=12;i++) {
            timeList.push({
                time:i+':00 AM'
            })
            timeList.push({
                time:i+':30 AM'
            })
        }
        for(let i=1;i <=12;i++) {
            timeList.push({
                time:i+':00 PM'
            })
            timeList.push({
                time:i+':30 PM'
            })
        }
        setTimeList(timeList);
    }

    const createNewBooking = () => {
        if(!selectedTime || ! selectedDate) {
            Alert.alert('Pls select date and time');
            return ;
        }
        const data = {
            userName: user?.fullName,
            userEmail : user?.primaryEmailAddress.emailAddress,
            time : selectedTime,
            date :moment(selectedDate).format('DD-MMM-yyyy') ,
            note : note,
            restaurantId: restaurantId,
        }
        GlobalApi.createBooking(data).then(resp=> {
            console.log("resp",resp);
            Alert.alert('Booking Successfully!');  
            hideModal();
            
        })
    }
  return (
    <ScrollView>
    <KeyboardAvoidingView style={{marginTop:50,marginLeft:20}}>
       <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:10,marginBottom:20}} onPress={() =>{
        hideModal();
      }}>
      <Ionicons name="arrow-back-outline" size={30} color="black" />
      <Text style={{fontSize:25,fontFamily:'Poppins-SemiBold'}}>Booking</Text>
      </TouchableOpacity>

      
      <Heading  text={'Select Date'}/>
      <View style={styles.calendarContainer}>
        
      <CalendarPicker onDateChange={setSelectedDate} width={390} minDate={Date.now()}
      todayBackgroundColor='#EA7B0C' todayTextStyle={{color:'black'}}
      selectedDayTextColor='black' selectedDayColor='#fff'
      />
      </View>

      <View style={{marginTop: 10}}>
        <Heading  text={'Select Time'}/>
        <FlatList 
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index}) => (
            <TouchableOpacity style={{marginRight: 10}} onPress={() => {
                setSelectedTime(item.time);
                console.log(item);
                
            }} >
                <Text style={[selectedTime==item.time?styles.selectedTime:styles.unSelectedTime]}>{item.time}</Text>
            </TouchableOpacity>
        )}
        />
      </View>

      <View style={{paddingTop:10,marginRight:10}}>
        <Heading text={'Note (Ex : Số người ...)'}/>
        <TextInput  style={styles.noteText} numberOfLines={4} 
        onChange={(text) =>setNote(text)} placeholder='Note...' placeholderTextColor={'gray'}
        />
      </View>

      <TouchableOpacity  style={styles.confirmBtn} onPress={createNewBooking}>
        <Text style={{textAlign:'center',fontFamily:'Poppins-SemiBold',color:'white',fontSize:18}}>Confirm and book</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    calendarContainer : {
        backgroundColor:'#FFCC99',
        padding : 20,
        borderRadius : 15,
        width: '95%',
        
    },
    selectedTime : {
        padding:10,
        borderWidth :1,
        borderColor : '#EA7B0C',
        // borderRadius:20,
        paddingHorizontal:18,
        backgroundColor:'#EA7B0C',
        color:'#fff'
        

    },
    unSelectedTime : {
        padding:10,
        borderWidth :1,
        borderColor : '#EA7B0C',
        // borderRadius:20,
        paddingHorizontal:18,
        color:'#EA7B0C',
    },
    noteText : {
        borderWidth : 1,
        borderRadius : 15,
        textAlignVertical:'center',
        padding:20,
        fontSize:16,
        fontFamily : 'Poppins-Regular',
        borderColor : '#EA7B0C'
    },
    confirmBtn : {
        textAlign : 'center',
        backgroundColor: '#EA7B0C',
        color:'#fff',
        padding:15,
        borderRadius : 99,
        elevation : 2,
        marginRight : 10,
        marginTop : 10
    }
})