import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { theme } from "../theme";

const CustomButton = ({ children, onPress }: any) => {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 16,
  },

  // finishButton: {
  //   width: "90%",
  //   height: 65,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginHorizontal: 24,
  //   marginVertical: 16,
  //   padding: 16,
  //   borderRadius: 16,
  //   borderWidth: 1,
  //   gap: 10,
  //   backgroundColor: theme.colors.primary,
  // },
  // buttonText: {
  //   ...theme.typography.bodyLarge.bold,
  //   color: theme.colors.secondary50,
  // },
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
    //lineHeight: 165,
  },
});
