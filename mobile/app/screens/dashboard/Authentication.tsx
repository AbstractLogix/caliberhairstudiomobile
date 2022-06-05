import * as React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Pressable,
} from "react-native";
import default_style from "../../styles/default_style";
import theme from "../../config/theme";
import { useNavigation } from "@react-navigation/native";

const Authentication = ({ route }: any) => {
  // initial params from navigator
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const { signIn } = route.params; // descruturing

  return (
    <View style={default_style.container}>
      <Image
        style={default_style.image_medium}
        source={require("../../assets/caliber_logo_500x500.png")}
      ></Image>
      <View style={default_style.inputView}>
        <TextInput
          style={default_style.textInput}
          placeholder="Email Address"
          value={email}
          placeholderTextColor={theme.colors.black}
          onChangeText={setEmail}
        />
      </View>
      <View style={default_style.inputView}>
        <TextInput
          secureTextEntry
          style={default_style.textInput}
          placeholder="Password"
          value={password}
          placeholderTextColor={theme.colors.black}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={default_style.button_forgot} onPress={() => {}}>
        <Text style={default_style.textInput}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={default_style.button_large}
        onPress={() => signIn(email, password)}
      >
        <Text style={default_style.textInput}>Login</Text>
      </TouchableOpacity>

      <Pressable
        style={default_style.button_large}
        onPress={() => setModalVisible(true)}
      >
        <Text style={default_style.textInput}>Signup</Text>
      </Pressable>
    </View>
  );
};

// error util func
const errorToString = (error: any, errorStr: string) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(
    errorStr +
      " failed due to error code: " +
      errorCode +
      ". Error message: " +
      errorMessage
  );
  Alert.alert(errorStr);
};

export default Authentication;
