import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "../../theme";

const Header = ({ title, subtitle }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <View style={styles.topBrandContainer}>
        <Text style={styles.topBrandTitle}>{title}</Text>
        <Pressable>
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
  },
  topBrandContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
  },
  topBrandTitle: {
    ...theme.typography.bodyXLarge.bold,
  },
  topBrandSubtitle: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.gray500,
  },
}));
