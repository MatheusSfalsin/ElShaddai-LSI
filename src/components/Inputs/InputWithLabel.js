import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../utils/colors';

// import { Container } from './styles';

const InputWithLabel = ({
  placeholder,
  secureTextEntry,
  placeholderTextColor,
  maxLength,
  onChangeText = () => { },
  autoCapitalize = "none",
  keyboardType = 'default',
  styleContainer = {},
  styleInput = {},
  styleLabel = {},
  label = ''
}) => {
  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={[styles.textLabel, styleLabel]}>{label}</Text>
      <TextInput
        style={[styles.input, styleInput]}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        onChangeText={value => onChangeText(value)}
      />
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

export default InputWithLabel;
