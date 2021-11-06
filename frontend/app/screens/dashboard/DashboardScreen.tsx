import React from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";

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
    screen: "ProfileManagerScreen",
  },
  {
    id: "4",
    title: "Photo Gallery Manager",
    image: require("../../assets/shop/shop_view.jpg"),
    screen: "PhotoGalleryManagerScreen",
  },
];
// TODO fix signout button
const DashboardScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavOptions items={data} />
        <View style={styles.signoutBtn}>
          <Button title="Sign out" onPress={() => {}} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  header: {},

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  signoutBtn: {
    marginBottom: 40,
  },
});
