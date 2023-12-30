import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
  FlatList,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { IconCalendar } from "tabler-icons-react-native";
import { useNavigation } from "@react-navigation/native";
import Search from "../reuseComponents/Search";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { ScrollView } from "react-native-gesture-handler";
import { Screen } from "../screen";

interface CarItem {
  id: number;
  image: ImageSourcePropType;
  description: string;
  location: string;
  status: string;
}

const TestDrive = () => {
  const { styles, theme } = useStyles(stylesheet);
  const navigation = useNavigation<any>();

  const items: CarItem[] = [
    {
      id: 1,
      image: require("../../../assets/images/appointment/audi.png"),
      status: "Active",
      description: "Audi RS5 Coupe",
      location: "Sacramento califonia",
    },
    {
      id: 2,
      image: require("../../../assets/images/appointment/tesla.png"),
      status: "Completed",
      description: "Tesla Model X",
      location: "Commerce sir, Califonia",
    },
    {
      id: 3,
      image: require("../../../assets/images/appointment/ford.png"),
      status: "Active",
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
          color={
            UnistylesRuntime.themeName === "dark"
              ? theme.colors.white
              : theme.colors.gray400
          }
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
        backgroundColor:
          UnistylesRuntime?.themeName === "dark"
            ? theme.colors.gray800
            : theme.colors.gray50,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          borderBottomColor:
            UnistylesRuntime.themeName === "dark"
              ? theme.colors.gray700
              : theme.colors.gray200,
          marginHorizontal: 16,
          borderBottomWidth: 1,
        }}
      >
        <Image source={item.image} />
        <View>
          <Text
            style={{
              ...theme.typography.bodyLarge.bold,
              color:
                UnistylesRuntime.themeName === "dark"
                  ? theme.colors.white
                  : theme.colors.gray900,
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
          marginHorizontal: 24,
          marginTop: 16,
        }}
      >
        <View>
          <Text
            style={{
              ...theme.typography.bodySmall.medium,
              color: theme.colors.gray500,
            }}
          >
            Distance
          </Text>
          <Text
            style={{
              ...theme.typography.bodySmall.bold,
              color:
                UnistylesRuntime.themeName === "dark"
                  ? theme.colors.white
                  : theme.colors.gray900,
            }}
          >
            10km
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...theme.typography.bodySmall.medium,
              color: theme.colors.gray500,
            }}
          >
            Status
          </Text>
          <Text
            style={{
              ...theme.typography.bodySmall.bold,
              color: theme.colors.success,
            }}
          >
            {item.status}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 108.5,
          marginHorizontal: 24,
          marginTop: 16,
          paddingBottom: 16,
        }}
      >
        <View>
          <Text
            style={{
              ...theme.typography.bodySmall.medium,
              color: theme.colors.gray500,
            }}
          >
            Date
          </Text>
          <Text
            style={{
              ...theme.typography.bodySmall.bold,
              color:
                UnistylesRuntime.themeName === "dark"
                  ? theme.colors.white
                  : theme.colors.gray900,
            }}
          >
            date here
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...theme.typography.bodySmall.medium,
              color: theme.colors.gray500,
            }}
          >
            Time
          </Text>
          <Text
            style={{
              ...theme.typography.bodySmall.bold,
              color:
                UnistylesRuntime.themeName === "dark"
                  ? theme.colors.white
                  : theme.colors.gray900,
            }}
          >
            Time here
          </Text>
        </View>
      </View>
    </ScrollView>
  );
  return (
    <Screen
      statusBarProps={{
        backgroundColor: theme.colors.background,
        barStyle:
          UnistylesRuntime?.themeName === "dark"
            ? "light-content"
            : "dark-content",
        //  barStyle: `${UnistylesRuntime?.themeName ?? "dark"}-content`,
      }}
      style={styles.rootContainer}
    >
      <Search
        placeholder="Search..."
        placeholderTextColor={theme.colors.gray500}
      />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Screen>
  );
};

export default TestDrive;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));
