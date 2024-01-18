import "react-native-gesture-handler";
import React, { useCallback, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
// import { UnistylesTheme } from "react-native-unistyles";
import HomeScreen from "./src/screens/BrandScreen";
import { RootNavigator } from "./src/navigation/RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import "./src/theme";
import { useLoadSelectedTheme } from "./src/core";
import { PaperProvider } from "react-native-paper";
import { paperTheme } from "./src/theme";
import { storage } from "./src/core";

export default function App() {
  useLoadSelectedTheme();

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <RootNavigator />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
