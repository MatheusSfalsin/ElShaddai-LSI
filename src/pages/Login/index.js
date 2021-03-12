import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native'

import { LogInEmail } from './LogInEmail';
import { getAccounts, getUser, saveNewAccount } from '../../config/data';
import { Colors } from '../../utils/colors';
import Admin from '../../../Admin.json';

const Login = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getUserAccount () {
      setLoading(true)
      const user = await getUser()
      const accounts = await getAccounts()
      const employees = Admin.funcionarios
      if (accounts.length === 0) {
        await saveNewAccount(employees)
      }

      if (user.id) {
        setUser(user)
        if (user.type) {
          goToHomeEmployees()
        } else {
          goToHomeCliente()
        }
      } else {
        setLoading(false)
      }
    }
    getUserAccount()
  }, [])

  const goToHomeCliente = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'HomeClient' },
        ],
      })
    );
  }

  const goToHomeEmployees = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'HomeEmployees' },
        ],
      })
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {
        loading ?
          <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
          :
          <LogInEmail
            navigation={navigation}
            goToHomeEmployees={goToHomeEmployees}
            goToHomeCliente={goToHomeCliente}
          />
      }
    </View>
  );
}

export default Login;
