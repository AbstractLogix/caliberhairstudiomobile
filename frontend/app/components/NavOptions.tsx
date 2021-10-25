import React from "react";
import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Products",
    image: require("../assets/products/wash_224x224.png"), // instead of require could be uri
    screen: "ProductsScreen",
  },
  {
    id: "2",
    title: "Artists",
    image: require("../assets/profile/chris_profile.jpg"),
    screen: "ArtistsScreen",
  },
  {
    id: "3",
    title: "Gallery",
    image: require("../assets/profile/chris_profile.jpg"),
    screen: "GalleryScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          // @ts-ignore
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={item.image} // could also be { uri: item.image }
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
