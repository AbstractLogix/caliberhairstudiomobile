import { useNavigation, useNavigationBuilder } from "@react-navigation/core";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import theme from "../config/theme";
import DashboardScreen from "./dashboard/DashboardScreen";
import SplashScreen from "./SplashScreen";

const LoginNavigation = () => {
  const Stack = createNativeStackNavigator();

  const state = {
    // should point to secureStore for authentication token to check if admin is logged in
    userToken: "not null",
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
          name="AdminLoginScreen"
          component={AdminLoginScreen}
          options={{
            title: "Sign in",
            // When logging out, a pop animation feels intuitive
            // you can remove this if you want the default 'push' animation
            animationTypeForReplace: state.isSignout ? "pop" : "push",
          }}
        />
      ) : (
        // User is signed in
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      )}
    </Stack.Navigator>
  );
};

const AdminLoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Admin Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email Address"
          placeholderTextColor={theme.colors.black}
          onChangeText={() => login} // expression expected
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor={theme.colors.black}
          onChangeText={() => login}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          login();
        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

function login() {
  const navigate = useNavigation();
  if (true) {
    return (
      // @ts-ignore
      navigate.navigate("DashboardScreen")
    )
  } else {
    <Text>Login failed!</Text>;
  }
}
export default LoginNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "80%",
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: theme.colors.black,
  },
  loginButton: {
    width: "80%",
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: theme.colors.black,
  },
  forgotPassword: {
    color: theme.colors.black,
    fontSize: 11,
  },
});
