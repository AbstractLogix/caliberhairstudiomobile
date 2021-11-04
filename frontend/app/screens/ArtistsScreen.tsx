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
import theme from "../config/theme";

const data = [
  {
    id: "1",
    title: "Chris",
    image: require("../assets/profile/chris/chris_profile.jpg"),
  },
  {
    id: "2",
    title: "Brian",
    image: require("../assets/profile/brian/brian_profile.jpg"),
  },
  {
    id: "3",
    title: "Marcelo",
    image: require("../assets/profile/marcelo/marcelo_profile.jpg"),
  },
];

const ArtistsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40`}
          >
            <View>
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
