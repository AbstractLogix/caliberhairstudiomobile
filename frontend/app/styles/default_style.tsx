import theme from "../config/theme";
import { StyleSheet } from "react-native";

const default_style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  container_nav: {
    flex: 1,
    padding: 15,
    backgroundColor: theme.colors.white,
  },
  container_gallery: {},
  logo_navigation: {
    width: 60,
    height: 42,
    resizeMode: "contain",
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
  button_forgot: {
    height: 30,
    marginBottom: 30,
  },
  button_apt: {
    marginTop: 70,
    flex: 0,
    justifyContent: "center",
    backgroundColor: theme.colors.white,
  },
  button_signout: {
    margin: 40,
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
  image_small: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  image_medium: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    fontSize: 14,
  },
});

export default default_style;
