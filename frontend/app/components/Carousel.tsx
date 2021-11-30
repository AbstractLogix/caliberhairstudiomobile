import React, { useRef } from "react";
import { View, Image, Dimensions } from "react-native";
import CarouselComp from "react-native-snap-carousel";
import styles from "../styles/default_style";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselItem = ({ item, index }: any) => {
  return (
    <View style={styles.container_carousel} key={index}>
      <Image style={styles.image_small} source={item.url} />
    </View>
  );
};

const Carousel = (data: any) => {
  const isCarousel = useRef(null);

  return (
    <View>
      <CarouselComp
        layout="default"
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

export default Carousel;
