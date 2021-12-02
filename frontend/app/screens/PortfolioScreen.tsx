import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import style from "../styles/default_style";

const PortfolioScreen = ({ route }: any) => {
  const { artist, profileImage, description, portfolio } = route.params;
  const data: {}[] = portfolio;
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}> {artist} </Text>
        <Text style={style.description}>{description}</Text>
        <Image source={profileImage} style={style.image_small} />
        <Text>ellos</Text>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={item.image}
            />
          </View>
        )}
      />
    </View>
  );
};

export default PortfolioScreen;
