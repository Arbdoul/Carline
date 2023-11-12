import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "../../theme";

const CarRecomendations = () => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <View style={styles.carRecomendationContainer}>
        <Text style={styles.carRecomendationTitle}>Car Recomendations</Text>
        <Pressable>
          <Text style={styles.carRecomendationSubtitle}>view all</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CarRecomendations;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    marginTop: 24,
  },
  carRecomendationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
  },
  carRecomendationTitle: {
    ...theme.typography.bodyXLarge.bold,
  },
  carRecomendationSubtitle: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.gray500,
  },
}));
