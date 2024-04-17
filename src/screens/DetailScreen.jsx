import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Heading from '../components/Heading'
import RestaurantPhoto from '../components/RestaurantPhoto';
import BookingModal from '../components/BookingModal';
export default function DetailScreen() {
  const param = useRoute().params;
  const [restaurant,setRestaurant] = useState(param.restaurant);
  const navigation = useNavigation();
  const [isReadMore,setIsReadMore] = useState(false);
  const [showModal,setShowModal] = useState(false);
  useEffect(() => {
    
  })
  return restaurant&&(
    <View>
    <ScrollView showsVerticalScrollIndicator={false} style={{height: '90%',}}>
      <TouchableOpacity onPress={() => {
        navigation.goBack();
      }} style={styles.backBtn}>
      <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <Image source={{uri:restaurant?.image[0]?.url}} style={{width: '100%',height:300}}/>

      <View style={styles.infoContainer}>
        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:25,color:'#EA7B0C'}}>{restaurant?.name}</Text>
        <View>
        <Text style={{fontFamily:'Poppins-Regular',fontSize:20}}><Ionicons name="location-sharp" size={24} color="#EA7B0C"/> {restaurant?.address}</Text>
        <Text style={{fontFamily:'Poppins-Regular',fontSize:18}}><Entypo name="old-phone" size={24} color="#EA7B0C" /> {restaurant?.contact}</Text>
        <Text style={{fontFamily:'Poppins-Regular',fontSize:18}}>Giờ mở cửa : {restaurant?.openingTime} - {restaurant?.closingTime}</Text>
        </View>
        <View style={{borderWidth:0.3,borderColor:'gray',marginBottom : 20,marginTop:20}}>
        
        </View>
        <View>
        <Text style={{fontSize:12,fontFamily:'Poppins-Light',lineHeight:25}} numberOfLines={isReadMore?20:5} line>{restaurant?.about}</Text>
        <TouchableOpacity onPress={() => {
            setIsReadMore(!isReadMore);
        }}>
        <Text style={{color:'orange',fontSize:12,fontFamily:'Poppins-Light'}}>
          {isReadMore?'Thu gọn' : 'Đọc thêm'}</Text>
        </TouchableOpacity>
        
        </View>

        <View style={{borderWidth:0.3,borderColor:'gray',marginBottom : 20,marginTop:20}}>
        
        </View>
      
        <RestaurantPhoto restaurant={restaurant}/>
        

      </View>
    </ScrollView>
    <View style={{display:'flex',flexDirection:'row',gap :8,margin:3}}>
      {/* <TouchableOpacity style={styles.messageBtn}>
        <Text style={{textAlign:'center',fontFamily:'Poppins-SemiBold',color:'orange',fontSize:18}}>Chat</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.bookBtn} onPress={() =>setShowModal(true)}>
        <Text style={{textAlign:'center',fontFamily:'Poppins-SemiBold',color:'white',fontSize:18}}>Book now</Text>
      </TouchableOpacity>
    </View>
    <Modal animationType='slide'
    visible={showModal}
    >
      <BookingModal 
      restaurantId={restaurant.id}
      hideModal={()=> setShowModal(false)}/>
    </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  backBtn : {
    position : 'absolute',
    zIndex:10,
    padding:20,
    
  },
  infoContainer : {
    padding:20,
    display:'flex',
    gap:7
  },
  messageBtn : {
    padding:10,
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor : 'orange',
    borderRadius : 99,
    textAlign:'center',
    flex: 1,
  },
  bookBtn : {
    padding:15,
    backgroundColor:'#EA7B0C',
    borderWidth: 1,
    borderColor : '#EA7B0C',
    borderRadius : 99,
    textAlign:'center',
    flex: 1,
  }
})