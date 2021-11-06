import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import theme from "../../config/theme";
import Analytics from "../../components/Analytics";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Analytics />
    </View>
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
