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
      <View style={{}}>{icon}</View>
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
    // backgroundColor: theme.colors.gray500,
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
    // color: "white",
    lineHeight: 24,
    marginLeft: 44,
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
