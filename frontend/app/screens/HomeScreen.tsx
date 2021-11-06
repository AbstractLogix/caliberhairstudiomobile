import React from "react";
import { SafeAreaView, StyleSheet, Button, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

import NavOptions from "../components/NavOptions";
import theme from "../config/theme";

const data = [
  {
    id: "1",
    title: "Products",
    image: require("../assets/products/wash_224x224.png"), // instead of require could be uri
    screen: "ProductsScreen",
  },
  {
    id: "2",
    title: "Artists",
    image: require("../assets/caliber_boys.jpg"),
    screen: "ArtistsScreen",
  },
  {
    id: "3",
    title: "Gallery",
    image: require("../assets/profile/chris/chris_profile.jpg"),
    screen: "GalleryScreen",
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navOptions}>
        <NavOptions items={data} />
      </View>
      <View style={styles.app_button}>
        <Button
          title="Make an appointment"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://www.schedulicity.com/scheduling/CHSW4RC"
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  navOptions: {
    padding: 8,
  },
  app_button: {
    marginTop: 70,
    flex: 0,
    justifyContent: "center",
    backgroundColor: theme.colors.white,
  },
});
