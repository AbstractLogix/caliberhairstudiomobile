import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { View, Button, Platform } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../../../styles/default_style";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function NotificationManagerScreen() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      // @ts-ignore
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    // @ts-ignore
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        // @ts-ignore
        setNotification(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    // @ts-ignore
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        // @ts-ignore
        notificationListener.current
      );
      // @ts-ignore
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Enter body text..."
          value={body}
          style={styles.textInput}
          onChangeText={setBody}
        ></TextInput>
      </View>

      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(
            expoPushToken,
            "Caliber Hair Studio",
            body,
            {
              someData: "Some data",
            }
          );
        }}
      />
    </View>
  );
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
async function sendPushNotification(
  expoPushToken: string,
  title: string,
  body: string,
  data: {}
) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: title,
    body: body,
    data: data,
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
