import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { theme } from "../theme";

const CustomButton = ({ children }: any) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.finishButton}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 16,
  },
  finishButton: {
    width: "90%",
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    marginVertical: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    gap: 10,
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.secondary50,
  },
});
