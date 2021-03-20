import { CommonActions } from '@react-navigation/native';;
import React, { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ButtonPrimaryWithIcon from '../../components/Buttons/ButtonPrimaryWithIcon';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import { getBuses, saveNewBus } from '../../data/bus'
import { updateSeatsMarked } from '../../data/travel';
import formatValue from '../../utils/formatValueMoney';

import { styles } from './styles';

const BuyPassage = ({ navigation, route }) => {
  const { armchairs = [], travel, user = {}, refreshTravel } = route.params;

  const { price } = travel
  const amountSeats = armchairs.length

  const [numberCard, setNumberCard] = useState('')
  const [name, setName] = useState('')
  const [validity, setValidity] = useState('')
  const [cvv, setCvv] = useState('')

  const handleBuyPassage = () => {
    if (!(numberCard && name && validity && cvv)) {
      Alert.alert('Campos não preenchidos', 'Preencha todos dados...')
      return
    }

    updateSeatsMarked(travel, armchairs)

    const screenClient = user.type ? 'HomeEmployees' : 'HomeClient'
    refreshTravel()

    Alert.alert('Compra concluída', 'Suas passagens foram cofirmadas...')

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: screenClient },
        ],
      })
    );
  }

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <HeaderPrimary withGoBack />
      <View style={styles.content}>
        <LabelAndLine
          styleContainer={{ marginTop: 10 }}
          styleText={{ textAlign: 'center' }}
          text={
            `Compre sua passagem\n${amountSeats}x ${formatValue(price)}`
          }
        />

        <View style={styles.form}>
          <InputWithLabel
            placeholder="0000 0000 0000 0000"
            hasMaskInput
            typeMask="custom"
            optionsMask={{
              mask: '9999 9999 9999 9999'
            }}
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setNumberCard(text)}
            styleInput={{ fontSize: 16 }}
            keyboardType="numeric"
            label="Número do cartão"
            valueInput={numberCard}
          />

          <InputWithLabel
            placeholder="EX: LUCAS SILVA"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setName(text)}
            styleInput={{ fontSize: 16 }}
            autoCapitalize="characters"
            label="Nome do Titular"
            valueInput={name}
          />

          <View style={styles.inputInRow}>
            <InputWithLabel
              placeholder="00/00"
              hasMaskInput
              typeMask="custom"
              optionsMask={{
                mask: '99/99'
              }}
              placeholderTextColor={Colors.gray}
              onChangeText={(text) => setValidity(text)}
              autoCapitalize="characters"
              styleInput={{ fontSize: 16, }}
              styleContainer={{ marginRight: 10, }}
              maxLength={5}
              keyboardType="numeric"
              label="Validade"
              valueInput={validity}
            />

            <InputWithLabel
              placeholder="000"
              placeholderTextColor={Colors.gray}
              onChangeText={(text) => setCvv(text)}
              styleInput={{ fontSize: 16 }}
              styleContainer={{ marginLeft: 10 }}
              keyboardType="numeric"
              maxLength={3}
              label="CVV"
              valueInput={cvv}
            />
          </View>

          <View style={styles.buttonPrimary}>
            <ButtonPrimaryWithIcon
              nameIcon="shopping-cart"
              sizeIcon={18}
              colorIcon={Colors.white}
              activeOpacity={0.8}
              label={`Comprar (${formatValue(amountSeats * price)})`}
              colorIcon={Colors.white}
              onPress={() => handleBuyPassage()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default BuyPassage;
