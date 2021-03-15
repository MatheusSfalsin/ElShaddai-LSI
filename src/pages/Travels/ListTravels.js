import { CommonActions } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ButtonPrimaryWithIcon from '../../components/Buttons/ButtonPrimaryWithIcon';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import InputWithICon from '../../components/Inputs/InputWithICon';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import { getTravels } from '../../data/travel';
import { Colors } from '../../utils/colors';
import FormatValueMoney from '../../utils/formatValueMoney';

import { styles } from './styles';

const ListTravels = ({
  navigation,
  situation,
  isClient = true,
  onPressInTravel = () => { },
  idTravelSelected = ''
}) => {
  const [travels, setTravels] = useState([])

  useEffect(() => {
    async function getData () {
      const travels = await getTravels()
      const formTravels = travels.map(travel => {
        const { markedSeats = [], price = 0 } = travel
        return {
          ...travel,
          lengthMarkedSeats: markedSeats.length,
          priceFormat: FormatValueMoney(Number(price))
        }
      })
      setTravels(formTravels)
    }

    getData()
  }, [])

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
        travels.map((travel, index) => {
          const selected = travel.id === idTravelSelected
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              onPress={() => onPressInTravel(travel.id)}
              style={[styles.contentTravel, selected && { backgroundColor: Colors.condensed }]}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.textItemTravel} numberOfLines={1}>
                  {`Saída: ${travel.timeOrigin} - ${travel.origin}`}
                </Text>

                <Text style={styles.textItemTravel} numberOfLines={1}>
                  {`Chegada: ${travel.timeDestiny} - ${travel.destiny}`}
                </Text>

                <View style={!isClient && { flexDirection: 'row' }}>
                  <Text style={styles.textSmallItemTravel} numberOfLines={1}>
                    {`Ônibus: ${travel.bus.plate}(${travel.bus.numberSeats})`}
                  </Text>

                  {
                    !isClient &&
                    <Text style={styles.textSmallItemTravel}>
                      {travel.priceFormat}
                    </Text>
                  }

                  {
                    !isClient &&
                    <Text style={styles.textSmallItemTravel} numberOfLines={1}>
                      {`Passagerios: ${travel.lengthMarkedSeats}`}
                    </Text>
                  }

                </View>

                {
                  !!situation &&
                  <Text style={styles.textSituation} numberOfLines={1}>
                    {`Em Andamento`}
                  </Text>
                }

              </View>

              {isClient &&
                <View style={styles.viewPriceCliente}>
                  <Text style={styles.textItemPrice}>{travel.priceFormat}</Text>
                </View>
              }
            </TouchableOpacity>
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
