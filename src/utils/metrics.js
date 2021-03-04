import { Dimensions, Platform, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width, height } = Dimensions.get('window')
/*
 * While using SafeAreaView, the iOS statusBar is already handled
 * and defined to 0 in metrics. If the SafeAreaView get removed,
 * use 20 for standard portrait iPhone statusBar and 44 for
 * portrait iPhoneX kin. Landscape are still to be defined, thats
 * one of the whys we are using SafeAreaView
 */
const statusBarHeight = getStatusBarHeight()
const navBarDataHeight = Platform.OS === 'ios' ? 44 : 56
const navBarHeight = statusBarHeight + navBarDataHeight

const spinnerHeight = {
  small: 20,
}

export const Metrics = {
  xxsSpacing: 4,
  xsSpacing: 6,
  tinySpacing: 8,
  smallSpacing: 12,
  standardSpacing: 16,
  largeSpacing: 24,
  xlSpacing: 32,
  xxlSpacing: 40,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  statusBarHeight,
  forcedIosStatusBar: 20,
  navBarDataHeight,
  navBarHeight,
  navBarTransparentInset: Platform.OS === 'ios' ? 63.5 : 0,
  navBarButtonHeight: 48,
  navBarIconBadgePosition: {
    top: Platform.OS === 'ios' ? 8 : 16,
    right: Platform.OS === 'ios' ? 10 : 16,
  },
  badgeWidth: 9,
  badgeWrap: 14,
  singleTitleWrapMargin: 60,
  backButtonInset: Platform.OS === 'ios' ? 5 : 8,
  navbarAvatarSize: Platform.OS === 'ios' ? 32 : 32,

  third: 1 / 3,
  section: 25,
  baseMargin: 10,

  paragraphSpacing: 16,
  bottomFloatingButtonTotalHeight: 76,
  bottomFloatingButtonDenseHeight: 60,

  borderWidthNavbarIOS: 1,
  borderWidth: 1,
  borderWidthThin: StyleSheet.hairlineWidth,
  menuRadius: 8,
  inputRadius: 2,

  signinExpandedLogoSize: 220,

  textAcessoryWidth: 56,

  inputCommentAvatarAndroidSpacing: 18,
  inputCommentImageIndent: 40,

  progressBarHeight: 16,
  progressBarHeightThin: 8,
  progressBarSpacing: 3,

  avatar: {
    small: 32,
    standard: 40,
    preCandidate: 74,
    xl: 80,
    xxl: 120,
    xxxl: 160,
  },

  icons: {
    tiny: 12,
    small: 18,
    medium: 24,
    large: 32,
    xl: 48,
    xxl: 72,
    xxxl: 88,
  },
  iconTouchableArea: 48,
  iconTouchableAreaDense: 40,

  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 300,
  },
  imageBlur: Platform.OS === 'android' ? 3 : 10,

  ratio: {
    square: 1,
    standard: 4 / 3,
    wide: 16 / 9,
    wideVertical: 9 / 16,
  },

  animation: {
    blink: 75,
    fast: 150,
    standard: 250,
    slow: 450,
  },

  spinnerHeight,
  loadingContainerHeight: spinnerHeight.small + 16,

  buttonMinWidth: 88,
  buttonMinHeight: 36,
  buttonHeightDense: 40,
  buttonHeightStandard: 44,
  buttonHeightStandardPlus: 48,

  inputHeightDense: 40,
  inputHeightStandard: 48,
  inputHeightLarge: 72,
  inputMultilineMaxHeight: 136,

  maxErrorMessageHeight: 48,

  chipHeight: 32,
  chipRadius: 16,

  liveAnnounceWidth: 72,

  navBarHeaderAnimation: {
    range: [24, 80],
    min: 24,
    max: 80,
  },
}
