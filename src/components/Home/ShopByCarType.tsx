import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "../../theme";
import Header from "../reuseComponents/Header";
import Cars from "../reuseComponents/Cars";

const ShopByCarType = () => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <>
      <Header title="Shop By Car Type" subtitle="view all" />
      <Cars />
      <View style={styles.container}>
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
      </View>
    </>
  );
};

export default ShopByCarType;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    position: "relative",
    borderRadius: 16,
    borderWidth: 1,
    height: 158,
    width: 350,
    marginLeft: 24,
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
    left: 193,
  },
}));
