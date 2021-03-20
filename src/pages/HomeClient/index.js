import { CommonActions } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ButtonPrimaryWithIcon from '../../components/Buttons/ButtonPrimaryWithIcon';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import InputWithICon from '../../components/Inputs/InputWithICon';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import { getUser } from '../../config/data';
import { Colors } from '../../utils/colors';
import ListTravels from '../Travels/ListTravels';

import { styles } from './styles';

const HomeClient = ({ navigation }) => {
  const [origem, setOrigem] = useState('')
  const [destiny, setDestiny] = useState('')
  const [date, setDate] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  const [seeAll, setSeeAll] = useState(false)
  const [updatedList, setUpdatedList] = useState(0)
  const [filterAppy, setFilterAppy] = useState(false)

  const [user, setUser] = useState({})

  useEffect(() => {
    async function getUserLogin () {
      const user = await getUser()
      setUser(user)
    }

    getUserLogin()
  }, [])

  const refScroll = useRef()

  const goToScroll = (y) => {
    if (refScroll.current) {
      const options = {
        y,
        animated: true,
      }
      refScroll.current.scrollTo(options)

    }

  }

  const refreshTravel = () => {
    setUpdatedList(new Date().getTime())
  }

  const handlePressInTravel = (travel) => {
    navigation.push('Seats', { travel, user, refreshTravel })
  }

  const filterTravels = (travel) => {
    if (isSearch) {
      const { origin, destiny } = travel
      const origemResgister = origin.toUpperCase()
      const destinyResgister = destiny.toUpperCase()
      return (origemResgister === origem.toUpperCase()
        && destinyResgister === destiny.toUpperCase()
        && travel.date === date)
        && travel.status !== 'FINISHED'
        && travel.status !== 'CANCELED'
    }

    if (seeAll) return travel.status !== 'FINISHED' && travel.status !== 'CANCELED'

    return false;
  }

  const searchTravel = () => {
    setSeeAll(false)
    setIsSearch(true)
    setFilterAppy(true)
    refreshTravel()
    setTimeout(() => goToScroll(400), 300)
  }

  return (
    <ScrollView
      style={styles.container}
      ref={refScroll}
      // scrollEventThrottle={16}
      // pagingEnabled={true}
      onScroll={(event) => {
        // setSliderPage(event);
      }}
    >
      <HeaderPrimary withLogOut />
      <Text style={styles.TitleHome}>Compre sua passagem</Text>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.viewInputs}>
          <InputWithICon
            nameIcon="location-arrow"
            colorIcon={Colors.gray2}
            sizeIcon={18}
            placeholder="Digite sua origem"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setOrigem(text)}
            styleInput={{ fontSize: 16 }}
          />

          <InputWithICon
            nameIcon="map-marker-alt"
            colorIcon={Colors.gray2}
            sizeIcon={18}
            placeholder="Digite sua destino"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setDestiny(text)}
            styleInput={{ fontSize: 16 }}
          />

          <InputWithICon
            hasMaskInput
            typeMask="datetime"
            optionsMask={{
              format: 'DD/MM/YYYY'
            }}
            valueInput={date}
            nameIcon="calendar-alt"
            colorIcon={Colors.gray2}
            sizeIcon={18}
            placeholder="00/00/0000"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setDate(text)}
            styleInput={{ fontSize: 16 }}
          />
        </View>
        <View style={styles.buttonPrimary}>
          <ButtonPrimaryWithIcon
            activeOpacity={0.8}
            label="Pesquisar passagens"
            nameIcon="search"
            sizeIcon={16}
            colorIcon={Colors.white}
            onPress={() => searchTravel()}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            setIsSearch(false)
            setSeeAll(true)
            setFilterAppy(true)
            refreshTravel()
            setTimeout(() => goToScroll(400), 300)
          }}
          activeOpacity={0.5}
        >
          <Text style={{ color: Colors.primary, textAlign: 'center', fontSize: 15 }}>
            Ver todos
        </Text>
        </TouchableOpacity>

        <LabelAndLine
          styleContainer={{ marginTop: 10 }}
          text="Viagem Desejada"
        />

        {
          !filterAppy &&
          <Text style={{ color: Colors.description, textAlign: 'center', marginTop: 15 }}>
            {'Busque a cima para obter\n opções de Viagem'}
          </Text>
        }

      </View>
      <ListTravels
        filterTravels={filterTravels}
        onPressInTravel={handlePressInTravel}
        updatedList={updatedList}
        alreadySearch={seeAll || isSearch}
      />
    </ScrollView>
  );
}

export default HomeClient;
