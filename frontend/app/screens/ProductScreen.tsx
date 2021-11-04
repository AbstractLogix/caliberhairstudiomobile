import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import theme from "../config/theme";

const ProductScreen = ({ route }: any) => {
  const { title, image, description, count } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.description}>{description}</Text>
        <Image source={image} style={styles.image} />
        <Text>Amount in stock: {count}</Text>
      </View>
    </View>
  );
};

export default ProductScreen;

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
