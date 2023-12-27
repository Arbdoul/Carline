import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  ScrollView,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { FontAwesome } from "@expo/vector-icons";
import {
  IconEngine,
  IconManualGearbox,
  IconStar,
} from "tabler-icons-react-native";
import { useNavigation } from "@react-navigation/native";
// import CarDetailScreen from "../../screens/carDetailsScreen/carDetailScreen";

interface CarItem {
  id: number;
  icon: ImageSourcePropType;
  image: ImageSourcePropType;
  manual: ImageSourcePropType;
  engine: ImageSourcePropType;
  description: string;
  price: string;
  type: string;
  hp: string;
}

const AllCarRecommendation = () => {
  const { styles, theme } = useStyles(stylesheet);
  const navigation = useNavigation<any>();

  const items: CarItem[] = [
    {
      id: 1,
      image: require("../../../assets/images/recomendedCars/audiA8.png"),
      icon: require("../../../assets/images/recomendedCars/audiIcon.png"),
      manual: require("../../../assets/images/recomendedCars/manual-gearbox.png"),
      engine: require("../../../assets/images/recomendedCars/engine.png"),
      description: "Audi A8 Quattro",
      type: "Automatic",
      hp: "540 hp",
      price: "$123,345.00",
    },
    {
      id: 2,
      image: require("../../../assets/images/recomendedCars/fordM.png"),
      icon: require("../../../assets/images/recomendedCars/fordIcon.png"),
      manual: require("../../../assets/images/recomendedCars/manual-gearbox.png"),
      engine: require("../../../assets/images/recomendedCars/engine.png"),
      description: "Ford Mustang GT",
      type: "Automatic",
      hp: "440 hp",
      price: "$23,345.00",
    },
    {
      id: 3,
      image: require("../../../assets/images/recomendedCars/jeep.png"),
      icon: require("../../../assets/images/recomendedCars/jeepIcon.png"),
      manual: require("../../../assets/images/recomendedCars/manual-gearbox.png"),
      engine: require("../../../assets/images/recomendedCars/engine.png"),
      description: "Jeep Rubicon",
      type: "Automatic",
      hp: "540 hp",
      price: "$13,345.00",
    },
    {
      id: 4,
      image: require("../../../assets/images/recomendedCars/teslaM.png"),
      icon: require("../../../assets/images/recomendedCars/teslaIcon.png"),
      manual: require("../../../assets/images/recomendedCars/manual-gearbox.png"),
      engine: require("../../../assets/images/recomendedCars/engine.png"),
      description: "Tesla Model X",
      type: "Automatic",
      hp: "640 hp",
      price: "$313,345.00",
    },
    {
      id: 5,
      image: require("../../../assets/images/recomendedCars/audiA8.png"),
      icon: require("../../../assets/images/recomendedCars/audiIcon.png"),
      manual: require("../../../assets/images/recomendedCars/manual-gearbox.png"),
      engine: require("../../../assets/images/recomendedCars/engine.png"),
      description: "Audi A8 Quattro",
      type: "Automatic",
      hp: "540 hp",
      price: "$213,345.00",
    },
    {
      id: 6,
      image: require("../../../assets/images/recomendedCars/fordM.png"),
      icon: require("../../../assets/images/recomendedCars/fordIcon.png"),
      manual: require("../../../assets/images/recomendedCars/manual-gearbox.png"),
      engine: require("../../../assets/images/recomendedCars/engine.png"),
      description: "Ford Mustang GT",
      type: "Automatic",
      hp: "540 hp",
      price: "$423,345.00",
    },
    {
      id: 7,
      image: require("../../../assets/images/recomendedCars/jeep.png"),
      icon: require("../../../assets/images/recomendedCars/jeepIcon.png"),
      manual: require("../../../assets/images/recomendedCars/manual-gearbox.png"),
      engine: require("../../../assets/images/recomendedCars/engine.png"),
      description: "Jeep Rubicon",
      type: "Automatic",
      hp: "540 hp",
      price: "$153,345.00",
    },
    {
      id: 8,
      image: require("../../../assets/images/recomendedCars/teslaM.png"),
      icon: require("../../../assets/images/recomendedCars/teslaIcon.png"),
      manual: require("../../../assets/images/recomendedCars/manual-gearbox.png"),
      engine: require("../../../assets/images/recomendedCars/engine.png"),
      description: "Tesla Model X",
      type: "Automatic",
      hp: "540 hp",
      price: "$183,345.00",
    },
  ];

  const renderItem = ({ item }: { item: CarItem }) => (
    <Pressable
      onPress={() =>
        navigation.navigate("CarDetailScreen", { title: item.description })
      }
      style={{
        padding: 16,
        backgroundColor: theme.colors.gray50,
        gap: 14,
        marginTop: 24,
        borderRadius: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 14,
        }}
      >
        <Image source={item.image} />
        <View style={{ flex: 1, gap: 8 }}>
          <Text style={styles.description}>{item.description}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Image source={item.icon} />
            <View style={styles.star}>
              <FontAwesome name="star" size={14} color={theme.colors.warning} />
              <Text
                style={{
                  ...theme.typography.bodySmall.medium,
                  color: theme.colors.gray500,
                }}
              >
                4.5
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ height: 1, backgroundColor: theme.colors.gray200 }} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <IconEngine color={theme.colors.gray500} size={16} />
            <Text
              style={{
                ...theme.typography.bodySmall.medium,
                color: theme.colors.gray500,
              }}
            >
              470 hp
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <IconManualGearbox color={theme.colors.gray500} size={16} />
            <Text
              style={{
                ...theme.typography.bodySmall.medium,
                color: theme.colors.gray500,
              }}
            >
              Automatic
            </Text>
          </View>
        </View>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </Pressable>
  );

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <FlatList
        data={items}
        style={{ paddingHorizontal: 24 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
};

export default AllCarRecommendation;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
    marginLeft: 24,
    marginRight: 24,
    padding: 16,
    borderColor: theme.colors.gray200,
    backgroundColor: theme.colors.white,
  },
  ratingContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  description: {
    ...theme.typography.bodyXLarge.bold,
    color: theme.colors.gray500,
    // marginRight: 15,
  },
  descriptionContainer: {
    margin: 29,
    marginLeft: 14,
    gap: 8,
  },
  price: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.primary,
    marginLeft: 53,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  titleContainer: {
    borderTopWidth: 1,
    borderColor: theme.colors.gray200,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  star: {
    flexDirection: "row",
    gap: 4,
  },
  //   icon: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
}));
