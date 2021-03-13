import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import ListTravels from './ListTravels';
import { styles } from './styles';

const Travels = ({ navigation }) => {
  const [origem, setOrigem] = useState('')
  const [destiny, setDestiny] = useState('')
  const [date, setDate] = useState('')

  return (
    <View style={styles.container}>
      <HeaderPrimary withBackground withGoBack />
      <ScrollView >
        <View style={{ flex: 1, alignItems: 'center' }} >
          <ListTravels isClient={false} situation={"Andamento"} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Travels;
