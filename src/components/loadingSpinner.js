import React from 'react'
import { ActivityIndicator } from 'react-native'
import { string } from 'prop-types'
import { Colors } from '../utils/colors'


export const LoadingSpinner = (props) => {
  const { spinnerColor, spinnerSize } = props
  return (
    <ActivityIndicator color={spinnerColor || Colors.primary} size={spinnerSize} />
  )
}

LoadingSpinner.propTypes = {
  spinnerColor: string,
  spinnerSize: string
}

LoadingSpinner.defaultProps = {
  spinnerColor: null,
  spinnerSize: 'large'
}
