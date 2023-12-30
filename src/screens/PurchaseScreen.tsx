import { View, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import PurchaseMethod from "../components/buy/PurchaseMethod";

import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { Screen } from "../components/screen";

const PurchaseScreen = ({ navigation }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Purchase methods",
    });
  }, [navigation]);
  return (
    <View style={styles.rootContainer}>
      <PurchaseMethod />
    </View>
  );
};

export default PurchaseScreen;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    backgroundColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray900
        : theme.colors.white,
  },
}));
