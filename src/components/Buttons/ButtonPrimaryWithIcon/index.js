import React from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome5';

import { LoadingSpinner } from '../../loadingSpinner'
import { styles } from './styles'

const ButtonPrimaryWithIcon = (props) => {
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
    nameIcon,
    sizeIcon,
    colorIcon,
    activeOpacity = 0.5
  } = props

  const {
    container,
    primaryBackground,
    text,
    wrap,
    borderTransparent,
    disabledButton,
    styledAdd
  } = styles

  const labelToShow = label
  const styleDisabled = disabled ? disabledButton : {}

  return (
    <TouchableOpacity
      style={[
        wrap,
        borderTransparent,
        container,
        primaryBackground,
        styleDisabled,
        styledAdd
      ]}
      // style={[styles.container, wrap,]}
      onPress={onPress}
      disabled={isLoading || disabled}
      {...props}
      activeOpacity={activeOpacity}
    >
      {
        isLoading ?
          <LoadingSpinner
            spinnerColor={colorLoading}
            spinnerSize="small"
          />
          :
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            marginLeft: -10
          }}>
            <Icon name={nameIcon} size={sizeIcon} color={colorIcon} />
            <Text style={[text, textStyle]}>{labelToShow}</Text>
          </View>
      }
    </TouchableOpacity>
  )
}

ButtonPrimaryWithIcon.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
}
ButtonPrimaryWithIcon.defaultProps = {
  label: '',
  onPress: () => { },
}

export default ButtonPrimaryWithIcon
