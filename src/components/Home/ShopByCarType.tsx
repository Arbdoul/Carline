import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageSourcePropType,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Header from "../reuseComponents/Header";
import Cars from "../reuseComponents/Cars";

const ShopByCarType = () => {
  const { styles, theme } = useStyles(stylesheet);
  const [listCar, setListCars] = useState(false);

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

  const handlePress = () => {
    setListCars(!listCar);
  };
  return (
    <>
      <Header
        title="Shop By Car Type"
        subtitle="view all"
        onPress={handlePress}
      />
      {/* {listCar ? (
        <View>
          {items.map((item, index) => (
            <View key={index} style={styles.listContainer}>
              <View style={styles.iconContainer}>
                <Image source={item.icon} />
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Cars />
      )} */}

      {/* <View style={styles.container}>
        <Text style={styles.title}>Test drive in your area</Text>
        <Text style={styles.body}>
          Drive from your home or {"\n"} a carline hub
        </Text>

        <View>
          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonText}>view Cars</Text>
          </Pressable>
        </View>
        <View style={styles.image}>
          <Image source={require("../../../assets/images/car.png")} />
        </View>
      </View> */}
    </>
  );
};

export default ShopByCarType;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    height: 158,
    margin: 24,
    backgroundColor: theme.colors.gray900,
  },
  title: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.white,
    marginTop: 20,
    marginLeft: 20,
  },
  body: {
    ...theme.typography.bodySmall.medium,
    color: theme.colors.white,
    margin: 20,
  },
  buttonContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.white,
    width: 106,
    height: 32,
    padding: 16,
    left: 24,
    marginTop: -10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    position: "absolute",
    ...theme.typography.bodySmall.bold,
    color: theme.colors.white,
  },
  image: {
    position: "absolute",
    top: 25,
    left: 205,
  },
  description: {
    ...theme.typography.bodySmall.bold,
    color: theme.colors.gray900,
  },
  iconContainer: {
    // width: 40,
    width: 300,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: theme.colors.gray900,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
  listContainer: {
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
}));
