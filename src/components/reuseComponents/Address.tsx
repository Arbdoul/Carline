import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { IconCheckbox } from "tabler-icons-react-native";

interface ImageProp {
  map: ImageSourcePropType;
}

const Address = ({ header, address, address1 }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  const [active, setActive] = useState(false);

  const image: ImageProp = {
    map: require("../../../assets/images/address/map.png"),
  };

  const handlePressIn = () => {
    setActive(true);
    // console.log("pressed");
  };

  const handlePressOut = () => {
    setActive(false);
  };
  return (
    <View>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[active ? styles.active : null, styles.addressContainer]}
      >
        <Image source={image.map} />
        <View>
          <View style={styles.home}>
            <Text style={styles.homeHeaderText}>{header}</Text>
            <Pressable
              onPressIn={handlePressIn}
              style={[active ? styles.iconActive : null]}
            >
              <IconCheckbox size={16} />
            </Pressable>
          </View>
          <View>
            <Text style={styles.homeBodyText}>{address}</Text>
            <Text style={styles.homeBodyText}> {address1}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Address;

const stylesheet = createStyleSheet((theme) => ({
  home: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 230,
  },

  addressContainer: {
    flexDirection: "row",
    gap: 16,
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 16,
    padding: 16,
    borderColor: theme.colors.gray200,
    borderWidth: 1,
  },

  homeHeaderText: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.gray900,
  },
  homeBodyText: {
    ...theme.typography.bodySmall.medium,
    color: theme.colors.gray500,
  },
  active: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 16,
  },
  iconActive: {
    backgroundColor: theme.colors.primary,
  },
}));
