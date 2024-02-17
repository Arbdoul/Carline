import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import CarRecomendations from "../../components/Home/CarRecomendations";
import ShopByCarType from "../../components/Home/ShopByCarType";
import TopBrands from "../../components/Home/TopBrands";
import Search from "../../components/reuseComponents/Search";
import { Screen } from "../../components/screen";

const Home = () => {
  const { styles, theme } = useStyles(stylesheet);
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("LocationScreen");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Screen
        backgroundColor={theme.colors.background}
        preset="scroll"
        statusBarProps={{
          //  backgroundColor: theme.colors.background,
          barStyle:
            UnistylesRuntime?.themeName === "dark"
              ? "light-content"
              : "dark-content",
          //  barStyle: `${UnistylesRuntime?.themeName ?? "dark"}-content`,
        }}
        style={styles.container}
      >
        <View style={styles.headerContainer}>
          <Pressable onPress={handlePress} style={styles.locationContainer}>
            <View
              style={{
                padding: 10,
                borderRadius: 12,
                //borderWidth: 1,
                backgroundColor:
                  UnistylesRuntime.themeName === "dark"
                    ? theme.colors.gray800
                    : theme.colors.gray50,
              }}
            >
              <Ionicons
                name="location-outline"
                size={24}
                color={
                  UnistylesRuntime.themeName === "dark"
                    ? theme.colors.white
                    : theme.colors.gray900
                }
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title1}>Location</Text>
              <Text style={styles.subtitle}>San Fransisco</Text>
            </View>
          </Pressable>
          <View style={styles.bell}>
            <EvilIcons
              name="bell"
              size={24}
              color={
                UnistylesRuntime.themeName === "dark"
                  ? theme.colors.white
                  : theme.colors.gray900
              }
            />
          </View>
        </View>
        <Search
          placeholder="Search..."
          placeholderTextColor={
            UnistylesRuntime.themeName === "dark"
              ? theme.colors.gray500
              : theme.colors.gray50
          }
        />

        <TopBrands />
        <CarRecomendations />
        <ShopByCarType />
      </Screen>
    </SafeAreaView>
  );
};

export default Home;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    // backgroundColor: theme.colors.white,
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
    alignItems: "center",
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
    color:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
  },
  bell: {
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 12,
    //borderWidth: 1,
    backgroundColor:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.gray50,
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
