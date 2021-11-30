import React from "react";
import { View, Text, Image } from "react-native";
import Carousel from "../components/Carousel";

import style from "../styles/default_style";

const PortfolioScreen = ({ route }: any) => {
  const { artist, profileImage, description, portfolio } = route.params;
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}> {artist} </Text>
        <Text style={style.description}>{description}</Text>
        <Image source={profileImage} style={style.image_small} />
        <Text>ellos</Text>
      </View>
      <Carousel data={portfolio}></Carousel>
    </View>
  );
};

export default PortfolioScreen;
