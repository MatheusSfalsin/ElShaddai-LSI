import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen
  },
  contentList: {
    marginBottom: 50,
    width: '100%'
  },
  contentTravel: {
    flex: 1,
    marginHorizontal: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.condensed,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: 'row'
  },
  viewPriceCliente: {
    paddingLeft: 15,
    borderLeftWidth: 1,
    borderLeftWidth: 2,
    borderColor: Colors.condensed,
    marginLeft: 12,
    justifyContent: 'center'
  },
  textItemDateTravel: {
    color: Colors.gray2,
    fontSize: 15,
    fontWeight: 'bold',
    paddingVertical: 2,

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
