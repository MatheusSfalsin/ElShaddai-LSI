import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import { getTravels } from '../../data/travel';
import ListTravels from './ListTravels';
import { styles } from './styles';

const Travels = ({ navigation, route }) => {
  const { isMenager = false } = route.params;
  const [travelSelected, setTravelSelected] = useState('')
  const dateNow = new Date()
  const today = `${dateNow.getDate()}/${dateNow.getMonth() + 1}/${dateNow.getFullYear()}`

  const menagerPressTravel = (id) => {
    setTravelSelected(id)
  }

  return (
    <View style={styles.container}>
      <HeaderPrimary withBackground withGoBack />
      <ScrollView >
        <View style={{ flex: 1, alignItems: 'center' }} >
          <LabelAndLine
            styleContainer={{ marginTop: 10 }}
            styleText={{ textAlign: 'center' }}
            text={`Todas Viagens`}
          />
          <ListTravels
            isClient={false}
            situation={"Andamento"}
            idTravelSelected={travelSelected}
            onPressInTravel={menagerPressTravel}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Travels;
