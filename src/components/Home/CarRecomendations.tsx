import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageSourcePropType,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../reuseComponents/Header";
import { useNavigation } from "@react-navigation/native";

const CarRecomendations = () => {
  const carRecommendation = [
    {
      id: 1 as number,
      carIcon:
        require("../../../assets/images/audisvg.jpg") as ImageSourcePropType,
      favoriteIcon:
        require("../../../assets/images/heart.png") as ImageSourcePropType,
      carImage:
        require("../../../assets/images/audiImage.png") as ImageSourcePropType,
      carTitel: "Audi A8 Quattro" as string,
      carRating: "4.5" as string,
      carDescriptionIcon:
        require("../../../assets/images/group.png") as ImageSourcePropType,
      carDescription: "Automatic" as string,
      carPrice: "$123,378" as string,
    },
    {
      id: 2 as number,
      carIcon:
        require("../../../assets/images/audisvg.jpg") as ImageSourcePropType,
      favoriteIcon:
        require("../../../assets/images/heart.png") as ImageSourcePropType,
      carImage:
        require("../../../assets/images/audiImage.png") as ImageSourcePropType,
      carTitel: "Audi A8 Quattro" as string,
      carRating: "4.5" as string,
      carDescriptionIcon:
        require("../../../assets/images/group.png") as ImageSourcePropType,
      carDescription: "Automatic" as string,
      carPrice: "$123,378" as string,
    },
    {
      id: 3 as number,
      carIcon:
        require("../../../assets/images/audisvg.jpg") as ImageSourcePropType,
      favoriteIcon:
        require("../../../assets/images/heart.png") as ImageSourcePropType,
      carImage:
        require("../../../assets/images/audiImage.png") as ImageSourcePropType,
      carTitel: "Audi A8 Quattro" as string,
      carRating: "4.5" as string,
      carDescriptionIcon:
        require("../../../assets/images/group.png") as ImageSourcePropType,
      carDescription: "Automatic" as string,
      carPrice: "$123,378" as string,
    },
    {
      id: 4 as number,
      carIcon:
        require("../../../assets/images/audisvg.jpg") as ImageSourcePropType,
      favoriteIcon:
        require("../../../assets/images/heart.png") as ImageSourcePropType,
      carImage:
        require("../../../assets/images/audiImage.png") as ImageSourcePropType,
      carTitel: "Audi A8 Quattro" as string,
      carRating: "4.5" as string,
      carDescriptionIcon:
        require("../../../assets/images/group.png") as ImageSourcePropType,
      carDescription: "Automatic" as string,
      carPrice: "$123,378" as string,
    },
    {
      id: 5 as number,
      carIcon:
        require("../../../assets/images/audisvg.jpg") as ImageSourcePropType,
      favoriteIcon:
        require("../../../assets/images/heart.png") as ImageSourcePropType,
      carImage:
        require("../../../assets/images/audiImage.png") as ImageSourcePropType,
      carTitel: "Audi A8 Quattro" as string,
      carRating: "4.5" as string,
      carDescriptionIcon:
        require("../../../assets/images/group.png") as ImageSourcePropType,
      carDescription: "Automatic" as string,
      carPrice: "$123,378" as string,
    },
    {
      id: 6 as number,
      carIcon:
        require("../../../assets/images/audisvg.jpg") as ImageSourcePropType,
      favoriteIcon:
        require("../../../assets/images/heart.png") as ImageSourcePropType,
      carImage:
        require("../../../assets/images/audiImage.png") as ImageSourcePropType,
      carTitel: "Audi A8 Quattro" as string,
      carRating: "4.5" as string,
      carDescriptionIcon:
        require("../../../assets/images/group.png") as ImageSourcePropType,
      carDescription: "Automatic" as string,
      carPrice: "$123,378" as string,
    },
    {
      id: 7 as number,
      carIcon:
        require("../../../assets/images/audisvg.jpg") as ImageSourcePropType,
      favoriteIcon:
        require("../../../assets/images/heart.png") as ImageSourcePropType,
      carImage:
        require("../../../assets/images/audiImage.png") as ImageSourcePropType,
      carTitel: "Audi A8 Quattro" as string,
      carRating: "4.5" as string,
      carDescriptionIcon:
        require("../../../assets/images/group.png") as ImageSourcePropType,
      carDescription: "Automatic" as string,
      carPrice: "$123,378" as string,
    },
    {
      id: 8 as number,
      carIcon:
        require("../../../assets/images/audisvg.jpg") as ImageSourcePropType,
      favoriteIcon:
        require("../../../assets/images/heart.png") as ImageSourcePropType,
      carImage:
        require("../../../assets/images/audiImage.png") as ImageSourcePropType,
      carTitel: "Audi A8 Quattro" as string,
      carRating: "4.5" as string,
      carDescriptionIcon:
        require("../../../assets/images/group.png") as ImageSourcePropType,
      carDescription: "Automatic" as string,
      carPrice: "$123,378" as string,
    },
    {
      id: 9 as number,
      carIcon:
        require("../../../assets/images/audisvg.jpg") as ImageSourcePropType,
      favoriteIcon:
        require("../../../assets/images/heart.png") as ImageSourcePropType,
      carImage:
        require("../../../assets/images/audiImage.png") as ImageSourcePropType,
      carTitel: "Audi A8 Quattro" as string,
      carRating: "4.5" as string,
      carDescriptionIcon:
        require("../../../assets/images/group.png") as ImageSourcePropType,
      carDescription: "Automatic" as string,
      carPrice: "$123,378" as string,
    },
  ];
  const { styles, theme } = useStyles(stylesheet);
  const [verticalList, setVerticalList] = useState(false);
  const navigation = useNavigation<any>();

  const handlePress = () => {
    // setVerticalList(!verticalList);
    navigation.navigate("AllCarRecommendation");
  };

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.imageContainer}>
        <View>
          <Image style={styles.image} source={item.carImage} />
        </View>
        <View style={styles.overlayContainer}>
          <Image source={item.carIcon} />
          <Image style={styles.heartIcon} source={item.favoriteIcon} />
        </View>
        <View style={styles.description}>
          <View style={styles.titleContiner}>
            <Text style={styles.descriptionTitle}>Audi A8 Quattro</Text>
            <View style={styles.iconContainer}>
              <FontAwesome name="star" size={24} color={theme.colors.warning} />
              <Text
                style={{
                  ...theme.typography.bodySmall.medium,
                  color:
                    UnistylesRuntime?.themeName === "dark"
                      ? theme.colors.gray400
                      : theme.colors.gray500,
                }}
              >
                4.5
              </Text>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>
              <Image
                source={
                  require("../../../assets/images/group.png") as ImageSourcePropType
                }
              />
              Automatic
            </Text>
            <Text style={styles.amount}>$123,378.00</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View>
        <View style={styles.header}>
          <Header
            title="Car Remcommendation"
            subtitle="view all"
            onPress={handlePress}
          />
        </View>
        <View>
          {verticalList ? (
            <View>
              {/* {carRecommendation.map((item, index) => (
                <View key={index}>
                  <View style={styles.imageContainer}>
                    <View>
                      <Image style={styles.image} source={item.carImage} />
                    </View>
                    <View style={styles.overlayContainer}>
                      <Image source={item.carIcon} />
                      <Image
                        style={styles.heartIcon}
                        source={item.favoriteIcon}
                      />
                    </View>
                    <View style={styles.description}>
                      <View style={styles.titleContiner}>
                        <Text style={styles.descriptionTitle}>
                          Audi A8 Quattro
                        </Text>
                        <View style={styles.iconContainer}>
                          <FontAwesome
                            name="star"
                            size={24}
                            color={theme.colors.warning}
                          />
                          <Text>4.5</Text>
                        </View>
                      </View>

                      <View style={styles.detailsContainer}>
                        <Text style={styles.detailTitle}>
                          <Image
                            source={
                              require("../../../assets/images/group.png") as ImageSourcePropType
                            }
                          />
                          Automatic
                        </Text>
                        <Text style={styles.amount}>$123,378.00</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))} */}
            </View>
          ) : (
            <FlatList
              data={carRecommendation}
              keyExtractor={(item: any) => item.id.toString()}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default CarRecomendations;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    marginTop: 24,
  },
  header: {
    marginHorizontal: 12,
  },
  carRecomendationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 24,
    marginRight: 24,
    margin: 10,
  },
  carRecomendationTitle: {
    ...theme.typography.bodyXLarge.bold,
  },
  carRecomendationSubtitle: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.gray500,
  },
  imageContainer: {
    position: "relative",
    borderRadius: 20,
    padding: 20,
    overflow: "hidden",
    width: 228,
    height: 270,
    backgroundColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.gray50,
    marginLeft: 20,
    margin: 10,
  },
  image: {
    // borderWidth: 1,
    borderColor: theme.colors.gray50,
    backgroundColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.gray50,
    borderTopWidth: 30,
    width: 174,
    height: 116,
    top: 40,
    left: 7,
  },
  overlayContainer: {
    position: "absolute",
    top: "10%",
    left: "10%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heartIcon: {
    position: "absolute",
    top: 0,
    right: "-350%",
  },

  overlayIcon: {
    justifyContent: "space-between",
  },
  description: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 50,
    gap: 9,
  },
  titleContiner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionTitle: {
    ...theme.typography.bodyMedium.bold,
    color:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginLeft: 5,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  detailTitle: {
    ...theme.typography.bodySmall.medium,
    color: theme.colors.gray500,
  },
  amount: {
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.primary,
  },
}));
