import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Feather } from "@expo/vector-icons";
import MapView from "react-native-maps";

const LocationScreen = () => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <SafeAreaView style={styles.rootContiner}>
      <View style={styles.headerContiner}>
        <View style={styles.input}>
          <Feather name="map-pin" size={22} color={theme.colors.gray400} />
          <TextInput style={styles.text}>Clay street, San Fansisco</TextInput>
        </View>
      </View>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
      </View>
    </SafeAreaView>
  );
};

export default LocationScreen;

const stylesheet = createStyleSheet((theme) => ({
  rootContiner: {
    backgroundColor: theme.colors.gray200,
  },
  headerContiner: {
    margin: 16,
    //padding: 16,
  },
  input: {
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: theme.colors.gray50,
    borderColor: theme.colors.gray50,
    padding: 16,
    flexDirection: "row",
  },
  text: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.gray900,
    marginLeft: 24,
  },
  mapContainer: {
    height: 180,
    marginTop: 16,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 16,
    overflow: "hidden",
  },
  map: {
    flex: 1,
  },
}));
