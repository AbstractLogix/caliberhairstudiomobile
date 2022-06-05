import React from "react";
import {
  Authentication,
  Dashboard,
  Splash,
  AnalyticsScreen,
  NotificationManagerScreen,
  PhotoGalleryManagerScreen,
  ProfileManagerScreen,
} from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import { Auth } from "aws-amplify";
import { Alert } from "react-native";

const AuthContext = React.createContext({
  signIn: () => {},
});

const LoginNavigation = () => {
  const Stack = createNativeStackNavigator();
  const { signIn } = React.useContext(AuthContext);

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
        console.log(e);
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
      signIn: async (email: string, password: string) => {
        const user = await Auth.signIn(email, password);
        if (user) {
          const token = SecureStore.getItemAsync("userToken");
          dispatch({ type: "SIGN_IN", token: token });
        }
      },
      signOut: () => {
        Auth.signOut();
        SecureStore.deleteItemAsync("userToken");
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data: { email: string; password: string }) => {
        const circuit = await Auth.signUp(data.email, data.password);
        if (circuit) {
          const token = SecureStore.getItemAsync("userToken");
          dispatch({ type: "SIGN_IN", token: token });
        }
      },
    }),
    []
  );

  if (state.isLoading) {
    // we havent finished checking for user token yet.
    // Usually done by checking if a valid token exists
    return <Splash />;
  }
  return (
    //@ts-ignore
    <AuthContext.Provider value={authContext}>
      {/* @ts-ignore */}
      <Stack.Navigator>
        {state.userToken == null ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="Authentication"
            component={Authentication}
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
            name="Dashboard"
            component={Dashboard}
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

// error util func
const errorToString = (error: any, errorStr: string) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(
    errorStr +
      " failed due to error code: " +
      errorCode +
      ". Error message: " +
      errorMessage
  );
  Alert.alert(errorStr);
};

export default LoginNavigation;
