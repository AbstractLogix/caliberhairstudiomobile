import React from "react";
import { SafeAreaView, StyleSheet, Button, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

import NavOptions from "../components/NavOptions";
import theme from "../config/theme";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navOptions}>
        <NavOptions />
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
