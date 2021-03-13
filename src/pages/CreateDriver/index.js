import React, { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ButtonPrimaryWithIcon from '../../components/Buttons/ButtonPrimaryWithIcon';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import { getDrivers, saveNewDriver } from '../../data/driver'

import { styles } from './styles';

const CreateDriver = ({ navigation }) => {
  const [driverName, setDriverName] = useState('')
  const [driverNumber, setDriverNumber] = useState('')
  const [driverRg, setDriverRg] = useState('')
  const [driverAddress, setDriverAddress] = useState('')
  const [driverCnh, setDriverCnh] = useState('')

  const CreateDriver = () => {
    if (!(driverName && driverNumber && driverRg && driverAddress && driverCnh)) {
      Alert.alert('Campos não preenchidos', 'Preencha todos dados...')
      return
    }

    const id = Math.random().toString(36).substr(2, 9);
    const driver = { id, driverName, driverNumber, driverRg, driverAddress, driverCnh }
    saveNewDriver(driver)
    navigation.goBack()
  }

  return (
    <ScrollView style={styles.container}>
      <HeaderPrimary withGoBack />
      <View style={styles.content}>
        <LabelAndLine
          styleContainer={{ marginTop: 10 }}
          styleText={{ textAlign: 'center' }}
          text="Criar motorista"
        />

        <View style={styles.form}>
          <InputWithLabel
            placeholder="Ex: Nome sobrenome"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setDriverName(text)}
            styleInput={{ fontSize: 16 }}
            label="Nome completo"
          />

          <InputWithLabel
            placeholder="Ex: 27 91111 1111"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setDriverNumber(Number(text))}
            styleInput={{ fontSize: 16 }}
            maxLength={13}
            keyboardType="numeric"
            label="Telefone"
          />

          <InputWithLabel
            placeholder="Ex: 1234-567"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setDriverRg(Number(text))}
            styleInput={{ fontSize: 16 }}
            maxLength={8}
            keyboardType="numeric"
            label="RG"
          />

       
          <View style={styles.inputInRow}>
            <InputWithLabel
              placeholder="Ex: Rua Rosa"
              placeholderTextColor={Colors.gray}
              onChangeText={(text) => setDriverAddress(text)}
              autoCapitalize="characters"
              styleInput={{ fontSize: 16, }}
              styleContainer={{ marginRight: 10, }}
              label="Endereço"
            />

            <InputWithLabel
              placeholder="Ex: 11111111111"
              placeholderTextColor={Colors.gray}
              onChangeText={(text) => setDriverCnh(text)}
              styleInput={{ fontSize: 16 }}
              styleContainer={{ marginLeft: 10 }}
              keyboardType="numeric"
              maxLength={4}
              label="CNH"
            />
          </View>

          <View style={styles.buttonPrimary}>
            <ButtonPrimaryWithIcon
              activeOpacity={0.8}
              label="Cadastrar motorista"
              colorIcon={Colors.white}
              onPress={() => CreateDriver()}
            />
          </View>
          
        </View>
      </View>
    </ScrollView>
  )
}

export default CreateDriver;