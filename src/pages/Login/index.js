import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native'

import { LogInEmail } from './LogInEmail';
import { getUser } from '../../config/data';
import { Colors } from '../../utils/colors';

const Login = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getUserAccount () {
      setLoading(true)
      const user = await getUser()

      if (user.id) {
        setUser(user)
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              { name: 'HomeClient' },
            ],
          })
        );
      } else {
        setLoading(false)
      }
    }
    getUserAccount()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {
        loading ?
          <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
          :
          <LogInEmail navigation={navigation} />
      }
    </View>
  );
}

export default Login;
