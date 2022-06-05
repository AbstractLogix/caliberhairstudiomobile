import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Image } from "react-native";
import style from "../../styles/default_style";

const LogoTitle = () => {
  const navigation = useNavigation();

  return (
    //@ts-ignore
    <Pressable onLongPress={() => navigation.navigate("LoginNavigation")}>
      <Image
        style={style.logo_navigation}
        source={require("../../assets/caliber_logo_150x150.png")}
      />
    </Pressable>
  );
};

export default LogoTitle;
