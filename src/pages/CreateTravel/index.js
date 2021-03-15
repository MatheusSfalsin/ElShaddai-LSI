import React, { useState, useEffect } from 'react';
import { Alert, ScrollView, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import ButtonPrimaryWithIcon from '../../components/Buttons/ButtonPrimaryWithIcon';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import { getBuses } from '../../data/bus'
import { getDrivers } from '../../data/driver'
import { saveNewTravel } from '../../data/travel'
import { styles } from './styles';

const CreateTravel = ({ navigation }) => {
  const [drivers, setDrivers] = useState([])
  const [buses, setBuses] = useState([])

  const [origin, setOrigin] = useState('')
  const [destiny, setDestiny] = useState('')
  const [date, setDate] = useState('')
  const [price, setPrice] = useState('')
  const [timeOrigin, setTimeOrigin] = useState('')
  const [timeDestiny, setTimeDestiny] = useState('')
  const [driver, setDriver] = useState({})
  const [bus, setBus] = useState({})

  useEffect(() => {
    async function getData () {
      const drivers = await getDrivers()

      const formatDrivers = drivers.map(driver => {
        return {
          ...driver,
          label: driver.driverName,
          value: driver.id
        }
      })

      const buses = await getBuses()

      const formatBuses = buses.map(bus => {
        return {
          ...bus,
          label: `${bus.model}-${bus.plate}`,
          value: bus.id
        }
      })

      setDrivers(formatDrivers)
      setBuses(formatBuses)
    }

    getData()
  }, [])

  const handleCreateTravel = () => {
    const allFilled = origin && destiny && date && price && timeOrigin && timeDestiny && driver && bus
    if (!allFilled) {
      Alert.alert('Campos não preenchidos', 'Preencha todos dados...')
      return
    }

    const id = Math.random().toString(36).substr(2, 9);

    const completeDriver = drivers.filter(driverData => driverData.id === driver)[0]
    const completeBus = buses.filter(busData => busData.id === bus)[0]

    const travel = {
      id,
      origin,
      destiny,
      date,
      price: Number(price),
      timeOrigin,
      timeDestiny,
      driver: completeDriver,
      bus: completeBus,
      markedSeats: []
    }

    saveNewTravel(travel)

    setOrigin('')
    setDestiny('')
    setDate('')
    setPrice('')
    setTimeOrigin('')
    setTimeDestiny('')
    setDriver('')
    setBus('')
    Alert.alert('Viagem criada', 'Viagem criada, clique ok para continuar...')
    // console.log()
    // navigation.goBack()
  }

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <HeaderPrimary withGoBack />
      <View style={styles.content}>
        <LabelAndLine
          styleContainer={{ marginTop: 10 }}
          styleText={{ textAlign: 'center' }}
          text="Criar viagem"
        />

        <View style={styles.form}>
          <InputWithLabel
            placeholder="Ex: Rio de Janeiro"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setOrigin(text)}
            styleInput={{ fontSize: 16 }}
            autoCapitalize="words"
            label="Origem"
            valueInput={origin}
          />

          <InputWithLabel
            placeholder="Ex: São Paulo"
            placeholderTextColor={Colors.gray}
            onChangeText={(text) => setDestiny(text)}
            styleInput={{ fontSize: 16 }}
            autoCapitalize="words"
            label="Destino"
            valueInput={destiny}
          />

          <View style={styles.inputInRow}>
            <InputWithLabel
              placeholder="00/00/0000"
              hasMaskInput
              typeMask="datetime"
              optionsMask={{
                format: 'DD/MM/YYYY'
              }}
              placeholderTextColor={Colors.gray}
              onChangeText={(text) => setDate(text)}
              valueInput={date}
              keyboardType="numeric"
              styleInput={{ fontSize: 16 }}
              styleContainer={{ marginRight: 10 }}
              label="Data"
            />

            <InputWithLabel
              placeholder="00.00"
              hasMaskInput
              typeMask="money"
              optionsMask={{
                precision: 2,
                separator: '.',
                delimiter: ',',
                unit: '',
                suffixUnit: ''
              }}
              placeholderTextColor={Colors.gray}
              onChangeText={(text) => setPrice(text)}
              valueInput={price}
              keyboardType="numeric"
              styleInput={{ fontSize: 16 }}
              styleContainer={{ marginRight: 10 }}
              label="Preço(R$)"
            />
          </View>

          <View style={styles.inputInRow}>
            <InputWithLabel
              placeholder="00:00"
              hasMaskInput
              typeMask="datetime"
              optionsMask={{
                format: 'HH:mm'
              }}
              placeholderTextColor={Colors.gray}
              onChangeText={(text) => setTimeOrigin(text)}
              valueInput={timeOrigin}
              keyboardType="numeric"
              styleInput={{ fontSize: 16 }}
              styleContainer={{ marginRight: 10 }}
              label="Horário de saída"
            />

            <InputWithLabel
              placeholder="00:00"
              hasMaskInput
              typeMask="datetime"
              optionsMask={{
                format: 'HH:mm'
              }}
              placeholderTextColor={Colors.gray}
              onChangeText={(text) => setTimeDestiny(text)}
              valueInput={timeDestiny}
              keyboardType="numeric"
              styleInput={{ fontSize: 16 }}
              styleContainer={{ marginRight: 10 }}
              label="Horário de chegada"
            />
          </View>

          <SelectWithLabel
            itemsSelect={drivers}
            onChangeOption={(value) => setDriver(value)}
            value={driver}
            label="Motorista"
          />

          <SelectWithLabel
            itemsSelect={buses}
            onChangeOption={(value) => setBus(value)}
            value={bus}
            label="Ônibus"
          />

          <View style={styles.buttonPrimary}>
            <ButtonPrimaryWithIcon
              activeOpacity={0.8}
              label="Cadastrar ônibus"
              colorIcon={Colors.white}
              onPress={() => handleCreateTravel()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default CreateTravel;
