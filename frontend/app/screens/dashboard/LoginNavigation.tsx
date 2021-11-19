import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import * as SecureStore from "expo-secure-store";
import * as AppleAuthentication from "expo-apple-authentication";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";
import { initializeApp } from "firebase/app";
import * as WebBrowser from 'expo-web-browser';
import {
  getAuth,
  FacebookAuthProvider,
  signInWithCredential,
} from "firebase/auth";

import DashboardScreen from "./DashboardScreen";
import theme from "../../config/theme";
import style from "../../styles/default_style";
import AnalyticsScreen from "./userPages/AnalyticsScreen";
import NotificationManagerScreen from "./userPages/NotificationManagerScreen";
import ProfileManagerScreen from "./userPages/ProfileManagerScreen";
import PhotoGalleryManagerScreen from "./userPages/PhotoGalleryManagerScreen";

import {
  firebaseConfig,
  facebookConfig,
} from "../../api/firebase/firebase_secrets";

// initalize firebase
initializeApp(firebaseConfig);
//Web only: This method should be invoked on the page that the auth popup gets redirected to on web,
//it'll ensure that authentication is completed properly. On native this does nothing.
WebBrowser.maybeCompleteAuthSession();

// authorization context
// @ts-ignore
const AuthContext = React.createContext();

const SplashScreen = () => {
  return (
    <View style={style.container}>
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
    <View style={style.container}>
      <Image
        style={style.image_medium}
        source={require("../assets/caliber_logo_500x500.png")}
      ></Image>
      <View style={style.inputView}>
        <TextInput
          style={style.textInput}
          placeholder="Email Address"
          value={email}
          placeholderTextColor={theme.colors.black}
          onChangeText={setEmail} // expression expected
        />
      </View>
      <View style={style.inputView}>
        <TextInput
          secureTextEntry
          style={style.textInput}
          placeholder="Password"
          value={password}
          placeholderTextColor={theme.colors.black}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={style.button_forgot}>
        <Text style={style.textInput}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.button_large}
        onPress={() => signIn({ email, password })}
      >
        <Text style={style.textInput}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button_large}>
        <Text style={style.textInput}>Signup</Text>
      </TouchableOpacity>

      <FacebookLogin />
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

// Facebook sign-in
const FacebookLogin = () => {
  const app = initializeApp(firebaseConfig);
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: facebookConfig.appId,
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;

      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      // @ts-ignore
      const credential = provider.credential(access_token); // should work ? static member
      // Sign in with the credential from the Facebook user.
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <TouchableOpacity
      style={style.button_large}
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}
    >
      <Text>Login with Facebook</Text>
    </TouchableOpacity>
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

      // This will switch to the App screen or Auth screen and this loading
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
            initialParams={AuthContext.Provider}
            options={{
              title: "Dashboard",
            }}
          />
        )}
        <Stack.Screen
          name="AnalyticsScreen"
          component={AnalyticsScreen}
          options={{
            title: "Analytics",
          }}
        />
        <Stack.Screen
          name="NotificationManagerScreen"
          component={NotificationManagerScreen}
          options={{
            title: "Notification Manager",
          }}
        />
        <Stack.Screen
          name="ProfileManagerScreen"
          component={ProfileManagerScreen}
          options={{
            title: "Profile Manager",
          }}
        />
        <Stack.Screen
          name="PhotoGalleryManagerScreen"
          component={PhotoGalleryManagerScreen}
          options={{
            title: "Photo Gallery Manager",
          }}
        />
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

export default LoginNavigation;