import * as React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Formik } from "formik";
import default_style from "../../styles/default_style";
import theme from "../../config/theme";

const Authentication = ({ navigation, route }: any) => {
  const { signIn, signUp } = route.params; // descruturing

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={({ email, password }) =>
        /* signIn(email, password) */ console.log(email + password)
      }
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={default_style.container}>
          <Image
            style={default_style.image_medium}
            source={require("../../assets/caliber_logo_500x500.png")}
          />
          <View style={default_style.inputView}>
            <TextInput
              style={default_style.textInput}
              placeholder="Email Address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />
          </View>
          <View style={default_style.inputView}>
            <TextInput
              style={default_style.textInput}
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={default_style.button_forgot}
            onPress={() => {}}
          >
            <Text style={default_style.textInput}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={default_style.button_large}
            onPress={() => handleSubmit}
          >
            <Text style={default_style.textInput}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={default_style.button_large}
            onPress={() => {
              const circuit = false;
              Alert.prompt(
                "Confirm Password",
                "Pick a strong password",
                (input: string) => {
                  if (input === values.password)
                    console.log(
                      values.email + values.password
                    ) /* signUp(values.email, values.password) */;
                }
              );
            }}
          >
            <Text style={default_style.textInput}>Signup</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Authentication;
