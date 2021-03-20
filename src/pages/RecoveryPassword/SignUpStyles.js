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
    paddingTop: 30,
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
  },

  center: {
    alignItems: 'center',
  },
  localizationImage: {
    marginBottom: 32,
  },

  iconBack: {
    // position: 'absolute',
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
  absoluteButton: {
    marginTop: 20,
    flex: 1,
    width: '100%',
    marginBottom: 30,
  },

  bottomScreen: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
