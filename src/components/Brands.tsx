import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { createStyleSheet, theme, useStyles } from "../theme";
import { ImageSourcePropType } from "react-native";
import { FlatGrid, SimpleGrid } from "react-native-super-grid";

const Brands = () => {
  const { width } = useWindowDimensions();
  const { styles, theme } = useStyles(stylesheet);
  const [selectedBrand, setSelectedBrand] = useState<number | null>(null);
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
    {
      id: 9,
      icon: require("../../assets/images/ferari.png") as ImageSourcePropType,
      description: "Ferari",
    },
    {
      id: 10,
      icon: require("../../assets/images/audi.png") as ImageSourcePropType,
      description: "Audi",
    },
  ];
  const half = Math.ceil(brands.length / 2);
  const brandColumns = [brands.slice(0, half), brands.slice(half)];

  const handlePressed = (brandId: number) => {
    setSelectedBrand(brandId);
  };

  // <View style={styles.brandContainer}>
  return (
    <SimpleGrid
      listKey={"brands"}
      data={brands}
      spacing={16}
      renderItem={({ item }) => (
        <View
          style={{
            borderColor: theme.colors.gray300,
            borderWidth: 1,
            borderRadius: 16,
            alignItems: "center",
            paddingVertical: 16,
            gap: 12,
          }}
        >
          <Image source={item.icon} />
          <Text>{item.description}</Text>
        </View>
        // <View
        //   style={[
        //     styles.brandItem,
        //     selectedBrand === item.id && styles.selectedBrand,
        //   ]}
        // >
        //   <Pressable
        //     onPress={() => handlePressed(item.id)}
        //     key={item.id}
        //     style={({ pressed }) => [pressed && styles.pressed]}
        //   >
        //     <Image source={item.icon} />
        //     <Text>{item.description}</Text>
        //   </Pressable>
        // </View>
      )}
    />
  );
  {
    /* {brandColumns.map((column, index) => (
        <View style={styles.column}>
          <Pressable key={index}>
            {column.map((item) => (
              <View
                style={[
                  styles.brandItem,
                  selectedBrand === item.id && styles.selectedBrand,
                ]}
              >
                <Pressable
                  onPress={() => handlePressed(item.id)}
                  key={item.id}
                  style={({ pressed }) => [pressed && styles.pressed]}
                >
                  <Image source={item.icon} />
                  <Text>{item.description}</Text>
                </Pressable>
              </View>
            ))}
          </Pressable>
        </View>
      ))} */
  }
};

export default Brands;

const stylesheet = createStyleSheet((theme) => ({
  brandContainer: {
    // flex: 1,
    //   flexDirection: "row",
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
    // borderColor: theme.colors.primary,
    padding: 16,
    marginBottom: 10,
    marginHorizontal: 24,
    marginVertical: 16,
    gap: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  selectedBrand: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
}));
