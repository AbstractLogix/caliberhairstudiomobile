import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashboardScreen from "./dashboard/DashboardScreen";
import SplashScreen from "./SplashScreen";

import LoginScreen from "./LoginScreen";

const LoginNavigation = () => {
  const Stack = createNativeStackNavigator();

  const state = {
    // should point to secureStore for authentication token to check if admin is logged in
    userToken: "null", // change to enable dashboard for testing
    isLoading: false,
    isSignout: false,
  };

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {state.userToken == null ? (
        // No token found, user isn't signed in
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Sign in",
            // When logging out, a pop animation feels intuitive
            // you can remove this if you want the default 'push' animation
            animationTypeForReplace: state.isSignout ? "pop" : "push",
          }}
        />
      ) : (
        // User is signed in
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{
            title: "Dashboard",
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default LoginNavigation;
