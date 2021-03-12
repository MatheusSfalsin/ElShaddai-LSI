import { Platform } from 'react-native'

const isIOS = Platform.OS === 'ios'

export const Colors = {
  // APP COLORS
  primary: '#00a859',
  primaryLight: '#15c850',
  primaryDark: '#56CCF2',
  special: '#1D87FF',
  primaryGradient: {
    light: '#2F80ED',
    dark: '#2F80ED',
  },
  tabBarSteps: {
    step1: '#15c850',
    step2: '#13b546',
    step3: '#10a33d',
    step4: '#0d9133',
  },
  primaryGradientCondensed: ['#00BCAF', '#00BCAF'],
  grayGradientCondensed: ['#9E9E9E', '#757575'],
  specialGradient: {
    light: '#1DADFF',
    dark: '#006AD9',
  },
  GreenGradient: {
    light: '#00BCAF',
    dark: '#00BCAF',
  },
  specialGradientCondensed: ['#1DADFF', '#006AD9'],
  alert: '#FF8840',
  alert300: '#FFBD74',
  alertGradientCondensed: ['#FFBD74', '#FF8840'],
  negation: '#ED5C5C',
  negationGradient: {
    light: '#FF6767',
    dark: '#F93636',
  },
  negationGradientCondensed: ['#FF6767', '#F93636'],
  buttonText: '#ffffff',
  navBar: {
    background: isIOS ? '#f3f5f7' : '#F6F8FA',
    tint: isIOS ? '#00BCAF' : '#00000089',
    iosBorderColor: 'rgba(167, 167, 164, 0.25)',
  },

  // FIXED COLORS
  facebookColor: '#3A5A98',
  newFacebookColor: '#1778F2',
  googleColor: '#4285F4',
  instagram: '#F56040',
  twitter: '#1DA1F2',
  white: '#ffffff',
  whiteOpaque: 'rgba(255, 255, 255, 0.5)',
  error: '#FF3B30',
  androidStatusBar: 'rgba(0, 0, 0, 0.12)',
  // screen: '#f3f5f7',
  screen: '#ffffff',
  opaqueScreen: 'rgba(247,249,251,0.8)',
  lightBackground: '#f7f9fb',
  mustard500: '#FCD757',
  androidFlatButtonPressedRipple: '#99999966', // 40% opacity
  description: '#828282',
  condensed: '#E0E0E0',
  gray: '#BDBDBD',
  gray2: '#4F4F4F',
  gray6: '#F2F2F2',

  pureBlack: '#000',
  darkOverlay: 'rgba(0, 0, 0, 0.80)',
  darkDivider: 'rgba(0, 0, 0, 0.14)',
  lightDivider: 'rgba(255, 255, 255, 0.2)',

  blackPrimary: '#212121',
  blackPrimaryAlt: '#000000DD',
  blackSecondary: '#757575',
  blackSecondaryAlt: '#00000089',
  blackNeutral: '#9E9E9E',
  blackNeutralAlt: '#0000007F',
  blackDisabled: '#E0E0E0',
  blackDisabled2: '#EEEEEE',
  blackDisabledAlt: '#00000060',
  blackDisabledAlt2: '#00000042',
  blackSeparator: '#0000001E',
  blackOpacity02: 'rgba(0,0,0,.2)',

  whiteSecondary: '#ffffffB2',
  whiteDisabled: '#ffffff7F',
  whiteDisabled2: '#ffffff4C',

  politicianUser: '#219653',
  politicianInformation: '#4F4F4F'
}
