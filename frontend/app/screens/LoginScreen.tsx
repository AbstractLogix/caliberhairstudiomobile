import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import * as AppleAuthentication from "expo-apple-authentication";

import theme from "../config/theme";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/caliber_logo_500x500.png")}
      ></Image>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email Address"
          placeholderTextColor={theme.colors.black}
          onChangeText={() => login} // expression expected
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={theme.colors.black}
          onChangeText={() => login}
        />
      </View>

      <TouchableOpacity style={styles.forgot_button}>
        <Text style={styles.textInput}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.login_button}
        onPress={() => {
          const email = "";
          const password = "";
          login(email, password);
        }}
      >
        <Text style={styles.textInput}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.login_button}>
        <Text style={styles.textInput}>Signup</Text>
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

const FireBaseLogin = () => {};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  inputView: {
    width: "70%",
    backgroundColor: theme.colors.extraExtraLightGray,
    borderRadius: 30,
    height: 45,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: theme.colors.black,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  login_button: {
    width: "80%",
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 10,
  },
});
