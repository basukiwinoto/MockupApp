import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './src/Welcome'
import Dashboard from './src/Dashboard'
import Payment from './src/Payment'

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
