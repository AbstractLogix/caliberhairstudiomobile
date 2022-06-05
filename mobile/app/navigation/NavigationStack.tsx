import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ArtistsScreen,
  GalleryScreen,
  HomeScreen,
  Logo,
  Onboarding,
  PortfolioScreen,
  ProductScreen,
  ProductsScreen,
} from "../screens";
import LoginNavigation from "./LoginNavigation";

const NavigationStack = () => {
  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        {/* @ts-ignore */}
        <Stack.Navigator
          screenOptions={{
            headerLeft: () => <Logo />,
          }}
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
