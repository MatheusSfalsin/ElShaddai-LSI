import React, { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ButtonPrimaryWithIcon from '../../components/Buttons/ButtonPrimaryWithIcon';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import { getBuses, saveNewBus } from '../../data/bus'

import { styles } from './styles';

const BuyPassage = ({ navigation, route }) => {
  const { armchair = [] } = route.params;

  const [model, setModel] = useState('')
  const [numberSeats, setNumberSeats] = useState('')
  const [plate, setPlate] = useState('')
  const [year, setYear] = useState('')

  const handleCreateBus = () => {
    if (!(model && numberSeats && plate && year)) {
      Alert.alert('Campos não preenchidos', 'Preencha todos dados...')
      return
    }

    const id = Math.random().toString(36).substr(2, 9);
    const bus = { id, model, numberSeats, plate, year }
    saveNewBus(bus)
    navigation.goBack()
  }

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <HeaderPrimary withGoBack />
      <View style={styles.content}>
        <LabelAndLine
          styleContainer={{ marginTop: 10 }}
          styleText={{ textAlign: 'center' }}
          text={"Compre sua passagem\nCartão"}
        />

        <View style={styles.form}>
          <InputWithLabel
            placeholder="Ex: Mercedes"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setModel(text)}
            styleInput={{ fontSize: 16 }}
            label="Modelo"
            valueInput={model}
          />

          <InputWithLabel
            placeholder="Ex: 48"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setNumberSeats(Number(text))}
            styleInput={{ fontSize: 16 }}
            maxLength={3}
            keyboardType="numeric"
            label="Nº Assentos"
            valueInput={numberSeats}
          />

          <View style={styles.inputInRow}>
            <InputWithLabel
              placeholder="Ex: AAA-0000"
              hasMaskInput
              typeMask="custom"
              optionsMask={{
                mask: 'AAA-9999'
              }}
              placeholderTextColor={Colors.gray}
              onChangeText={(text) => setPlate(text)}
              autoCapitalize="characters"
              styleInput={{ fontSize: 16, }}
              styleContainer={{ marginRight: 10, }}
              maxLength={8}
              label="Placa"
              valueInput={plate}
            />

            <InputWithLabel
              placeholder="Ex: 2014"
              placeholderTextColor={Colors.gray}
              onChangeText={(text) => setYear(text)}
              styleInput={{ fontSize: 16 }}
              styleContainer={{ marginLeft: 10 }}
              keyboardType="numeric"
              maxLength={4}
              label="Ano"
              valueInput={year}
            />
          </View>

          <View style={styles.buttonPrimary}>
            <ButtonPrimaryWithIcon
              activeOpacity={0.8}
              label="Cadastrar ônibus"
              colorIcon={Colors.white}
              onPress={() => handleCreateBus()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default BuyPassage;
