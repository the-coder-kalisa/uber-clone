import { View, Text, Image, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
const HomeScreen = () => {
  return (
    <SafeAreaView
      style={tw`bg-white h-full android:pt-[${StatusBar.currentHeight}px]`}
    >
      <View style={tw`p-5`}>
          <Image style={tw.style(``, {height: 100, width: 100, resizeMode: "contain"})} source={{uri: "https://links.papareact.com/gzs"}}/>
          <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
