import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { View } from 'react-native';

const appStack = createStackNavigator();

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import RecoveryPassword from './pages/RecoveryPassword'

import HomeClient from './pages/HomeClient'
import HomeEmployees from './pages/HomeEmployees'
import CreateBus from './pages/CreateBus'
import CreateDriver from './pages/CreateDriver';
import CreateTravel from './pages/CreateTravel';
import Travels from './pages/Travels'
import Seats from './pages/Seats'
import BuyPassage from './pages/BuyPassage'
import Report from './pages/Report'

export default function Routes () {
  return (// tem que vir por volta das rotas
    <NavigationContainer>
      <appStack.Navigator screenOptions={{ headerShown: false }}>
        <appStack.Screen name="Login" component={Login} />
        <appStack.Screen name="SignUp" component={SignUp} />
        <appStack.Screen name="RecoveryPassword" component={RecoveryPassword} />

        <appStack.Screen name="HomeClient" component={HomeClient} />
        <appStack.Screen name="HomeEmployees" component={HomeEmployees} />
        <appStack.Screen name="CreateTravel" component={CreateTravel} />
        <appStack.Screen name="CreateBus" component={CreateBus} />
        <appStack.Screen name="CreateDriver" component={CreateDriver} />
        <appStack.Screen name="Travels" component={Travels} />
        <appStack.Screen name="Seats" component={Seats} />
        <appStack.Screen name="BuyPassage" component={BuyPassage} />
        <appStack.Screen name="Report" component={Report} />
      </appStack.Navigator>
    </NavigationContainer>
  )
}
