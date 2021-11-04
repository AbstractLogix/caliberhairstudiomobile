import React, { useRef } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import CarouselComp from "react-native-snap-carousel";
import theme from "../config/theme";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const data = [
  {
    id: 0,
    url: require("../assets/shop/chris_brian_stations.jpg"),
  },
  {
    id: 1,
    url: require("../assets/shop/chris_brian_stations2.jpg"),
  },
  { id: 2, url: require("../assets/shop/shop_view.jpg") },
  { id: 3, url: require("../assets/shop/shop_view1.jpg") },
  {
    id: 4,
    url: require("../assets/shop/shop_view2.jpg"),
  },
];

const CarouselItem = ({ item, index } : any) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={item.url}
        style={styles.image}
      />
    </View>
  );
};

const GalleryScreen = () => {
  return (
    <View>
      <Carousel />
    </View>
  );
};

const Carousel = () => {
  const isCarousel = useRef(null);

  return (
    <View>
      <CarouselComp
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingTop: "50%",
    elevation: 7,
  },
});
export default GalleryScreen;
