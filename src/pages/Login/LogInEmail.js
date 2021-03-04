import React, { Component, } from 'react';
import PropTypes from 'prop-types'
import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5'
import ButtonPrimary from '../../components/Buttons/ButtonPrimary'
import { styles } from './LogInStyles';
import { Colors } from '../../utils/colors'

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
    navigation: PropTypes.func
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

        <View style={[styles.bodyContainerCenter, { paddingBottom: keyBoardOpen ? 20 : 10 }]} >
          <View style={styles.center}>
            <Text style={styles.TitleLogin}>Login</Text>
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
                onChangeText={value => this.setState({ email: value })}
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

            <View style={styles.absoluteButton}>
              <ButtonPrimary
                styledAdd={styles.signInButton}
                label="PRÓXIMO"
                // isLoading={isLoading}
                // colorLoading={Colors.white}
                onPress={() => this.props.navigation.navigate('HomeClient')}
              />


            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
