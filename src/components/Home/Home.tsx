import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import TopBrands from "./TopBrands";
import CarRecomendations from "./CarRecomendations";
import ShopByCarType from "./ShopByCarType";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const { styles, theme } = useStyles(stylesheet);
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("LocationScreen");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={styles.locationContainer}>
           <Ionicons name="location-outline" size={24} color="black" />
             <View style={styles.textContainer}>
              <Text style={styles.title1}>Location</Text>
              <Text style={styles.subtitle}>San Fransisco</Text>
             </View>
        <View style={styles.bell}>
          <EvilIcons name="bell" size={24} color="black" />
        </View>
      </View> */}
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Pressable onPress={handlePress} style={styles.locationContainer}>
            <View>
              <Ionicons name="location-outline" size={24} color="black" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title1}>Location</Text>
              <Text style={styles.subtitle}>San Fransisco</Text>
            </View>
          </Pressable>
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
            // style={styles.iconContainer}
            name="search"
            size={24}
            color="black"
          />
        </View>
        <TopBrands />
        <CarRecomendations />
        <ShopByCarType />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
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
