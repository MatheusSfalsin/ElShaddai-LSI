import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    // marginBottom: 30
  },
  buttonInteraction: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 4,
    borderColor: Colors.condensed,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  }
})
