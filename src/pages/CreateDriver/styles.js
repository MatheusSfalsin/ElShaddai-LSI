import { StyleSheet } from 'react-native'
import { Colors } from '../../utils/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: Colors.screen,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  inputInRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    marginTop: 60,
  }
})