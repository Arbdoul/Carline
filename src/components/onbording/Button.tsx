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
    // <Pressable
    //   onPress={onPress}
    //   onPressIn={onPressIn}
    //   onPressOut={onPressOut}
    //   // onPressOut={() => setIsPressed(false)}
    //   style={({ pressed }) => [
    //     {
    //       // backgroundColor: pressed ? theme.colors.white : theme.colors.primary,
    //       // color: pressed ? "#4038FF" : "white",
    //     },
    //     {
    //       borderWidth: borderWidth,
    //       borderColor: borderColor,
    //       backgroundColor: backgroundColor,
    //     },
    //     styles.btn,
    //   ]}
    // >
    //   <View
    //     style={{
    //       flexDirection: "row",
    //       gap: 52,
    //     }}
    //   >
    //     <View>{icon}</View>
    //     <View style={{ alignItems: "center" }}>
    //       <Text style={[{ color: color }, styles.btnText]}>{children}</Text>
    //     </View>
    //   </View>
    // </Pressable>
    <Pressable onPress={onPress} style={styles.btn}>
      <View>{icon}</View>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  );
};

export default Button;

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

  // btn: {
  //   borderRadius: 16,
  //   paddingHorizontal: 16,
  //   paddingVertical: 15,
  //   //borderWidth: 1,
  //   marginTop: 16,
  //   flexDirection: "row",
  //   marginHorizontal: 24,
  // },
  // btnText: {
  //   ...theme.typography.bodyLarge.bold,
  //   //lineHeight: 24,
  //   paddingHorizontal: 16,
  // },
}));
