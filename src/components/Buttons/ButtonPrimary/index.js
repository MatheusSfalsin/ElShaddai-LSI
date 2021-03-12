import React from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

import { LoadingSpinner } from '../../loadingSpinner'
import { styles } from './styles'

const ButtonPrimary = (props) => {
  const {
    label,
    onPress,
    styleAdd,
    textStyle,
    outline,
    notUpperCase = false,
    isLoading = false,
    colorLoading,
    disabled,
  } = props
  const {
    container,
    primaryBackground,
    text,
    wrap,
    borderTransparent,
    disabledButton
  } = styles
  // const labelToShow = (Platform.OS === 'ios') || notUpperCase ? label : label.toUpperCase()
  const styleDisabled = disabled ? disabledButton : {}
  return (
    <TouchableOpacity
      style={[wrap, borderTransparent, container, primaryBackground, styleAdd, styleDisabled]}
      onPress={onPress}
      disabled={isLoading || disabled}
      {...props}
      activeOpacity={0.6}
    >
      {
        isLoading ?
          <LoadingSpinner
            spinnerColor={colorLoading}
            spinnerSize="small"
          />
          : <Text style={[text, textStyle]}>{label}</Text>
      }
    </TouchableOpacity>
  )
}

ButtonPrimary.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
}
ButtonPrimary.defaultProps = {
  label: '',
  onPress: () => { },
}

export default ButtonPrimary
