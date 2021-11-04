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

import theme from "../config/theme";
import productData from "../assets/data/productData";

const products = productData;

const ProductsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              // @ts-ignore
              navigation.navigate(item.screen, {
                title: item.title,
                description: item.description,
                count: item.count,
                image: item.image,
              })
            }
            style={tw`p-2 pl-6 pb-8 pt-4 bg-white m-2 w-40`}
          >
            <SafeAreaView>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={item.image}
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

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.colors.extraExtraLightGray,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
