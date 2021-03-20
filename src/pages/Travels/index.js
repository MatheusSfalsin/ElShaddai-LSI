import React, { useState, useEffect } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
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

  const alertAction = (
    title = '',
    subTitle = '',
    onPressConfirm
  ) => {
    Alert.alert(
      title,
      subTitle,
      [
        {
          text: "Cancelar",
          onPress: () => { },
          style: "cancel"
        },
        { text: "OK", onPress: () => onPressConfirm() }
      ]
    );
  }

  const finishTravel = async () => {
    await updateStatus(travelSelected, 'FINISHED')
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
    setTravelSelected(travel)
  }

  const filterTravels = (travel) => {
    return travel.status !== 'FINISHED' && travel.status !== 'CANCELED'
  }

  return (
    <View style={styles.container}>
      <HeaderPrimary withBackground withGoBack />
      <RowInteraction
        onPressStart={() => alertAction('Começar viagem', 'Deseja iniciar viagem?', statarTravel)}
        onPressFinish={() => alertAction('Concluir viagem', 'Deseja concluir viagem?', finishTravel)}
        onPressCancel={() => alertAction('Cancelar viagem', 'Deseja cancelar viagem?', cancelTravel)}
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
            filterTravels={filterTravels}
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
