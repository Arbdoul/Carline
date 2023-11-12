import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "../../theme";
import { FontAwesome } from "@expo/vector-icons";

const CarRecomendations = () => {
  const carRecommendation = [{}];
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <View style={styles.carRecomendationContainer}>
        <Text style={styles.carRecomendationTitle}>Car Recomendations</Text>
        <Pressable>
          <Text style={styles.carRecomendationSubtitle}>view all</Text>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <View>
          <Image
            style={styles.image}
            source={
              require("../../../assets/images/audiImage.png") as ImageSourcePropType
            }
          />
        </View>
        <View style={styles.overlayContainer}>
          <Image
            source={
              require("../../../assets/images/audisvg.jpg") as ImageSourcePropType
            }
          />
          <Image
            style={styles.heartIcon}
            source={
              require("../../../assets/images/heart.png") as ImageSourcePropType
            }
          />
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
    </View>
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
