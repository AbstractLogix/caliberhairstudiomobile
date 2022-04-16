import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import galleryData from "../../../assets/data/galleryData";
import style from "../../../styles/default_style";

const data = galleryData;

const PhotoGalleryManagerScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.container_nav}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={deletePhoto}
              style={tw`p-2 pl-6 pb-8 pt-4 bg-white m-2 w-40`}
            >
              <View>
                <Image
                  style={{ width: 120, height: 120, resizeMode: "contain" }}
                  source={item.url}
                />
                <Icon
                  style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                  name="delete"
                  color="red"
                  type="antdesign"
                  tvParallaxProperties={undefined}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Button title="Add Photo" onPress={addPhoto}></Button>
          <Button title="Change Order" onPress={updatePhotoOrder}></Button>
        </View>
      </View>
    </View>
  );
};

const addPhoto = () => {
  console.log("add photo");
};

const deletePhoto = () => {
  Alert.alert("Caution", "Are you sure you want to delete this Photo?", [
    {
      text: "Yes",
      onPress: () => {
        console.log("delete photo");
      },
    },
    { text: "No" },
  ]);
};

const updatePhotoOrder = () => {
  console.log("change order");
};

export default PhotoGalleryManagerScreen;
