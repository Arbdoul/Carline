import { View, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import PurchaseMethod from "../components/buy/PurchaseMethod";

import { createStyleSheet, useStyles } from "react-native-unistyles";

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
    backgroundColor: theme.colors.white,
  },
}));
