import { useStyles, createStyleSheet } from "react-native-unistyles";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import * as Font from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import React, { PropsWithChildren } from "react";
import Brands from "../components/Brands";
import CustomButton from "../ui/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const BrandScreen = () => {
  const navigation = useNavigation<any>();
  const { styles, theme } = useStyles(stylesheet);
  return (
    <SafeAreaView style={styles.safeAreacontainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
          <Pressable>
            <Text style={styles.pressedText}>Skip</Text>
          </Pressable>
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Which brand of car do you prefer?</Text>
            <Text style={styles.description}>
              Select all that you are intrested in
            </Text>
          </View>
          <View style={styles.brandContainer}>
            <Brands />
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={() => navigation.navigate("HomeScreen")}>
            Finish
          </CustomButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BrandScreen;

const stylesheet = createStyleSheet((theme) => ({
  safeAreacontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    ...theme.typography.h4,
  },
  description: {
    ...theme.typography.bodyLarge.medium,
    color: theme.colors.gray500,
  },
  headerContainer: {
    marginTop: 29,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },

  titleContainer: {
    gap: 8,
    marginTop: 16,
    paddingHorizontal: 24,
  },
  pressedText: {
    fontWeight: "700",
    fontSize: theme.typography.bodyLarge.bold.fontSize,
    lineHeight: 26.4,
    color: theme.colors.primary,
  },
  scrollViewContainer: {
    flex: 1,
  },
  brandContainer: {
    marginTop: 32,
    marginBottom: 56,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    left: 24,
    right: 24,
  },
}));
