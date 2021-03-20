import { CommonActions } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment'
import ButtonPrimaryWithIcon from '../../components/Buttons/ButtonPrimaryWithIcon';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import InputWithICon from '../../components/Inputs/InputWithICon';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import { getTravels } from '../../data/travel';
import { Colors } from '../../utils/colors';
import FormatValueMoney from '../../utils/formatValueMoney';
import { getStatusColor, getStatusTravel } from '../../utils/values';

import { styles } from './styles';

const ListTravels = ({
  isClient = true,
  onPressInTravel = () => { },
  travelSelected = '',
  updatedList,
  filterTravels = () => (true),
  alreadySearch = true
}) => {
  const [travels, setTravels] = useState([])

  useEffect(() => {
    async function getData () {
      const travels = await getTravels()
      const travelsFilter = travels.filter(travel => {
        return filterTravels(travel)
      })
      const formTravels = travelsFilter.map(travel => {
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
  }, [updatedList])

  return (
    <View style={styles.contentList}>
      {
        travels.map((travel, index) => {
          const selected = travel.id === travelSelected.id
          const statusTravel = getStatusTravel(travel.status)
          const statusColor = getStatusColor(travel.status)
          const { date } = travel
          const formatDate = `${date.slice(6)}-${date.slice(3, 5)}-${date.slice(0, 2)}`
          const today = moment(formatDate).format('DD/MM/YYYY')

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              onPress={() => onPressInTravel(travel)}
              style={[
                styles.contentTravel,
                selected && { backgroundColor: Colors.condensed },
                { borderColor: statusColor }
              ]}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.textItemDateTravel} numberOfLines={1}>
                  {today}
                </Text>

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
                  !isClient &&
                  <Text style={styles.textSituation} numberOfLines={1}>
                    {statusTravel}
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

      {
        (travels.length === 0 && alreadySearch) &&
        <Text style={{ color: Colors.description, textAlign: 'center', marginTop: 15 }}>
          Sem viagens no momemento...
        </Text>
      }
    </View>
  );
}

export default ListTravels;
