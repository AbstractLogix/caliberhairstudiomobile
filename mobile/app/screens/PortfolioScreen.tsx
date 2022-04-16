import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { default_style as style } from "../styles";

const PortfolioScreen = ({ route }: any) => {
  const { artist, profileImage, description, portfolio } = route.params;
  const data: { id: number; image: any }[] = portfolio;
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}> {artist} </Text>
        <Text style={style.description}>{description}</Text>
        <Image source={profileImage} style={style.image_small} />
        <Text style={style.textInput}>Portfolio</Text>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <View>
            <Image style={style.image_small} source={item.image} />
          </View>
        )}
      />
    </View>
  );
};

export default PortfolioScreen;
