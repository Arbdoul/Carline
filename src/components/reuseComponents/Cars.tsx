import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

const Cars = ({ onPress }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  const items = [
    {
      id: 1,
      icon: require("../../../assets/images/toyotaa.png") as ImageSourcePropType,
      description: "Totota",
    },
    {
      id: 2,
      icon: require("../../../assets/images/bmww.png") as ImageSourcePropType,
      description: "BMW",
    },
    {
      id: 3,
      icon: require("../../../assets/images/Ferrarii.png") as ImageSourcePropType,
      description: "Ferrari",
    },
    // {
    //   id: 4,
    //   icon: require("../../../assets/images/landrover.png") as ImageSourcePropType,
    //   description: "Land over",
    // },
    // {
    //   id: 5,
    //   icon: require("../../../assets/images/audii.png") as ImageSourcePropType,
    //   description: "Toyota",
    // },
    // {
    //   id: 6,
    //   icon: require("../../../assets/images/ford.png") as ImageSourcePropType,
    //   description: "Ford",
    // },
    // {
    //   id: 7,
    //   icon: require("../../../assets/images/ferari.png") as ImageSourcePropType,
    //   description: "Ferari",
    // },
    // {
    //   id: 8,
    //   icon: require("../../../assets/images/audi.png") as ImageSourcePropType,
    //   description: "Audi",
    // },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.container}>
      <View>
        <View style={styles.iconContainer}>
          <Image source={item.icon} />
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Cars;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
    marginHorizontal: 12,
    paddingTop: 16,
    paddingHorizontal: 29.17,
    paddingBottom: 29.17,
    justifyContent: "center",
    alignItems: "center",
    borderColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray600
        : theme.colors.gray200,
    backgroundColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.white,
  },
  description: {
    ...theme.typography.bodySmall.bold,
    color:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
    marginTop: 12,
  },
  iconContainer: {
    borderRadius: 10,
    // borderWidth: 1,
    padding: 8,
    backgroundColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray700
        : theme.colors.gray900,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
}));
