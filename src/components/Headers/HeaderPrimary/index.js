import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../../utils/colors';
import { logOutUser } from '../../../config/data';
// import { Container } from './styles';

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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
  },
  logo: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 24,
    // lineHeight: 20,
    letterSpacing: -1.5
  },
  textLogOut: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    // marginLeft: 8,
  },
  leftAbsolute: {
    position: 'absolute',
    left: 10,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonLogOut: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  }
})

export default HeaderPrimary;
