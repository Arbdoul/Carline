import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "../../theme";

const Cars = () => {
  const { styles, theme } = useStyles(stylesheet);
  const items = [
    {
      id: 1,
      icon: require("../../../assets/images/tesla.png") as ImageSourcePropType,
      description: "Tesla",
    },
    {
      id: 2,
      icon: require("../../../assets/images/lamboghini.png") as ImageSourcePropType,
      description: "Lambogini",
    },
    {
      id: 3,
      icon: require("../../../assets/images/landover.png") as ImageSourcePropType,
      description: "Land rover",
    },
    {
      id: 4,
      icon: require("../../../assets/images/bmw.png") as ImageSourcePropType,
      description: "Bmw",
    },
    {
      id: 5,
      icon: require("../../../assets/images/toyota.png") as ImageSourcePropType,
      description: "Toyota",
    },
    {
      id: 6,
      icon: require("../../../assets/images/ford.png") as ImageSourcePropType,
      description: "Ford",
    },
    {
      id: 7,
      icon: require("../../../assets/images/ferari.png") as ImageSourcePropType,
      description: "Ferari",
    },
    {
      id: 8,
      icon: require("../../../assets/images/audi.png") as ImageSourcePropType,
      description: "Audi",
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.iconContainer}>
      <Image source={item.icon} />
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Cars;

const stylesheet = createStyleSheet((theme) => ({
  iconContainer: {
    marginTop: 16,
    width: 98,
    height: 104,
    borderRadius: 16,
    borderWidth: 2,
    gap: 12,
    marginLeft: 24,
    marginRight: 24,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.gray200,
    backgroundColor: theme.colors.gray200,
  },
  description: {
    ...theme.typography.bodySmall.bold,
    color: theme.colors.gray900,
  },
}));
