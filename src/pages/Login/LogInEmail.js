import React, { Component, } from 'react';
import PropTypes from 'prop-types'
import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, Button } from 'react-native';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary'
import { styles } from './LogInStyles';
import { Colors } from '../../utils/colors'
import PrimaryInput from '../../components/Inputs/primaryInput'

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
    navigation: PropTypes.object
  }

  static defaultProps = {
    goBack: () => { },
    navigateToHome: () => { },
    navigation: () => { },
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
          { paddingBottom: keyBoardOpen ? 20 : 10 },
          { height: '100%' }
        ]} >
          <View style={styles.center}>
            <Text style={styles.TitleLogin}>Login</Text>
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
                label="PRÓXIMO"
                // isLoading={isLoading}
                // colorLoading={Colors.white}
                onPress={() => this.props.navigation.navigate('HomeClient')}
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
