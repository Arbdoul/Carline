import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
  Image,
  FlatList,
} from "react-native";
import React, { useLayoutEffect, useState, useRef, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  IconArrowNarrowLeft,
  IconDotsVertical,
  IconEngine,
  IconManualGearbox,
  IconHeart,
  IconSortDescending,
} from "tabler-icons-react-native";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { FontAwesome } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import Sort from "../favorite/Sort";
import CustomBottomSheet from "../bottomSheet/CustomBottomSheet";
import { Screen } from "../screen";

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
const Favorite = () => {
  const { styles, theme } = useStyles(stylesheet);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const [backgroundColor, setBackgroundColor] = useState(theme.colors.white);

  const handlePresentModal = () => {
    bottomSheetRef.current?.present();
    setBackgroundColor(theme.colors.gray900);
  };
  const handleClose = () => bottomSheetRef.current?.close();
  const navigation = useNavigation();

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

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Favorites",
      headerRight: () => (
        <IconDotsVertical size={24} style={{ marginRight: 20 }} />
      ),

      headerLeft: () => (
        <Pressable onPress={navigation.goBack}>
          <IconArrowNarrowLeft size={24} style={{ marginLeft: 24 }} />
        </Pressable>
      ),
    });
  }, []);

  const renderItem = ({ item }: { item: CarItem }) => (
    <>
      <Pressable
        // onPress={() =>
        //   // navigation.navigate("CarDetailScreen", { title: item.description })
        // }
        style={{
          padding: 16,
          backgroundColor:
            UnistylesRuntime?.themeName === "dark"
              ? theme.colors.gray800
              : theme.colors.gray50,
          gap: 14,
          marginTop: 24,
          borderRadius: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 6,
              padding: 8,
              backgroundColor: theme.colors.primary,
            }}
          >
            <Text
              style={{
                ...theme.typography.bodyXSmall.bold,
                color: theme.colors.white,
              }}
            >
              Free test drive
            </Text>
          </View>
          <IconHeart size={24} color={theme.colors.errorDark} />
        </View>
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
                <FontAwesome
                  name="star"
                  size={14}
                  color={theme.colors.warning}
                />
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
        <View
          style={[
            styles.titleContainer,
            { height: 1, backgroundColor: theme.colors.gray200 },
          ]}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
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
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
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
    </>
  );
  return (
    // <></>
    <Screen
      backgroundColor={theme.colors.background}
      statusBarProps={{
        backgroundColor: theme.colors.background,
        barStyle:
          UnistylesRuntime?.themeName === "dark"
            ? "light-content"
            : "dark-content",
        //  barStyle: `${UnistylesRuntime?.themeName ?? "dark"}-content`,
      }}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          marginTop: 24,
          marginHorizontal: 24,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            ...theme.typography.bodyXLarge.bold,
            color:
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray50
                : theme.colors.gray900,
          }}
        >
          10 cars
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text
            style={{
              ...theme.typography.bodyXLarge.bold,
              color: theme.colors.gray500,
            }}
          >
            Sort
          </Text>
          <Pressable onPress={handlePresentModal}>
            <IconSortDescending size={24} color={theme.colors.gray500} />
          </Pressable>
        </View>
      </View>
      <FlatList
        data={items}
        style={{ paddingHorizontal: 24 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />

      <CustomBottomSheet ref={bottomSheetRef} handleClose={handleClose} />
    </Screen>
  );
};

export default Favorite;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    //  backgroundColor: {},
  },
  container: {
    flex: 1,
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
    marginLeft: 24,
    marginRight: 24,
    padding: 16,
    borderColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.gray200,
    backgroundColor: theme.colors.white,
  },
  ratingContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  description: {
    ...theme.typography.bodyXLarge.bold,
    color:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray500,
    // marginRight: 15,
  },
  descriptionContainer: {
    margin: 29,
    marginLeft: 14,
    gap: 8,
  },
  price: {
    ...theme.typography.bodyLarge.bold,
    color:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.primary,
    marginLeft: 53,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  titleContainer: {
    borderTopWidth: 1,
    borderColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.gray200,
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
}));
