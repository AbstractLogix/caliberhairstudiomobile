import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ProductsScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>All the products will be listed here :D</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
