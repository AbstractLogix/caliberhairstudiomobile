import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import style from "../../../styles/default_style";

const PhotoGalleryManagerScreen = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button_large}>
        <Text>Add photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button_large}>
        <Text>Remove photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button_large}>
        <Text>Edit arrangement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhotoGalleryManagerScreen;
