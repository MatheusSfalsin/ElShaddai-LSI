import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import { Colors } from '../../utils/colors';

import { styles } from './SignUpStyles';

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newConfirmPassword, setNewConfirmPassword] = useState('')

  const navigation = useNavigation();
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
              onChangeText={value => setPassword(value)}
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
              onChangeText={value => setConfirmPassword(value)}
            />
          </View>

          <View style={styles.absoluteButton}>
            <ButtonPrimary
              styledAdd={styles.signInButton}
              label="Alterar"
              // isLoading={isLoading}
              // colorLoading={Colors.white}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUp;
