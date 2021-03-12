import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import { styles } from './styles';

const Travels = ({ navigation }) => {
  const [origem, setOrigem] = useState('')
  const [destiny, setDestiny] = useState('')
  const [date, setDate] = useState('')

  return (
    <View style={styles.container}>
      <HeaderPrimary withBackground />
      <Text style={styles.TitleHome}>Compre sua passagem</Text>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.viewInputs}>
        </View>
      </View>
    </View>
  );
}

export default Travels;
