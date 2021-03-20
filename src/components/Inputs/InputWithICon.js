import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../utils/colors';

// import { Container } from './styles';

const InputWithICon = ({
  hasMaskInput,
  optionsMask = {},
  typeMask,
  placeholder,
  secureTextEntry,
  placeholderTextColor,
  maxLength,
  onChangeText = () => { },
  autoCapitalize = "none",
  nameIcon,
  sizeIcon = 18,
  colorIcon,
  styleInput = {},
  valueInput,
  keyboardType
}) => {
  return (
    <View style={styles.container}>
      <Icon name={nameIcon} size={sizeIcon} color={colorIcon} />
      {
        hasMaskInput ?
          <TextInputMask
            type={typeMask}
            placeholder={placeholder}
            options={optionsMask}
            value={valueInput}
            onChangeText={value => onChangeText(value)}
            style={[styles.input, styleInput]}
            keyboardType={keyboardType}
          />
          :
          <TextInput
            style={[styles.input, styleInput]}
            placeholderTextColor={placeholderTextColor}
            placeholder={placeholder}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            maxLength={maxLength}
            onChangeText={value => onChangeText(value)}
          />
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
  input: {
    flex: 1,
    color: Colors.primary,
    height: 50,
    fontSize: 19,
    fontWeight: '500',
    marginLeft: 10,
    marginHorizontal: 15,
    lineHeight: 28,
    borderBottomWidth: 1,
    borderBottomColor: Colors.condensed
  },
})

export default InputWithICon;
