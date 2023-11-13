import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "../../theme";
import TopBrands from "./TopBrands";
import Header from "../reuseComponents/Header";

const ShopByCarType = () => {
  const { styles, theme } = useStyles(stylesheet);
  return <Header title="Shop By Car Type" subtitle="view all" />;
};

export default ShopByCarType;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    marginTop: 24,
  },
  topBrandContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
  },
  topBrandTitle: {
    ...theme.typography.bodyXLarge.bold,
  },
  topBrandSubtitle: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.gray500,
  },
}));
