import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { ImageSourcePropType } from "react-native";
import { createStyleSheet, useStyles } from "../../theme";
import Header from "../reuseComponents/Header";
import Cars from "../reuseComponents/Cars";

const TopBrands = () => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View>
      <Header title="Top brands" subtitle="view all" />
      <Cars />
    </View>
  );
};

export default TopBrands;

const stylesheet = createStyleSheet((theme) => ({}));
