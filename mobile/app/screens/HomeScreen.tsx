import React from "react";
import { SafeAreaView, Button, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

import NavOptions from "../components/NavOptions";
import { default_style as style } from "../styles";

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
    image: require("../assets/caliber_boys.jpg"),
    screen: "ArtistsScreen",
  },
  {
    id: "3",
    title: "Gallery",
    image: require("../assets/shop/shop_view.jpg"),
    screen: "GalleryScreen",
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container_nav}>
      <View>
        <NavOptions items={data} />
      </View>
      <View style={style.button_apt}>
        <Button
          title="Make an appointment"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://www.schedulicity.com/scheduling/CHSW4RC"
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
