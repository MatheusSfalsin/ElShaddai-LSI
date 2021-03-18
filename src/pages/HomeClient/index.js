import { CommonActions } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ButtonPrimaryWithIcon from '../../components/Buttons/ButtonPrimaryWithIcon';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import InputWithICon from '../../components/Inputs/InputWithICon';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import { Colors } from '../../utils/colors';
import ListTravels from '../Travels/ListTravels';

import { styles } from './styles';

const HomeClient = ({ navigation }) => {
  const [origem, setOrigem] = useState('')
  const [destiny, setDestiny] = useState('')
  const [date, setDate] = useState('')

  const refScroll = useRef()

  const goToScroll = (y) => {
    if (refScroll.current) {
      const options = {
        y,
        animated: true,
      }
      refScroll.current.scrollTo(options)

    }

  }

  const handlePressInTravel = (travel) => {
    navigation.push('Seats', { travel })
  }

  return (
    <ScrollView
      style={styles.container}
      ref={refScroll}
      // scrollEventThrottle={16}
      // pagingEnabled={true}
      onScroll={(event) => {
        // setSliderPage(event);
      }}
    >
      <HeaderPrimary withLogOut />
      <Text style={styles.TitleHome}>Compre sua passagem</Text>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.viewInputs}>
          <InputWithICon
            nameIcon="location-arrow"
            colorIcon={Colors.gray2}
            sizeIcon={18}
            placeholder="Digite sua origem"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setOrigem(text)}
            styleInput={{ fontSize: 16 }}
          />

          <InputWithICon
            nameIcon="map-marker-alt"
            colorIcon={Colors.gray2}
            sizeIcon={18}
            placeholder="Digite sua destino"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setDestiny(text)}
            styleInput={{ fontSize: 16 }}
          />

          <InputWithICon
            nameIcon="calendar-alt"
            colorIcon={Colors.gray2}
            sizeIcon={18}
            placeholder="Data de ida"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setDate(text)}
            styleInput={{ fontSize: 16 }}
          />
        </View>
        <View style={styles.buttonPrimary}>
          <ButtonPrimaryWithIcon
            activeOpacity={0.8}
            label="Pesquisar passagens"
            nameIcon="search"
            sizeIcon={16}
            colorIcon={Colors.white}
            onPress={() => { }}
          />
        </View>

        <TouchableOpacity
          onPress={() => goToScroll(400)}
          activeOpacity={0.5}
        >
          <Text style={{ color: Colors.primary, textAlign: 'center', fontSize: 15 }}>
            Ver todos
        </Text>
        </TouchableOpacity>

        <LabelAndLine
          styleContainer={{ marginTop: 10 }}
          text="Viagem Desejada"
        />

        <Text style={{ color: Colors.description, textAlign: 'center', marginTop: 15 }}>
          {'Busque a cima para obter\n opções de Viagem'}
        </Text>

      </View>
      <ListTravels onPressInTravel={handlePressInTravel} />
    </ScrollView>
  );
}

export default HomeClient;
