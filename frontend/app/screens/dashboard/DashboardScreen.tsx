import React from "react";
import { View, Button } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import NavOptions from "../../components/NavOptions";

import style from "../../styles/default_style";

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
      <SafeAreaView style={style.container}>
        <NavOptions items={data} />
        <View style={style.button_signout}>
          <Button title="Sign out" onPress={() => {}} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default DashboardScreen;
