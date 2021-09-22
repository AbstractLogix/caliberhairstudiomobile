import React from "react";
import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
const data = [
  {
    id: "1",
    title: "Products",
    image: require("/home/oscar/Dev/caliberhairstudio/frontend/assets/products/wash_224x224.png"), // instead of require could be uri
    screen: "ProductsScreen",
  },
  {
    id: "2",
    title: "Artists",
    image: require("/home/oscar/Dev/caliberhairstudio/frontend/assets/profile/chris_profile.jpg"),
    screen: "ArtistsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={item.image} // could also be { uri: item.image } // but i dont know how to do it without require for local resources
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
