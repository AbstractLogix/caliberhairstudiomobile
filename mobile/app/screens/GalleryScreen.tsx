import React, { useRef } from "react";
import { View, Image, Dimensions } from "react-native";
import CarouselComp from "react-native-snap-carousel";
import galleryData from "../assets/data/galleryData";
import { default_style as style } from "../styles";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const data = galleryData;

const CarouselItem = ({ item, index }: any) => {
  return (
    <View style={style.container_carousel} key={index}>
      <Image source={item.url} style={style.image_carousel} />
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
