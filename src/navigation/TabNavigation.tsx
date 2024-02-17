import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";
import { StyleSheet } from "react-native";
import { useStyles } from "react-native-unistyles";
import { IconHeart, IconSmartHome } from "tabler-icons-react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorite from "../screens/Home/Favorite";
import Home from "../screens/Home/Home";
import Message from "../screens/Home/Message";
import Profile from "../screens/Home/Profile";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          paddingTop: 8,
          height: 64,
          //   paddingBottom: 8,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarLabelStyle: {
          ...theme.typography.bodySmall.bold,
          marginBottom: 6,
          // marginTop: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // <Entypo name="home" size={size} color={color} />
            <IconSmartHome size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          // headerShown: false,
          // headerTitle: "Favorites",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },

          tabBarIcon: ({ color, size }) => (
            <IconHeart size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-reply-text-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // headerShown: false,
          // headerTitle: "Favorites",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
            color: "white",
          },

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const stylesheet = StyleSheet.create({});
