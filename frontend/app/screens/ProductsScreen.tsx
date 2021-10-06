import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const products = [
  {
    id: "1",
    title: "Claymore",
    image: require("../assets/products/claymore_web_224x224.png"), // instead of require could be uri
    screen: "ProductScreen",
  },
  {
    id: "2",
    title: "Dry_Grooming",
    image: require("../assets/products/dry_grooming_cream_224x224.png"),
    screen: "ProductScreen",
  },
  {
    id: "3",
    title: "Pomade",
    image: require("../assets/products/pomade-web_224x224.png"),
    screen: "ProductScreen",
  },
  {
    id: "4",
    title: "Primer",
    image: require("../assets/products/primer_224x224.png"),
    screen: "ProductScreen",
  },
];

const ProductsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)} // need typescript solution to this
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40`}
          >
            <SafeAreaView>
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
            </SafeAreaView>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
