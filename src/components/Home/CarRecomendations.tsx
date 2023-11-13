import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageSourcePropType,
  FlatList,
} from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "../../theme";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../reuseComponents/Header";

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
            <Text>$123,378</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View>
        <Header title="Car Remcommendation" subtitle="view all" />
        <View>
          <FlatList
            data={carRecommendation}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
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
  carRecomendationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
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
    backgroundColor: theme.colors.gray50,
    marginLeft: 20,
    margin: 10,
  },
  image: {
    borderWidth: 1,
    borderColor: theme.colors.gray50,
    backgroundColor: theme.colors.gray50,
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
  },
  titleContiner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionTitle: {
    ...theme.typography.bodyMedium.bold,
  },

  iconContainer: {
    flexDirection: "row",
    marginLeft: 5,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailTitle: {
    ...theme.typography.bodySmall.medium,
    color: theme.colors.gray500,
  },
}));
