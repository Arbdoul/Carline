import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const CustomButton = ({ children, onPress }: any) => {
  const { styles } = useStyles(stylesheet);
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;

const stylesheet = createStyleSheet((theme) => ({
  buttonContainer: {
    marginBottom: 16,
  },

  btn: {
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 15,
    alignItems: "center",
  },
  btnText: {
    ...theme.typography.bodyLarge.bold,
    color: "white",
    lineHeight: 24,
  },
}));
