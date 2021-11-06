import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import * as SecureStore from "expo-secure-store";
import * as AppleAuthentication from "expo-apple-authentication";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import DashboardScreen from "./dashboard/DashboardScreen";
import theme from "../config/theme";

// @ts-ignore
const AuthContext = React.createContext();

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LOADING AF...</Text>
    </View>
  );
};

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // @ts-ignore
  const { signIn } = React.useContext(AuthContext);

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
          value={email}
          placeholderTextColor={theme.colors.black}
          onChangeText={setEmail} // expression expected
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.textInput}
          placeholder="Password"
          value={password}
          placeholderTextColor={theme.colors.black}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.forgot_button}>
        <Text style={styles.textInput}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.login_button}
        onPress={() => signIn({ email, password })}
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

const LoginNavigation = () => {
  const Stack = createNativeStackNavigator();

  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from the storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        // Restoring token failed
        console.log(e); // make error page?
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the Appp screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: any) => {
        // In a production app, we need to send some data (usually username, password) to server
        // and get a token. We also need to handle errors if sign in failed.
        // after getting the token, we need to persist the token using 'SecureStore'
        // using a dummy token for now
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data: any) => {
        // Another dummy token
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator>
        {state.userToken == null ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            initialParams={authContext}
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
    </AuthContext.Provider>
  );
};

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

export default LoginNavigation;
