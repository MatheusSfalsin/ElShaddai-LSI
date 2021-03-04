import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { LogInEmail } from './LogInEmail';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <LogInEmail navigation={navigation} />
    </View>
  );
}

export default Login;
