import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import welcomeMockup from './Images/mockup1.png'

export default class Welcome extends React.Component{
  render(){
    return(
      <View>
        <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate('Dashboard')
          }}
        >
          <Image source={welcomeMockup} style={{width:'100%', height:'100%'}}/>
        </TouchableOpacity>
      </View>
    )
  }
}
