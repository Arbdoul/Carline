import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { createStyleSheet, theme, useStyles } from "../theme";
import { ImageSourcePropType } from "react-native";

const Brands = () => {
  const { styles, theme } = useStyles(stylesheet);
  const brands = [
    {
      id: 1,
      icon: require("../../assets/images/tesla.png") as ImageSourcePropType,
      description: "Tesla",
    },
    {
      id: 2,
      icon: require("../../assets/images/lamboghini.png") as ImageSourcePropType,
      description: "Lambogini",
    },
    {
      id: 3,
      icon: require("../../assets/images/landover.png") as ImageSourcePropType,
      description: "Land rover",
    },
    {
      id: 4,
      icon: require("../../assets/images/bmw.png") as ImageSourcePropType,
      description: "Bmw",
    },
    {
      id: 5,
      icon: require("../../assets/images/toyota.png") as ImageSourcePropType,
      description: "Toyota",
    },
    {
      id: 6,
      icon: require("../../assets/images/ford.png") as ImageSourcePropType,
      description: "Ford",
    },
    {
      id: 7,
      icon: require("../../assets/images/ferari.png") as ImageSourcePropType,
      description: "Ferari",
    },
    {
      id: 8,
      icon: require("../../assets/images/audi.png") as ImageSourcePropType,
      description: "Audi",
    },
  ];
  const half = Math.ceil(brands.length / 2);
  const brandColumns = [brands.slice(0, half), brands.slice(half)];

  return (
    <View style={styles.brandContainer}>
      {brandColumns.map((column, index) => (
        <Pressable key={index} style={styles.column}>
          {column.map((item) => (
            <View key={item.id} style={styles.brandItem}>
              <Image source={item.icon} />
              <Text>{item.description}</Text>
            </View>
          ))}
        </Pressable>
      ))}
    </View>
  );
};

export default Brands;

const stylesheet = createStyleSheet((theme) => ({
  brandContainer: {
    flex: 1,
    flexDirection: "row",
  },
  column: {
    width: "50%",
    paddingHorizontal: 0,
  },
  brandItem: {
    justifyContent: "center",
    alignItems: "center",
    height: 104,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: 16,
    marginBottom: 10,
    marginHorizontal: 24,
    marginVertical: 16,
    gap: 12,
  },
}));
