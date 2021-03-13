import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import ButtonPrimaryWithIcon from '../../components/Buttons/ButtonPrimaryWithIcon';
import HeaderPrimary from '../../components/Headers/HeaderPrimary';
import InputWithICon from '../../components/Inputs/InputWithICon';
import LabelAndLine from '../../components/Labels/LabelAndLine';
import { getUser } from '../../config/data';
import { Colors } from '../../utils/colors';
import ListTravels from '../Travels/ListTravels';

import { styles } from './styles';

const HomeEmployees = ({ navigation }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    async function getUserLogin () {
      const user = await getUser()
      setUser(user)
    }

    getUserLogin()
  }, [])

  const isMenager = user.type === 'menager'
  const typeEmployee = isMenager ? 'Gerente' : 'Atendente'

  return (
    <View
      style={styles.container}
    >
      <HeaderPrimary withLogOut />
      {/* <Text style={styles.TitleHome}>Compre sua passagem</Text> */}
      <View style={{ flex: 1, alignItems: 'center' }}>

        <LabelAndLine
          styleContainer={{ marginTop: 10 }}
          styleText={{ textAlign: 'center' }}
          text={`${typeEmployee}\n${user.name || ''}`}
        />

        <View style={styles.buttonPrimary}>
          {
            isMenager &&
            <ButtonPrimary
              label="Criar uma viagem"
              onPress={() => { }}
              styleAdd={{ marginTop: 6 }}
            />
          }

          <ButtonPrimary
            label="Viagens"
            onPress={() => navigation.push('Travels')}
            styleAdd={{ marginTop: 6 }}
          />

          {
            isMenager &&
            <ButtonPrimary
              label="Relatórios"
              onPress={() => { }}
              styleAdd={{ marginTop: 6 }}
            />
          }

          {
            isMenager &&
            <ButtonPrimary
              label="Criar ônibus"
              onPress={() => navigation.push('CreateBus')}
              styleAdd={{ marginTop: 6 }}
            />
          }

          {
            isMenager &&
            <ButtonPrimary
              label="Criar Motorista"
              onPress={() => { }}
              styleAdd={{ marginTop: 6 }}
            />
          }
        </View>


      </View>
    </View>
  );
}

export default HomeEmployees;
