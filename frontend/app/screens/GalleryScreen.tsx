import React, { useRef } from "react";
import { View, Image, Dimensions } from "react-native";
import CarouselComp from "react-native-snap-carousel";
import styles from "../styles/default_style";

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

const CarouselItem = ({ item, index }: any) => {
  return (
    <View style={styles.container_carousel} key={index}>
      <Image source={item.url} style={styles.image_carousel} />
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
        layout="stack"
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

export default GalleryScreen;
