import { StyleSheet } from 'react-native'
import { Colors } from '../../utils/colors'

// const { tinySpacing, largeSpacing, buttonHeightStandard } = Metrics

export const styles = StyleSheet.create({
  containerMain: {
    height: '100%',
    width: '100%',
  },
  keyboardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.screen,
    padding: 20,
    paddingTop: 35,
  },
  googleImage: {
    resizeMode: 'contain',
    width: '10%',
    height: 44,
  },

  buttonLogin: {
    marginTop: 8,
    width: '90%',
    maxWidth: 340,
  },

  bodyContainerCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '90%',
  },

  center: {
    alignItems: 'center',
  },
  localizationImage: {
    marginBottom: 32,
  },

  iconBack: {
    position: 'absolute',
    top: 5,
    left: 20,
    width: 30,
    height: 30,
    zIndex: 100,
  },

  ContainerHeader: {
    flexDirection: 'row',
    width: '100%',
  },

  logoContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgLogo: {
    height: 48,
    width: 48,
    resizeMode: 'contain',
  },

  TitleLogin: {
    fontSize: 22,
    color: Colors.gray2,
    paddingBottom: 20,
    fontWeight: 'bold',
    lineHeight: 27,
    textAlign: 'center'
  },

  TitleLoginSmall: {
    fontSize: 20,
    color: Colors.gray2,
    paddingBottom: 20,
    fontWeight: 'bold',
    lineHeight: 23
  },

  textDescription: {
    textAlign: 'center',
    lineHeight: 23,
    fontSize: 16,
    color: Colors.description,
    width: 340,
  },
  textAlertUserValidation: {
    marginTop: 10,
    lineHeight: 14,
    fontSize: 10,
    color: Colors.gray,
    width: 280,
  },
  ContainerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '90%',
    // minWidth: 340,
    maxWidth: 340,
    marginTop: 20,
    borderWidth: 1,
    borderColor: Colors.condensed,
    borderRadius: 8,
  },

  imgCountryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },

  imgCountry: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },

  numberCountry: {
    fontSize: 22,
    color: Colors.gray2,
    paddingLeft: 5,
    paddingRight: 10,
    width: 80,
  },

  Input: {
    width: '100%',
    color: Colors.primary,
    height: 50,
    fontSize: 19,
    // textAlign: 'center',
    fontWeight: '500',
    marginLeft: 15,
    lineHeight: 28,
  },
  InputIcon: {
    marginLeft: 20,
    marginBottom: 5,
    // height: '100%'
    alignItems: 'center',
    justifyContent: 'center'
  },
  InputLeft: {
    textAlign: 'left',
  },

  buttonNextContainerAbsolute: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },

  buttonNext: {
    width: '100%',
    height: 52,
    minWidth: 320,
    maxWidth: 340,
    borderRadius: 30,
  },
  signInButton: {
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
    height: 65,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: '100%',
    flex: 1,
  },
  buttonSignUp: {
    marginTop: 70,
    flexDirection: 'row',
  },
  buttonRecovery: {
    flexDirection: 'row',
  },
  textButtonSignUp: {
    color: Colors.primary,
    fontSize: 14,
    marginRight: 10,
  },
  absoluteButton: {
    marginTop: 20,
    flex: 1,
    width: '100%',
    bottom: 0,
  },

  secondBottom: {
    width: '100%',
    height: 52,
    minWidth: 320,
    maxWidth: 340,
    borderRadius: 30,
    justifyContent: 'center',
  },

  bottomScreen: {
    // position: 'absolute',
    // bottom: 0,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boldText: {
    fontWeight: 'bold',
    color: Colors.gray2,
    lineHeight: 23,
    fontSize: 16,
  },

  buttonTextInLine: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 25,
  },
  buttonNotCep: {
    marginTop: 20,
  },
  textButtonNotCep: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  CheckBoxBorder: {
    borderBottomColor: Colors.gray6,
    borderBottomWidth: 1,
  },
  viewInputCheckBox: {
    marginTop: 20,
    width: 300,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  textInputCheckBox: {
    fontSize: 18,
    lineHeight: 20,
    // fontWeight: 'bold',
    color: Colors.gray2,
  },
  textInputGener: {
    fontSize: 18,
    lineHeight: 20,
    // fontWeight: 'bold',
    color: Colors.primary,
    width: 290,
  },
  viewOptionInteresers: {
    paddingHorizontal: 20,
  }
})
