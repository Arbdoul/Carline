import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
} from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const Cars = ({ onPress }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  const items = [
    {
      id: 1,
      icon: require("../../../assets/images/toyotaa.png") as ImageSourcePropType,
      description: "Totota",
    },
    {
      id: 2,
      icon: require("../../../assets/images/bmww.png") as ImageSourcePropType,
      description: "BMW",
    },
    {
      id: 3,
      icon: require("../../../assets/images/Ferrarii.png") as ImageSourcePropType,
      description: "Ferrari",
    },
    {
      id: 4,
      icon: require("../../../assets/images/landrover.png") as ImageSourcePropType,
      description: "Land over",
    },
    {
      id: 5,
      icon: require("../../../assets/images/audii.png") as ImageSourcePropType,
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
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={item.icon} />
      </View>
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
  container: {
    marginTop: 16,
    width: 98,
    height: 104,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
    marginLeft: 24,
    marginRight: 24,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.gray200,
    backgroundColor: theme.colors.white,
  },
  description: {
    ...theme.typography.bodySmall.bold,
    color: theme.colors.gray900,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: theme.colors.gray900,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
}));
