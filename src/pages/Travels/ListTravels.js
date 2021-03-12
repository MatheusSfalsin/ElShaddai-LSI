import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ButtonPrimaryWithIcon from '../../components/Buttons/ButtonPrimaryWithIcon';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import InputWithICon from '../../components/Inputs/InputWithICon';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import { Colors } from '../../utils/colors';

import { styles } from './styles';

const ListTravels = ({ navigation, situation }) => {
  const [origem, setOrigem] = useState('')
  const [destiny, setDestiny] = useState('')
  const [date, setDate] = useState('')

  const isClient = true
  const data = [1, 2, 3, 4, 5]
  return (
    // <View style={styles.container}>
    //   <HeaderPrimary withBackground />
    //   <Text style={styles.TitleHome}>Compre sua passagem</Text>
    //   <View style={{ flex: 1, alignItems: 'center' }}>
    //     <View style={styles.viewInputs}>

    //     </View>
    //   </View>
    // </View>
    <>
      {
        data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                flex: 1,
                marginHorizontal: 12,
                padding: 15,
                borderWidth: 1,
                borderColor: Colors.gray6,
                borderRadius: 20,
                marginTop: 20,
                flexDirection: 'row'
              }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.textItemTravel} numberOfLines={1}>{`Saída: 07:00 São Paulo -SP`}</Text>
                <Text style={styles.textItemTravel} numberOfLines={1}>{`Chegada: 12:00 Rio de Janeiroooo - RJ`}</Text>
                <View>
                  <Text style={styles.textSmallItemTravel} numberOfLines={1}>{`Onibus MVG-1053`}</Text>
                  {!isClient && <Text style={styles.textSmallItemTravell} numberOfLines={1}>{`Onibus: MVG-1053`}</Text>}
                  {!isClient && <Text style={styles.textSmallItemTravell} numberOfLines={1}>{`Passagerios: 48`}</Text>}
                </View>
              </View>

              {!!situation && <Text numberOfLines={1}>{`Em Andamento`}</Text>}

              {isClient &&
                <View style={{
                  paddingLeft: 15,
                  borderLeftWidth: 1,
                  borderLeftWidth: 2,
                  borderColor: Colors.condensed,
                  marginLeft: 12,
                  justifyContent: 'center'
                }}>
                  <Text style={styles.textItemPrice}>{`R$ 120,00`}</Text>
                </View>
              }
            </View>
          )
        })
      }
    </>
    // <FlatList
    //   data={}
    //   renderItem={() => {
    //     return (

    //     )
    //   }}
    // />
  );
}

export default ListTravels;
