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
    marginRight: 15,
  },
  textItemPrice: {
    color: Colors.gray2,
    fontSize: 16,
    fontWeight: "bold",
    // fontWeight: '',
    paddingVertical: 3,

  },
  textSituation: {
    color: Colors.gray2,
    fontSize: 14,
    fontWeight: "bold",
    paddingVertical: 3,

  },
})
