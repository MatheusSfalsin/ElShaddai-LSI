import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen
  },
  textItemTravel: {
    color: Colors.gray2,
    fontSize: 14,
    paddingVertical: 2,

  },
  textSmallItemTravel: {
    color: Colors.gray2,
    fontSize: 12,
    paddingVertical: 7,
  },
  textItemPrice: {
    color: Colors.gray2,
    fontSize: 16,
    fontWeight: "bold",
    // fontWeight: '',
    paddingVertical: 3,

  },
})
