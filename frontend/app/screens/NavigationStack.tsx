import React from "react";
import { StyleSheet, Image, useColorScheme, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

import HomeScreen from "./HomeScreen";
import ProductsScreen from "./ProductsScreen";
import ArtistsScreen from "./ArtistsScreen";
import GalleryScreen from "./GalleryScreen";
import ProductScreen from "./ProductScreen";
import LoginNavigation from "./LoginNavigation";
import theme from "../config/theme";

function LogoTitle() {
  const navigation = useNavigation();

  return (
    // @ts-ignore
    <TouchableOpacity onPress={() => navigation.navigate("LoginNavigation")}>
      <Image
        style={styles.logo}
        source={require("../assets/caliber_logo_150x150.png")}
      />
    </TouchableOpacity>
  );
}

function SideMenu() {
  return (
    // @ts-ignore
    <TouchableOpacity /* onPress={() => navigation.navigate("AdminLoginScreen")}*/
    >
      <Icon
        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
        name="menuunfold"
        color="white"
        type="antdesign"
      />
    </TouchableOpacity>
  );
}

const NavigationStack = () => {
  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider style={styles.container}>
        <Stack.Navigator
          // HEADER
          screenOptions={{
            //headerTitle: () => <Text>Test</Text>,
            // @ts-ignore
            // headerRight: (props) => <SideMenu {...props} />,
            // @ts-ignore
            headerLeft: (props) => <LogoTitle {...props} />,
          }}
          // BODY
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: true,
              title: "Home",
            }}
          />
          <Stack.Screen
            name="ProductsScreen"
            component={ProductsScreen}
            options={{
              headerShown: true,
              title: "Products",
            }}
          />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
          <Stack.Screen
            name="ArtistsScreen"
            component={ArtistsScreen}
            options={{
              headerShown: true,
              title: "Artists",
            }}
          />
          <Stack.Screen
            name="GalleryScreen"
            component={GalleryScreen}
            options={{
              headerShown: true,
              title: "Gallery",
            }}
          />
          <Stack.Screen name="LoginNavigation" component={LoginNavigation} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({
  header: {
    padding: 5,
  },
  container: {
    backgroundColor: theme.colors.white,
  },
  logo: {
    width: 60,
    height: 40,
    resizeMode: "contain",
  },
});
