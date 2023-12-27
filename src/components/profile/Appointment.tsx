import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { IconCalendar, IconClock } from "tabler-icons-react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Search from "../reuseComponents/Search";

interface CarItem {
  id: number;
  image: ImageSourcePropType;
  clock: any;
  calender: any;
  description: string;
  location: string;
}

const Appointment = ({ navigation }: any) => {
  const { styles, theme } = useStyles(stylesheet);

  const items: CarItem[] = [
    {
      id: 1,
      image: require("../../../assets/images/appointment/audi.png"),
      calender: <IconCalendar size={24} />,
      clock: <IconClock />,
      description: "Audi RS5 Coupe",
      location: "Sacramento califonia",
    },
    {
      id: 2,
      image: require("../../../assets/images/appointment/tesla.png"),
      calender: <IconCalendar size={24} />,
      clock: <IconClock />,
      description: "Tesla Model X",
      location: "Commerce sir, Califonia",
    },
    {
      id: 3,
      image: require("../../../assets/images/appointment/ford.png"),
      calender: <IconCalendar size={24} />,
      clock: <IconClock />,
      description: "Ford Mustang GT",
      location: "Commerce sir, Califonia",
    },
  ];
  useLayoutEffect(() => {
    navigation.setOptions({
      //  title: "Favorites",
      headerRight: () => (
        <IconCalendar
          size={24}
          style={{ marginRight: 20, paddingTop: 20, paddingBottom: 18 }}
        />
      ),
    });
  }, []);

  const renderItem = ({ item }: { item: CarItem }) => (
    <ScrollView
      style={{
        marginHorizontal: 24,
        marginTop: 24,
        borderRadius: 16,
        backgroundColor: theme.colors.gray50,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          borderBottomColor: theme.colors.gray200,
          marginHorizontal: 16,
          borderBottomWidth: 1,
        }}
      >
        <Image source={item.image} />
        <View>
          <Text
            style={{
              ...theme.typography.bodyLarge.bold,
              color: theme.colors.gray900,
            }}
          >
            {item.description}
          </Text>
          <Text
            style={{
              ...theme.typography.bodySmall.medium,
              color: theme.colors.gray400,
              marginTop: 4,
            }}
          >
            {item.location}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 108.5,
          alignItems: "center",
          padding: 16,
        }}
      >
        <View>
          <Text
            style={{
              ...theme.typography.bodySmall.medium,
              color: theme.colors.gray400,
              marginTop: 12,
            }}
          >
            Date
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 6,
              marginTop: 4,
              alignItems: "center",
            }}
          >
            <IconCalendar size={16} color={theme.colors.primary} />
            <Text
              style={{
                ...theme.typography.bodySmall.bold,
                color: theme.colors.gray900,
                marginTop: 4,
              }}
            >
              date here
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              ...theme.typography.bodySmall.medium,
              color: theme.colors.gray400,
              marginTop: 12,
            }}
          >
            Time
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 6,
              marginTop: 4,
              alignItems: "center",
            }}
          >
            <IconClock size={16} color={theme.colors.primary} />
            <Text
              style={{
                ...theme.typography.bodySmall.bold,
                color: theme.colors.gray900,
                marginTop: 4,
              }}
            >
              time here
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
  return (
    <View style={styles.rootcontainer}>
      <Search placeholder="Search..." />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Appointment;

const stylesheet = createStyleSheet((theme) => ({
  rootcontainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
}));
