import React from "react";
import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

interface NavItem {
  id: string;
  title: string;
  image: {};
  screen: string;
}

interface NavItemProps {
  items: NavItem[];
}

const NavOptions = ({ items }: NavItemProps) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={items}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          // @ts-ignore
          onPress={() => navigation.navigate(item.screen)} // need to take list of additional params can be ANY list
          style={tw`p-2 pl-6 pb-8 pt-4 bg-white m-2 w-40`}
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
              tvParallaxProperties={undefined}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
