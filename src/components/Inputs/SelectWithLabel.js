import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Picker } from '@react-native-picker/picker';

import { Colors } from '../../utils/colors';

// import { Container } from './styles';
const Item = Picker.Item

const SelectWithLabel = ({
  onChangeOption = () => { },
  styleContainer = {},
  styleLabel = {},
  label = '',
  itemsSelect = [],
  value
}) => {
  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={[styles.textLabel, styleLabel]}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onChangeOption(itemValue)}
        >
          <Item label="Selecione..." value="" />
          {itemsSelect.map(({ label, value }) => (
            <Item key={value} label={label} value={value} />
          ))}
        </Picker>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    marginVertical: 7,

  },
  input: {
    flex: 1,
    color: Colors.primary,
    height: 50,
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 28,
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.condensed
    borderColor: Colors.condensed,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 8,
    paddingHorizontal: 8,
  },
  textLabel: {
    color: Colors.gray2,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default SelectWithLabel;
