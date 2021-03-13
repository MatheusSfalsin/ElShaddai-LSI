import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import { Colors } from '../../utils/colors';
import {alterateAccount, getAccounts} from '../../config/data';

import { styles } from './SignUpStyles';

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newConfirmPassword, setNewConfirmPassword] = useState('')

  const navigation = useNavigation();

    const handleRecoveryPassword = async () => {
      if (!(email && newPassword && newConfirmPassword)) {
        Alert.alert('Campos não preenchidos', 'Preencha todos dados...')
        return
      }
      if (newPassword !== newConfirmPassword) {
        Alert.alert('Senhas não conferem', 'Digite novamente...')
        setNewPassword('')
        setNewConfirmPassword('')
        return
      }

      const accounts = await getAccounts()
      const existAccount = accounts.findIndex(account => account.email === email)
      if (existAccount < 0) {
        Alert.alert('Erro no aplicativo', 'Email ou senha incorretos...')
        return
      }
      const removeAccount = accounts.filter(account => account.email !== email)

      const id = Math.random().toString(36).substr(2, 9);
      await alterateAccount([...removeAccount,{ id, email, password: newPassword }])

  
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: 'Login' },
            {
              name: 'Login',
            },
          ],
        })
      );
       
    }
  return (
    <ScrollView
      style={styles.container}

    >
      <View style={[styles.ContainerHeader]} >
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBack}>
          <Icon name="angle-left" size={30} color={Colors.primary} />
        </TouchableOpacity>
        {/* <View style={[styles.logoContainer]} >
          <Image style={styles.imgLogo} source={this.images} />
        </View> */}
      </View>

      <View style={[styles.bodyContainerCenter]} >
        <View style={styles.center}>
          <Text style={styles.TitleLogin}>Recuperar senha</Text>
          <Text style={styles.textDescription}>
            Digite seu email e nova senha para recupera o acesso ao sistema...
          </Text>

          <View style={[styles.ContainerInput, styles.center]}>
            <TextInput
              style={styles.Input}
              placeholderTextColor={Colors.gray}
              placeholder="Email"
              autoCapitalize="none"
              maxLength={64}
              textContentType="emailAddress"
              onChangeText={value => setEmail(value)}
            />
          </View>

          <View style={[styles.ContainerInput, styles.center]}>
            <TextInput
              style={styles.Input}
              placeholderTextColor={Colors.gray}
              placeholder="Nova senha"
              autoCapitalize="none"
              secureTextEntry={true}
              maxLength={64}
              textContentType="password"
              onChangeText={value => setNewPassword(value)}
            />
          </View>

          <View style={[styles.ContainerInput, styles.center]}>
            <TextInput
              style={styles.Input}
              placeholderTextColor={Colors.gray}
              placeholder="Confirmar nova senha"
              autoCapitalize="none"
              secureTextEntry={true}
              maxLength={64}
              textContentType="password"
              onChangeText={value => setNewConfirmPassword(value)}
            />
          </View>

          <View style={styles.absoluteButton}>
            <ButtonPrimary
              styledAdd={styles.signInButton}
              label="Alterar"
              // isLoading={isLoading}
              // colorLoading={Colors.white}
              onPress={() => handleRecoveryPassword()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUp;
