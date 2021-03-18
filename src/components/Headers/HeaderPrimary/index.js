import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../../utils/colors';
import { logOutUser } from '../../../config/data';
import { styles } from './styles';

const HeaderPrimary = ({
  withLogOut,
  withBackground,
  withGoBack
}) => {
  const navigation = useNavigation();

  const handleAlertLogOut = async () => {
    Alert.alert(
      'Deseja sair?',
      'Sair da sua conta?',
      [
        {
          text: "Cancelar",
          onPress: () => { },
          style: "cancel"
        },
        { text: "Sair", onPress: () => handleLogOut() }
      ],
      { cancelable: false }
    )
  }

  const handleLogOut = async () => {
    await logOutUser()
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'Login' },
        ],
      })
    );
  }

  return (
    <View style={[
      styles.container,
      withBackground && { backgroundColor: Colors.gray6, paddingVertical: 20, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }
    ]}>
      {withLogOut &&
        <TouchableOpacity
          onPress={() => handleAlertLogOut()}
          style={[styles.leftAbsolute, styles.buttonLogOut]}
        >
          <Text style={styles.textLogOut}>Sair</Text>
        </TouchableOpacity>
      }

      {
        withGoBack &&
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.leftAbsolute, { left: 25, top: 15 }]}
        >
          <Icon name="angle-left" size={30} color={Colors.primary} />
        </TouchableOpacity>
      }

      <Text style={styles.logo}>El Shaddai</Text>
    </View>
  )
}

export default HeaderPrimary;
