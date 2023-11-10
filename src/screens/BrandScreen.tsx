import { useStyles, createStyleSheet } from "../theme";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import * as Font from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import Brands from "../components/Brands";
import CustomButton from "../ui/CustomButton";

const BrandScreen = () => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.headerContainer}>
          <View>
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
          <Pressable>
            <Text style={styles.pressedText}>Skip</Text>
          </Pressable>
        </View>

        <Text style={styles.title}>Which brand of car do you prefer?</Text>
        <Text style={styles.description}>
          Select all that you are intrested in
        </Text>

        <Brands />

        <CustomButton>Finish</CustomButton>
      </View>
    </ScrollView>
  );
};

export default BrandScreen;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    // backgroundColor: theme.colors.blue,
  },
  textContainer: {
    margin: 80,
    marginHorizontal: 10,
  },
  title: {
    ...theme.typography.h4,
  },
  description: {
    fontWeight: "500",
    fontSize: theme.typography.bodyLarge.medium.fontSize,
    letterSpacing: theme.typography.bodyLarge.medium.letterSpacing,
    lineHeight: 26.4,
    color: theme.colors.secondary200,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pressedText: {
    fontWeight: "700",
    fontSize: theme.typography.bodyLarge.bold.fontSize,
    lineHeight: 26.4,
    color: theme.colors.primary,
  },
}));
