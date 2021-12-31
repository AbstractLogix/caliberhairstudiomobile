import { useNavigation } from "@react-navigation/core";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import artistData from "../assets/data/artistData";
import style from "../styles/default_style";
const artists = artistData;

const ArtistsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <FlatList
        data={artists}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              // @ts-ignore
              navigation.navigate(item.screen, {
                artist: item.artist,
                profileImage: item.profileImage,
                portfolio: item.portfolio,
                description: item.description,
              })
            }
            style={tw`p-2 pl-6 pb-8 pt-4 bg-white m-2 w-40`}
          >
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={item.profileImage}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.artist}</Text>
              <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright"
                color="white"
                type="antdesign"
                tvParallaxProperties={undefined}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ArtistsScreen;
