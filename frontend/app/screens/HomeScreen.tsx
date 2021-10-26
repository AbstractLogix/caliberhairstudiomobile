import React from "react";
import { SafeAreaView, StyleSheet, Button, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import tw from "tailwind-react-native-classnames";

import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        {/* <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={require("../assets/caliber_logo_150x150.png")} // must be a better way to write this
        /> */}
        <NavOptions />
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
    marginVertical: 10,
  },
});
