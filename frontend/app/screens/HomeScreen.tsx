import React from "react";
import { SafeAreaView, StyleSheet, Button, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import tw from "tailwind-react-native-classnames";

import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <NavOptions />
      </View>
      <View style={styles.button}>
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
  button: {
    marginVertical: 25,
  },
});
