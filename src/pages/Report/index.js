import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import { Colors } from '../../utils/colors';
import ListTravels from '../Travels/ListTravels';

const Report = ({ navigation, route }) => {
  const [today, setToday] = useState('')

  useEffect(() => {
    const date = getDate()
    setToday(date)
  }, [])

  const getDate = () => {
    const dateNow = new Date()
    const month = dateNow.getMonth() + 1
    const monthFormat = month < 10 ? `0${month}` : month
    const today = `${dateNow.getDate()}/${monthFormat}/${dateNow.getFullYear()}`
    return today
  }

  const filterTravels = (travel) => {
    return getDate() === travel.date
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.screen }}>
      <HeaderPrimary withBackground withGoBack />
      <ScrollView >
        <View style={{ flex: 1, alignItems: 'center' }} >
          <LabelAndLine
            styleText={{ textAlign: 'center' }}
            text={`Relátorios Viagens\n${today}`}
          />

          <ListTravels
            filterTravels={filterTravels}
            isClient={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Report;
