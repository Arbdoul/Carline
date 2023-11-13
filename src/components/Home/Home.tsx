import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import React from "react";
import { createStyleSheet, useStyles } from "../../theme";
import TopBrands from "./TopBrands";
import CarRecomendations from "./CarRecomendations";
import ShopByCarType from "./ShopByCarType";

const Home = () => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <View>
            <Ionicons name="location-outline" size={24} color="black" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title1}>Location</Text>
            <Text style={styles.subtitle}>San Fransisco</Text>
          </View>
        </View>
        <View style={styles.bell}>
          <EvilIcons name="bell" size={24} color="black" />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search cars"
          placeholderTextColor={theme.colors.gray400}
        />
        <EvilIcons
          style={styles.iconContainer}
          name="search"
          size={24}
          color="black"
        />
      </View>
      <TopBrands />
      <CarRecomendations />
      <ShopByCarType />
    </ScrollView>
  );
};

export default Home;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    marginTop: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    margin: 20,
  },
  textContainer: {
    marginHorizontal: 10,
  },
  title1: {
    fontWeight: "500",
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.gray500,
  },
  subtitle: {
    fontWeight: "700",
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.gray900,
  },
  bell: {
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    height: 66,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginHorizontal: 24,
    marginTop: 16,
    backgroundColor: theme.colors.gray50,
    borderColor: theme.colors.gray50,
  },
  input: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  iconContainer: {
    marginRight: 12,
  },
}));
