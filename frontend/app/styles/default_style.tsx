import theme from "../config/theme";
import { StyleSheet } from "react-native";

const default_style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button_large: {
    width: "80%",
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  inputView: {
    width: "70%",
    backgroundColor: theme.colors.extraExtraLightGray,
    borderRadius: 30,
    height: 45,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: theme.colors.black,
  },
});

export default default_style;
