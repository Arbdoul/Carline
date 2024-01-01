import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ImageSourcePropType,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  IconDotsVertical,
  IconSearch,
  IconCheckbox,
} from "tabler-icons-react-native";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import CustomButton from "../ui/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Address from "../components/reuseComponents/Address";
import Search from "../components/reuseComponents/Search";
import { Screen } from "../components/screen";

interface ImageProp {
  map: ImageSourcePropType;
}

const AddressScreen = ({ navigation }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  const [active, setActive] = useState(false);

  const image: ImageProp = {
    map: require("../../assets/images/address/map.png"),
  };

  const handlePressIn = () => {
    setActive(true);
    // console.log("pressed");
  };

  const handlePressOut = () => {
    setActive(false);
  };
  const handlePress = () => {
    navigation.navigate("Payment");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Address",
      //   headerStyle: {
      //     backgroundColor: theme.colors.secondary,
      //   },
      headerRight: () => (
        <View>
          <Pressable>
            <IconDotsVertical size={24} color={theme.colors.gray500} />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <>
      <Screen
        style={styles.rootContainer}
        // backgroundColor={theme.colors.background}
        statusBarProps={{
          backgroundColor: theme.colors.background,
          barStyle:
            UnistylesRuntime?.themeName === "dark"
              ? "light-content"
              : "dark-content",
          //  barStyle: `${UnistylesRuntime?.themeName ?? "dark"}-content`,
        }}
      >
        <Search
          placeholder="Find an address..."
          placeholderTextColor={
            UnistylesRuntime.themeName === "dark"
              ? theme.colors.gray500
              : theme.colors.gray400
          }
        />

        <Address
          header="Home"
          address="Jackson Street, San Francisco,"
          address1="California 94109"
        />
        <Address
          header="Office"
          address="Union St, San Francisco"
          address1="California 94109"
        />

        <Address
          header="University"
          address="University Of San Francisco, San"
          address1="Francisco, California 94118"
        />
      </Screen>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={handlePress}>Confirm address</CustomButton>
      </View>
    </>
  );
};

export default AddressScreen;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  textInput: {
    borderRadius: 16,
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 12,
    backgroundColor: theme.colors.gray50,
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
  mapImage: {
    flexDirection: "row",
  },
  home: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 230,
  },

  homeHeaderText: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.gray900,
  },
  homeBodyText: {
    ...theme.typography.bodySmall.medium,
    color: theme.colors.gray500,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    left: 24,
    right: 24,
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
