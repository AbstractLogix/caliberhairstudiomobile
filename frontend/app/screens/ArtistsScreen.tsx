import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import artistData from "../assets/data/artistData";
import theme from "../config/theme";

const artists = artistData;

const ArtistsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={artists}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              // @ts-ignore
              navigation.navigate(item.screen, {
                artist: item.artist,
                profileImage: item.profileImage,
                description: item.description,
              })
            }
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40`}
          >
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={item.profileImage} // could also be { uri: item.image }
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.artist}</Text>
              <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ArtistsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
