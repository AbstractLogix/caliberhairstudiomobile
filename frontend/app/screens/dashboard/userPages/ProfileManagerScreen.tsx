import React from "react";
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Button,
} from "react-native";
import style from "../../../styles/default_style";
import artists from "../../../assets/data/artistData";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const data = artists;

const ProfileManagerScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.container_nav}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              // @ts-ignore
              onPress={deleteProfile} // need to take list of additional params can be ANY list
              style={tw`p-2 pl-6 pb-8 pt-4 bg-white m-2 w-40`}
            >
              <View>
                <Image
                  style={{ width: 120, height: 120, resizeMode: "contain" }}
                  source={item.profileImage}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
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
          <Button title="Add Profile" onPress={addProfile}></Button>
          <Button title="Update Profile" onPress={updateProfile}></Button>
        </View>
      </View>
    </View>
  );
};

const addProfile = () => {
  console.log("add profile");
};

const deleteProfile = () => {
  console.log("delete profile");
};

const updateProfile = () => {
  console.log("update profile");
};

export default ProfileManagerScreen;
