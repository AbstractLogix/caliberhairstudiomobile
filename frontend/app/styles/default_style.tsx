import theme from "../config/theme";
import { Dimensions, StyleSheet } from "react-native";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

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
  logo_navigation: {
    width: 60,
    height: 42,
    resizeMode: "contain",
  },
  container_carousel: {
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingTop: "50%",
    elevation: 7,
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
    justifyContent: "center",
    backgroundColor: theme.colors.white,
  },
  button_signout: {
    margin: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: theme.colors.extraExtraLightGray,
    borderRadius: 30,
    height: 50,
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    padding: 10,
    marginLeft: 20,
    fontSize: 16,
    color: theme.colors.black,
  },
  image_carousel: {
    width: ITEM_WIDTH,
    height: 300,
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
    fontSize: 30,
  },
  description: {
    fontSize: 15,
    fontFamily: "Verdana",
    padding: 10,
  },
});

export default default_style;
