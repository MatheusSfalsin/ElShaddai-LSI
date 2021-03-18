import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import { Colors } from '../../utils/colors';
import volante from '../../assets/volante.png';

import { styles } from './styles';

const Seats = ({ navigation }) => {
  const [seatsSelect, setSeatsSelect] = useState([])

  const handleSelectArmchair = (armchairId) => {
    const existMarkchair = seatsSelect.findIndex(select => select === armchairId)

    if (existMarkchair === -1) {
      setSeatsSelect([...seatsSelect, armchairId])
    } else {
      const filterSeats = seatsSelect.filter(seat => seat !== armchairId)
      setSeatsSelect(filterSeats)
    }
  }

  const ComponentRow = ({ leftArmchair, rightArmchair, indexKey }) => (
    <View key={indexKey} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', }}>
        {leftArmchair.map(armchair => armchair)}
      </View>

      <View style={{ flexDirection: 'row', }}>
        {rightArmchair.map(armchair => armchair)}
      </View>
    </View>
  )
  const renderArmchairs = (markedSeats = [5, 6, 25, 28]) => {
    const armchairs = []
    // const row = []
    const numberRows = 48 / 4
    for (let indexColumn = 0; indexColumn < numberRows; indexColumn++) {
      let row = [[], []]

      for (let indexRow = 1; indexRow < 5; indexRow++) {
        const numberTextSeat = ((indexColumn * 4) + indexRow)
        const marked = markedSeats.indexOf(numberTextSeat) !== -1
        const selected = seatsSelect.indexOf(numberTextSeat) !== -1
        if (indexRow / 2 <= 1) {
          row[0] = [...row[0],
          <TouchableOpacity
            disabled={marked}
            activeOpacity={0.6}
            style={[
              styles.armchairs,
              marked && { backgroundColor: Colors.gray },
              selected && { borderColor: Colors.primary }
            ]}
            onPress={() => handleSelectArmchair(numberTextSeat)}
          >
            <Text>{numberTextSeat}</Text>
          </TouchableOpacity>]

        } else {
          row[1] = [...row[1],
          <TouchableOpacity
            disabled={marked}
            activeOpacity={0.6}
            style={[
              styles.armchairs,
              marked && { backgroundColor: Colors.gray },
              selected && { borderColor: Colors.primary }
            ]}
            onPress={() => handleSelectArmchair(numberTextSeat)}
          >
            <Text>{numberTextSeat}</Text>
          </TouchableOpacity>]

        }
      }

      armchairs.push(
        <>
          {ComponentRow({ leftArmchair: row[0], rightArmchair: row[1], indexKey: indexColumn })}
        </>
      )
    }

    return (
      <View style={{ paddingBottom: 40 }}>
        {armchairs}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <HeaderPrimary withGoBack />
      <Text style={styles.title}>Selecione sua poltrona</Text>
      <ScrollView style={styles.scrollViewStyle}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          paddingBottom: 20
        }}>
          <Image
            source={volante}
            style={{ width: 110, height: 110, opacity: 0.8 }}
          />

          <TouchableOpacity
            disabled={seatsSelect.length === 0}
            activeOpacity={0.6}
            style={{
              paddingHorizontal: 30,
              paddingVertical: 12,
              backgroundColor: Colors.primary,
              borderRadius: 4,
            }}
            onPress={() => navigation.push('BuyPassage', { armchair: seatsSelect })}
          >
            <Text style={{ color: Colors.white, fontWeight: 'bold', fontSize: 16 }}>Confirmar</Text>
          </TouchableOpacity>
        </View>

        {renderArmchairs()}
      </ScrollView>
    </View>
  )
}

export default Seats;
