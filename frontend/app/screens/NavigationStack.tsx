import React from "react";
import { Image, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-gesture-handler";

import HomeScreen from "./HomeScreen";
import ProductsScreen from "./ProductsScreen";
import ArtistsScreen from "./ArtistsScreen";
import GalleryScreen from "./GalleryScreen";
import ProductScreen from "./ProductScreen";
import LoginNavigation from "./dashboard/LoginNavigation";
import PortfolioScreen from "./PortfolioScreen";

import style from "../styles/default_style";

function LogoTitle() {
  const navigation = useNavigation();

  return (
    // @ts-ignore
    <TouchableOpacity onPress={() => navigation.navigate("LoginNavigation")}>
      <Image
        style={style.logo_navigation}
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
          // HEADER
          screenOptions={{
            // @ts-ignore
            headerLeft: () => <LogoTitle />,
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
            name="PortfolioScreen"
            component={PortfolioScreen}
            options={{
              headerShown: true,
              title: "Portfolios",
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
          <Stack.Screen
            name="LoginNavigation"
            component={LoginNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default NavigationStack;
