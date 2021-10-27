import React from "react";
import { StyleSheet, Text, Touchable, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import theme from "../config/theme";

const AdminLoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Admin Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email Address"
          placeholderTextColor="#003f5c"
          onChangeText={() => login} // expression expected
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={() => login}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

function login() {
  return true;
}
export default AdminLoginScreen;

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
    color: theme.colors.white,
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
