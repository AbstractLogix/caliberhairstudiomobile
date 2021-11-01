import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as AppleAuthentication from "expo-apple-authentication";

import theme from "../config/theme";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
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
      <TouchableOpacity style={styles.button}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const email = "";
          const password = "";
          login(email, password);
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Signup</Text>
      </TouchableOpacity>
      <AppleLogin />
    </View>
  );
};

function login(email: string, password: string) {
  const navigate = useNavigation();
  if (true) {
    return (
      // @ts-ignore
      navigate.navigate("DashboardScreen")
    );
  } else {
    <Text>Login failed!</Text>;
    <LoginScreen />;
  }
}

// Sign-in components
const AppleLogin = () => {
  return (
    <View>
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={{ width: 200, height: 44 }}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            // signed in
          } catch (e: any) {
            if (e.code === "ERR_CANCELED") {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      />
    </View>
  );
};
const GoogleLogin = () => {};
export default LoginScreen;

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
  button: {
    width: "50%",
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
  },
});
