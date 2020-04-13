import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import dashboardMockup from './Images/mockup2.png'

export default class Dashboard extends React.Component{
  render(){
    return(
      <View>
        <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate('Payment')
          }}
        >
          <Image source={dashboardMockup} style={{width:'100%', height:'100%'}}/>
        </TouchableOpacity>
      </View>
    )
  }
}
