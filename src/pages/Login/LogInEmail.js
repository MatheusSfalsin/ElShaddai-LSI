import React, { Component, } from 'react';
import PropTypes from 'prop-types'
import { CommonActions } from '@react-navigation/native';
import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, Button, Alert } from 'react-native';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary'
import { styles } from './LogInStyles';
import { Colors } from '../../utils/colors'
import PrimaryInput from '../../components/Inputs/primaryInput'
import { getAccounts, setUserProperty } from '../../config/data';

export class LogInEmail extends Component {
  // images = Images.logoCd
  state = {
    keyBoardOpen: false,
    email: '',
    password: ''
  }

  static propTypes = {
    goBack: PropTypes.func,
    navigateToHome: PropTypes.func,
    goToHomeEmployees: PropTypes.func,
    goToHomeCliente: PropTypes.func,
    navigation: PropTypes.object,
    user: PropTypes.object
  }

  static defaultProps = {
    goBack: () => { },
    navigateToHome: () => { },
    goToHomeEmployees: () => { },
    goToHomeCliente: () => { },
    navigation: {},
    user: {},
  }

  keyboardDidShow = () => {
    this.setState({ keyBoardOpen: true })
  };

  keyboardDidHide = () => {
    this.setState({ keyBoardOpen: false })
  };

  componentDidMount () {
    Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  handleLoginUser = async () => {
    const { email, password } = this.state
    const { goToHomeEmployees, goToHomeCliente } = this.props
    if (!email && !password) {
      Alert.alert('Dados inválidos', 'Preecha seu email e senha...')
      return
    }

    const accounts = await getAccounts()
    const accountUser = accounts.filter(account => {
      const existEmail = account.email === email
      const passwordValid = account.password === password
      return (existEmail && passwordValid)
    })

    if (accountUser.length === 0) {
      Alert.alert('Dados inválidos', 'Email ou senha inválidos')
      this.setState({ password: '' })
      return
    }

    await setUserProperty(accountUser[0])
    this.setState({ email: '', password: '' })

    if (accountUser[0].type) {
      return goToHomeEmployees()
    }

    return goToHomeCliente()
  }

  render () {
    const { keyBoardOpen, email } = this.state;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View style={[styles.ContainerHeader]} >
          {/* <TouchableOpacity onPress={this.props.goBack} style={styles.iconBack}>
            <Icon name="arrow-left" size={24} color="#828282" />
          </TouchableOpacity> */}
          {/* <View style={[styles.logoContainer]} >
            <Image style={styles.imgLogo} source={this.images} />
          </View> */}
        </View>

        <View style={[
          styles.bodyContainerCenter,
          { height: '100%' }
        ]} >
          <View style={styles.center}>
            {
              !keyBoardOpen &&
              <Text style={styles.TitleLogin}>Login</Text>
            }

            <Text style={styles.textDescription}>
              Digite seu email e senha para acessar o sistema...
            </Text>

            <View style={[styles.ContainerInput, styles.center]}>
              <PrimaryInput
                placeholderTextColor={Colors.gray}
                placeholder="Email"
                autoCapitalize="none"
                maxLength={64}
                textContentType="emailAddress"
                onChangeText={value => this.setState({ email: value })}
              />
            </View>

            <View style={[styles.ContainerInput, styles.center]}>
              <PrimaryInput
                placeholderTextColor={Colors.gray}
                placeholder="Senha "
                autoCapitalize="none"
                secureTextEntry={true}
                maxLength={64}
                onChangeText={value => this.setState({ password: value })}
              />
            </View>

            <View style={styles.absoluteButton}>
              <ButtonPrimary
                styledAdd={styles.signInButton}
                label="Entrar"
                // isLoading={isLoading}
                // colorLoading={Colors.white}
                onPress={() => this.handleLoginUser()}
              />


            </View>

            <TouchableOpacity
              style={styles.buttonSignUp}
              onPress={() => this.props.navigation.navigate('SignUp')}
            >
              <Text style={styles.textButtonSignUp}>Cadastra-se</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRecovery}
              onPress={() => this.props.navigation.navigate('RecoveryPassword')}
            >
              <Text style={styles.textButtonSignUp}>Recuperar Senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
