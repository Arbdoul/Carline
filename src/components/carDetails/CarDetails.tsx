import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import CustomButton from "../../ui/CustomButton";
import { Tabs } from "react-native-collapsible-tab-view";
import { useNavigation } from "@react-navigation/native";

const CarDetails = ({ activeTab }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("PurchaseScreen");
  };

  const Header = () => {
    return <View style={styles.header} />;
  };
  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.bottomBarContainer}>
          <View style={styles.bottomBar}>
            <View>
              <Text style={styles.price}>Price(Cash)</Text>
              <Text style={styles.money}>$80,063</Text>
            </View>
            <View style={styles.button}>
              <CustomButton onPress={handlePress}>Buy</CustomButton>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default CarDetails;

const stylesheet = createStyleSheet((theme) => ({
  header: {
    height: 250,
    width: "100%",
    backgroundColor: "#2196f3",
  },
  rootContainer: {
    // flex: 1,
    justifyContent: "space-between",
    marginTop: 16,
    marginLeft: 8,
  },
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  activeText: {
    textAlign: "center",
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.primary,
  },
  inActiveText: {
    color: theme.colors.gray500,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
    padding: 8,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 24,
  },
  bottomBarContainer: {
    position: "absolute",
    height: 90,
    width: "100%",
    zIndex: 1,
    bottom: -710,
    left: 0,
    right: 24,
    backgroundColor:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray900
        : theme.colors.white,
  },
  button: {
    width: 190,
    marginRight: 24,
    paddingTop: 12,
  },
  price: {
    ...theme.typography.bodySmall.medium,
    color: theme.colors.gray500,
    paddingTop: 12,
  },
  money: {
    ...theme.typography.h4,
    color:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
  },
}));
