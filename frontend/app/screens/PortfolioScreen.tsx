import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import theme from "../config/theme";

const PortfolioScreen = ({ route }: any) => {
  const { artist, profileImage, description } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Text style={styles.title}> {artist} </Text>
        <Text style={styles.description}>{description}</Text>
        <Image source={profileImage} style={styles.image} />
        <Text>ello</Text>
      </View>
    </View>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.extraExtraLightGray,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    fontSize: 14,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  product: {
    flexWrap: "wrap",
  },
});
