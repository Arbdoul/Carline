import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UnistylesTheme } from "react-native-unistyles";
import { theme } from "./src/theme";
import HomeScreen from "./src/screens/BrandScreen";
import { RootNavigator } from "./src/navigation/RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <UnistylesTheme theme={theme}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </UnistylesTheme>
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
