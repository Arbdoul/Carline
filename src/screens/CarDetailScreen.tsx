import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
  Image,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CarDetails from "../components/carDetails/CarDetails";
import Details from "../components/carDetails/Details";
import Features from "../components/carDetails/Features";
import Design from "../components/carDetails/Design";
import PriceMap from "../components/carDetails/PriceMap";
import {
  IconHeart,
  IconDashboard,
  IconShare3,
  IconEngine,
  IconClock,
} from "tabler-icons-react-native";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import {
  Tabs,
  MaterialTabBar,
  MaterialTabItem,
} from "react-native-collapsible-tab-view";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

interface DetailItems {
  // id: number;
  designImage5: ImageSourcePropType;
}
interface Performance {
  id: number;
  icon: any;
  performanceHeader: any;
  PerformanceBody: string;
}

const CarDetailScreen = ({ navigation, route }: any) => {
  const { styles, theme } = useStyles(stylesheet);

  const { title } = route.params;

  const items: DetailItems = {
    // id: 1,
    designImage5: require("../../assets/images/design/designImage5.png"),
  };

  const performance: Performance[] = [
    {
      id: 1,
      icon: (
        <IconEngine
          size={24}
          color={
            UnistylesRuntime.themeName === "dark"
              ? theme.colors.white
              : theme.colors.secondary
          }
        />
      ),
      performanceHeader: "355 hp",
      PerformanceBody: "Horse power",
    },
    {
      id: 2,
      icon: (
        <IconDashboard
          size={24}
          color={
            UnistylesRuntime.themeName === "dark"
              ? theme.colors.white
              : theme.colors.secondary
          }
        />
      ),
      performanceHeader: "369 lb-ft hp",
      PerformanceBody: "Torque",
    },
    {
      id: 3,
      icon: (
        <IconClock
          size={24}
          color={
            UnistylesRuntime.themeName === "dark"
              ? theme.colors.white
              : theme.colors.secondary
          }
        />
      ),
      performanceHeader: "5.6 sec",
      PerformanceBody: "0-60mph",
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerStyle: {
        backgroundColor: theme.colors.secondary,
      },
      headerRight: () => (
        <View style={[styles.headerIcon]}>
          <Pressable>
            <IconHeart size={24} color={theme.colors.gray500} />
          </Pressable>
          <Pressable>
            <IconShare3 size={24} color={theme.colors.gray500} />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);
  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.box}>
          <Text style={styles.text}>{title}</Text>
          <Image source={items.designImage5} />
        </View>
        <View style={styles.performanceContainer}>
          {performance.map((item) => (
            <View style={styles.performanceItem} key={item.id}>
              <Text>{item.icon}</Text>
              <Text style={styles.performanceHeader}>
                {item.performanceHeader}
              </Text>
              <Text style={styles.performanceBody}>{item.PerformanceBody}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.rootContainer}>
      <CarDetails />

      <Tabs.Container
        renderHeader={Header}
        renderTabBar={(props) => (
          <MaterialTabBar
            labelStyle={{
              ...theme.typography.bodyMedium.medium,
              textTransform: "capitalize",
              color: theme.colors.gray500,
            }}
            contentContainerStyle={{
              backgroundColor:
                UnistylesRuntime.themeName === "dark"
                  ? theme.colors.gray900
                  : theme.colors.white,
            }}
            activeColor={theme.colors.primary}
            indicatorStyle={{ backgroundColor: theme.colors.primary }}
            {...props}
          />
        )}
      >
        <Tabs.Tab name="Details">
          <Details />
        </Tabs.Tab>
        <Tabs.Tab name="Features">
          <Features />
        </Tabs.Tab>
        <Tabs.Tab name="Design">
          <Design />
        </Tabs.Tab>
        <Tabs.Tab name="PriceMap">
          <PriceMap />
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

export default CarDetailScreen;

const stylesheet = createStyleSheet((theme) => ({
  headerContainer: {},
  box: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
    marginTop: -20,
  },
  text: {
    ...theme.typography.h4,
    color: theme.colors.white,
  },
  rootContainer: {
    flex: 1,
    backgroundColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray900
        : theme.colors.white,
  },

  headerIcon: {
    flexDirection: "row",
    gap: 16,
    marginRight: 24,
  },
  performanceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.gray50,
  },
  performanceItem: {
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  performanceHeader: {
    ...theme.typography.bodySmall.regular,
    color:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
  },
  performanceBody: {
    ...theme.typography.bodySmall.regular,
    color: theme.colors.gray500,
  },
}));
