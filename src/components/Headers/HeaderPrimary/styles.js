import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
  },
  logo: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: -1.5
  },
  textLogOut: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  leftAbsolute: {
    position: 'absolute',
    left: 10,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonLogOut: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  }
})
