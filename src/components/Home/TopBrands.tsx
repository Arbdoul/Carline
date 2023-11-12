import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { ImageSourcePropType } from "react-native";

const TopBrands = () => {
  const topBrands = [
    {
      id: 1,
      icon: require("../../../assets/images/tesla.png") as ImageSourcePropType,
      description: "Tesla",
    },
    {
      id: 2,
      icon: require("../../../assets/images/lamboghini.png") as ImageSourcePropType,
      description: "Lambogini",
    },
    {
      id: 3,
      icon: require("../../../assets/images/landover.png") as ImageSourcePropType,
      description: "Land rover",
    },
    {
      id: 4,
      icon: require("../../../assets/images/bmw.png") as ImageSourcePropType,
      description: "Bmw",
    },
    {
      id: 5,
      icon: require("../../../assets/images/toyota.png") as ImageSourcePropType,
      description: "Toyota",
    },
    {
      id: 6,
      icon: require("../../../assets/images/ford.png") as ImageSourcePropType,
      description: "Ford",
    },
    {
      id: 7,
      icon: require("../../../assets/images/ferari.png") as ImageSourcePropType,
      description: "Ferari",
    },
    {
      id: 8,
      icon: require("../../../assets/images/audi.png") as ImageSourcePropType,
      description: "Audi",
    },
  ];

  const renderItem = ({ item }: any) => (
    <View>
      <Image source={item.icon} />
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View>
      <View>
        <Text>TopBrands</Text>
        <Pressable>
          <Text>view all</Text>
        </Pressable>
      </View>
      <FlatList
        data={topBrands}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

export default TopBrands;

const styles = StyleSheet.create({});
