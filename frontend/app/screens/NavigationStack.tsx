import React from "react";
import { StyleSheet, Image, Alert, useColorScheme } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-gesture-handler";

import HomeScreen from "./HomeScreen";
import ProductsScreen from "./ProductsScreen";
import ArtistsScreen from "./ArtistsScreen";
import GalleryScreen from "./GalleryScreen";
import AdminLoginScreen from "./AdminLoginScreen";
import ProductScreen from "./ProductScreen";

function LogoTitle() {
  return (
    <TouchableOpacity>
      <Image
        style={styles.logo}
        source={require("../assets/caliber_logo_150x150.png")}
      />
    </TouchableOpacity>
  );
}

const NavigationStack = () => {
  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <Stack.Navigator
          screenOptions={{
            // @ts-ignore
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="ProductsScreen"
            component={ProductsScreen}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
          <Stack.Screen
            name="ArtistsScreen"
            component={ArtistsScreen}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="GalleryScreen"
            component={GalleryScreen}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 70,
  },
});
