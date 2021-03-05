import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Colors } from '../../utils/colors';

// import { Container } from './styles';

const PrimaryInput = ({
  placeholder,
  secureTextEntry,
  placeholderTextColor,
  maxLength,
  onChangeText = () => { },
  autoCapitalize = "none"
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={placeholderTextColor}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
      onChangeText={value => onChangeText(value)}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    color: Colors.primary,
    height: 50,
    fontSize: 19,
    // textAlign: 'center',
    fontWeight: '500',
    marginLeft: 15,
    lineHeight: 28,
  },
})

export default PrimaryInput;
