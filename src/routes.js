import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { View } from 'react-native';

const appStack = createStackNavigator();

import Login from './pages/Login'
import HomeClient from './pages/HomeClient'
import SignUp from './pages/SignUp'

export default function Routes () {
  return (// tem que vir por volta das rotas
    <NavigationContainer>
      <appStack.Navigator screenOptions={{ headerShown: false }}>
        <appStack.Screen name="Login" component={Login} />
        <appStack.Screen name="HomeClient" component={HomeClient} />
        <appStack.Screen name="SignUp" component={SignUp} />
      </appStack.Navigator>
    </NavigationContainer>
  )
}
