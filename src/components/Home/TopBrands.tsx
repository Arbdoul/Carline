import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { ImageSourcePropType } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Header from "../reuseComponents/Header";
import Cars from "../reuseComponents/Cars";

const TopBrands = () => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <SafeAreaView>
      <Header title="Top brands" subtitle="view all" />
      <Cars />
    </SafeAreaView>
  );
};

export default TopBrands;

const stylesheet = createStyleSheet((theme) => ({}));
