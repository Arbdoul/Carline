import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { IconBrandGoogle, IconBrandApple } from "tabler-icons-react-native";

const Button = ({
  children,
  onPress,
  backgroundColor,
  borderColor,
  icon,
}: any) => {
  const { styles } = useStyles(stylesheet);
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={({ pressed }: any) => [
        {
          backgroundColor: pressed ? "white" : "#4038FF",
          //   color: pressed ? "#4038FF" : "white",
        },
        { borderColor: borderColor },
        styles.btn,
      ]}
    >
      <Text
        style={[{ color: isPressed ? "#4038FF" : "white" }, styles.btnText]}
      >
        {children}
      </Text>

      <View>{icon}</View>
    </Pressable>
  );
};

export default Button;

const stylesheet = createStyleSheet((theme) => ({
  buttonContainer: {
    marginBottom: 16,
  },

  btn: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderWidth: 1,
    marginTop: 16,
    alignItems: "center",
  },
  btnText: {
    ...theme.typography.bodyLarge.bold,
    lineHeight: 24,
  },
}));
