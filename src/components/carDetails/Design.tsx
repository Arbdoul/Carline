import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Tabs } from "react-native-collapsible-tab-view";

interface DetailItems {
  // id: number;
  designImage1: ImageSourcePropType;
  designImage2: ImageSourcePropType;
  designImage3: ImageSourcePropType;
  designImage4: ImageSourcePropType;
}

const Design = () => {
  const { styles, theme } = useStyles(stylesheet);

  const items: DetailItems = {
    // id: 1,
    designImage1: require("../../../assets/images/design/designImage1.png"),
    designImage2: require("../../../assets/images/design/designImage2.png"),
    designImage3: require("../../../assets/images/design/designImage3.png"),
    designImage4: require("../../../assets/images/design/designImage4.png"),
  };
  const { width } = useWindowDimensions();

  return (
    <Tabs.ScrollView style={styles.rootContainer}>
      <Text style={styles.title}>Powerful and sporty - The exterior</Text>
      <View>
        <Text style={styles.body}>For an sportier look opt for optional</Text>
        <Text style={styles.body}>Design Packages</Text>
      </View>

      <View style={styles.imageContainer}>
        <View style={styles.designImages}>
          <Image source={items.designImage1} />

          <View style={styles.designImageRow}>
            <Image source={items.designImage2} />
            <Image source={items.designImage3} />
          </View>
        </View>

        <Image
          style={styles.buttomImage}
          source={items.designImage4}
          resizeMode="stretch"
        />
      </View>
    </Tabs.ScrollView>
  );
};

export default Design;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 24,
  },
  title: {
    ...theme.typography.bodyXLarge.bold,
    color: theme.colors.gray900,
  },
  body: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.gray500,
  },
  imageContainer: {
    // display: "flex",
    // justifyContent: "center",
    flex: 1,
    alignContent: "center",
  },
  designImages: {
    flexDirection: "row",
    //flex: 1,
    //   justifyContent: "stretch",
    marginTop: 16,
    gap: 16,
  },
  designImageRow: {
    gap: 16,
    flex: 1,
  },
  buttomImage: {
    marginTop: 16,
    //flex: 1,
  },
}));
