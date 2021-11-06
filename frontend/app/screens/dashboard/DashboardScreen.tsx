import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import theme from "../../config/theme";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import NavOptions from "../../components/NavOptions";

const data = [
  {
    id: "1",
    title: "Analytics",
    image: require("../../assets/misc/data_analytics.png"),
    screen: "AnalyticsScreen",
  },
  {
    id: "2",
    title: "Notification Manager",
    image: require("../../assets/misc/notifications_1920.jpg"),
    screen: "NotificationManagerScreen",
  },
  {
    id: "3",
    title: "Profile Manager",
    image: require("../../assets/misc/profile_avatar.png"),
    screen: "Notification Manager",
  },
];

const DashboardScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <NavOptions items={data} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  header: {},

  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
});
