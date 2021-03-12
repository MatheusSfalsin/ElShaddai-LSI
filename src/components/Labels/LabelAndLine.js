
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../utils/colors';
// import { Container } from './styles';

const LabelAndLine = ({ text, styleContainer, styleText }) => {
  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={[styles.title, styleText]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderBottomColor: Colors.gray6,
    borderBottomWidth: 2,
  },
  title: {
    color: Colors.gray2,
    fontWeight: 'bold',
    fontSize: 18,
    // lineHeight: 20,
  },
})

export default LabelAndLine;
