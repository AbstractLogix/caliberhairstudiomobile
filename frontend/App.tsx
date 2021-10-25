import React from "react";
import { StyleSheet } from "react-native";
import NavigationStack from "./app/screens/NavigationStack";


export default function App() {

  return (
    <NavigationStack></NavigationStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "dodgerblue",
    //alignItems: "center",
    //justifyContent: "center",
  },
});
