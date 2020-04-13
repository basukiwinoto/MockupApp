import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import paymentMockup from './Images/mockup3.png'

export default class Payment extends React.Component{
  render(){
    return(
      <View>
        <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate('Dashboard')
          }}
        >
          <Image source={paymentMockup} style={{width:'100%', height:'100%'}}/>
        </TouchableOpacity>
      </View>
    )
  }
}
