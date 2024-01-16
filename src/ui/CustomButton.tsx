import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Button, TextInput } from "react-native-paper";
import { IconBrandGoogle } from "tabler-icons-react-native";

const CustomButton = ({ children, onPress, left }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <Pressable>
      <Button
        mode="contained"
        onPress={onPress}
        theme={{ roundness: 4 }}
        contentStyle={{ paddingVertical: 8 }}
        labelStyle={{ ...theme.typography.bodyLarge.bold }}
      >
        {children}
      </Button>
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
    paddingVertical: 15,
    alignItems: "center",
  },
  btnText: {
    ...theme.typography.bodyLarge.bold,
    color: "white",
    lineHeight: 24,
  },
}));
