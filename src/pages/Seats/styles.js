import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen
  },
  title: {
    textAlign: 'center',
    color: Colors.gray2,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.2,
    marginTop: 20,
  },
  armchairs: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.description,
    margin: 6,
  },
  scrollViewStyle: {
    flex: 1,
    marginHorizontal: 8,
    marginTop: 20,
    padding: 12,
    borderWidth: 2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderColor: Colors.condensed,
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
    width: '80%',
  },
})
