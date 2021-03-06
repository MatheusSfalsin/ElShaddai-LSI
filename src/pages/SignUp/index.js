import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import { getAccounts, setUserProperty, saveNewAccount } from '../../config/data';
import { Colors } from '../../utils/colors';

import { styles } from './SignUpStyles';

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigation = useNavigation();
  const handleCreateAccount = async () => {
    if (!(email && password && confirmPassword)){
      Alert.alert('Campos não preenchidos', 'Preencha todos dados...')
      return     
    }
    if (password!==confirmPassword){
      Alert.alert('Senhas não conferem', 'Digite novamente...')
      setPassword('')
      setConfirmPassword('')
      return 
    } 
    const accounts = await getAccounts() 
    const existAccount = accounts.findIndex(account => account.email===email)
    if (existAccount >= 0){
      Alert.alert('Conta existente', 'Email já utilizado...')
      return
    }
    const id = Math.random().toString(36).substr(2, 9);
    setUserProperty ({id, email, password})
    await saveNewAccount ({id, email, password})

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'HomeClient' },     
          {
            name: 'HomeClient',
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
          <Text style={styles.TitleLogin}>Cadastro</Text>
          <Text style={styles.textDescription}>
            Digite seu email e senha para acessar o sistema...
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
              placeholder="Senha"
              autoCapitalize="none"
              secureTextEntry={true}
              maxLength={64}
              textContentType="password"
              onChangeText={value => setPassword(value)}
            />
          </View>

          <View style={[styles.ContainerInput, styles.center]}>
            <TextInput
              style={styles.Input}
              placeholderTextColor={Colors.gray}
              placeholder="Confirmar Senha"
              autoCapitalize="none"
              secureTextEntry={true}
              maxLength={64}
              textContentType="password"
              onChangeText={value => setConfirmPassword(value)}
            />
          </View>

          <View style={styles.absoluteButton}>
            <ButtonPrimary
              styledAdd={styles.signInButton}
              label="Cadastrar"
              // isLoading={isLoading}
              // colorLoading={Colors.white}
              onPress={() => handleCreateAccount()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUp;
