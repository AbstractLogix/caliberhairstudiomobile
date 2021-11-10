import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import style from "../../../styles/default_style";

const ProfileManagerScreen = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button_large}>
        <Text>Add profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button_large}>
        <Text>Edit profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button_large}>
        <Text>Delete profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileManagerScreen;
