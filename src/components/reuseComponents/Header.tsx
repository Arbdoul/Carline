import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

const Header = ({ title, subtitle, onPress }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <View style={styles.topBrandContainer}>
        <Text style={styles.topBrandTitle}>{title}</Text>
        <Pressable onPress={onPress}>
          <Text style={styles.topBrandSubtitle}>{subtitle}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    marginTop: 24,
    marginHorizontal: 12,
  },
  topBrandContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginLeft: 16,
    // marginRight: 16,
  },
  topBrandTitle: {
    ...theme.typography.bodyXLarge.bold,
    color:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
  },
  topBrandSubtitle: {
    ...theme.typography.bodyMedium.medium,
    color:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray400
        : theme.colors.gray500,
  },
}));
