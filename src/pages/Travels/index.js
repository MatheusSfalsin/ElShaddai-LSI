import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import RowInteraction from '../../components/RowInteraction';
import { getTravels, updateStatus } from '../../data/travel';
import ListTravels from './ListTravels';
import { styles } from './styles';

const Travels = ({ navigation, route }) => {
  const { isMenager = false, user } = route.params;

  const [travelSelected, setTravelSelected] = useState({})
  const [updatedList, setUpdatedList] = useState(0)

  const dateNow = new Date()
  const today = `${dateNow.getDate()}/${dateNow.getMonth() + 1}/${dateNow.getFullYear()}`

  const statarTravel = async () => {
    await updateStatus(travelSelected, 'ACTIVE')
    setUpdatedList(new Date().getTime())
  }

  const finishTravel = async () => {
    await updateStatus(travelSelected, 'FINISHE')
    setUpdatedList(new Date().getTime())
  }

  const cancelTravel = async () => {
    await updateStatus(travelSelected, 'CANCELED')
    setUpdatedList(new Date().getTime())
  }

  // const cancelTravel = async () =>{
  //   await updateStatus(travelSelected, 'CANCELED')
  // }

  const menagerPressTravel = (travel) => {
    console.log(travel)
    setTravelSelected(travel)
  }

  const goToSinister = () => {
    navigation.push('Sinister', { travel: travelSelected, user })
  }

  return (
    <View style={styles.container}>
      <HeaderPrimary withBackground withGoBack />
      <RowInteraction
        onPressStart={() => statarTravel()}
        onPressFinish={() => finishTravel()}
        onPressCancel={() => cancelTravel()}
        onPressRegisterSinister={() => { }}
      />
      <ScrollView >
        <View style={{ flex: 1, alignItems: 'center' }} >
          <LabelAndLine
            styleText={{ textAlign: 'center' }}
            text={`Todas Viagens`}
          />



          <ListTravels
            isClient={false}
            goToSinister={goToSinister}
            travelSelected={travelSelected}
            onPressInTravel={menagerPressTravel}
            updatedList={updatedList}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Travels;
