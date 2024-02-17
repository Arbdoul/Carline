import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { IconBrandGoogle, IconBrandApple } from "tabler-icons-react-native";

const Button = ({
  children,
  onPress,
  backgroundColor,
  borderColor,
  icon,
  alignItems,
  borderWidth,
  onPressIn,
  onPressOut,
  color,
}: any) => {
  const { styles, theme } = useStyles(stylesheet);
  //  const [isPressed, setIsPressed] = useState(false);
  return (
    <View
      style={[
        {
          borderWidth: borderWidth,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
        },
        styles.btn,
      ]}
    >
      <View style={{}}>
        <Text>{icon}</Text>
      </View>
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        // onPressOut={() => setIsPressed(false)}
        onPress={onPress}
      >
        <View
          style={{
            // flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={[{ color: color }, styles.btnText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
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
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 16,
  },
  btnText: {
    ...theme.typography.bodyLarge.bold,
    lineHeight: 24,
    marginLeft: 44,
  },
}));
