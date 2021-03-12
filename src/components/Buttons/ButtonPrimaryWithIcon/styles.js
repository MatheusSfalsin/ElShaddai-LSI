import { StyleSheet } from 'react-native'
import { Colors } from '../../../utils/colors'
import { Metrics } from '../../../utils/metrics'

const {
  GreenGradient,
  blackPrimaryAlt,
  buttonText,
  facebookColor,
  googleColor,
  primary,
  special,
  white,
  blackDisabledAlt2,
  condensed,
} = Colors

const {
  borderWidth,
  buttonHeightDense,
  buttonHeightStandard,
  buttonHeightStandardPlus,
  largeSpacing,
  smallSpacing,
  standardSpacing,
  tinySpacing,
  xxsSpacing,
} = Metrics

export const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: standardSpacing,
  },
  container: {
    // ...Values.elevation.e2,
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    height: buttonHeightStandard,
    marginBottom: smallSpacing,
    marginHorizontal: largeSpacing,
    paddingHorizontal: standardSpacing,
    paddingVertical: 25,
    flex: 1,
  },
  primaryBackground: {
    backgroundColor: primary,
    // width: '100%',
  },
  borderTransparent: {
    borderColor: 'transparent'
  },
  text: {
    fontSize: 15,
    lineHeight: 17,
    fontWeight: 'bold',
    color: buttonText,
    marginLeft: 12,
    // textAlign: 'center'
  },
  disabledButton: {
    backgroundColor: Colors.description
  }
})
