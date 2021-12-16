import React from "react";
import { View, Text, Image } from "react-native";

import style from "../styles/default_style";

const ProductScreen = ({ route }: any) => {
  const { title, image, description, count, price } = route.params;
  return (
    <View style={style.container}>
      <View style={style.container}>
        <Text style={style.title}> {title} </Text>
        <Text style={style.description}>{description}</Text>
        <Image source={image} style={style.image_small} />
        <Text>Amount in stock: {count}</Text>
        <Text>Price: {price}</Text>
      </View>
    </View>
  );
};

export default ProductScreen;
