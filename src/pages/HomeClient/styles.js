import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen
  },
  TitleHome: {
    textAlign: 'center',
    color: Colors.gray2,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.2,
    marginTop: 20,
  },
  viewInputs: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 300,
    marginTop: 10,
    marginHorizontal: 15
  },
  buttonPrimary: {
    marginTop: 30,
    width: '100%',
  },
})
