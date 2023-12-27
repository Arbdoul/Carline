import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useCachedResources } from "../theme/CatchedResources";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/BrandScreen";
import Home from "../components/Home/Home";
import Favorite from "../components/Home/Favorite";
import Message from "../components/Home/Message";
import Profile from "../components/Home/Profile";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import BrandScreen from "../screens/BrandScreen";
import {
  IconSmartHome,
  IconHeart,
  IconShareOff,
  IconDotsVertical,
  IconArrowNarrowLeft,
} from "tabler-icons-react-native";
import LocationScreen from "../components/Home/LocationScreen";
import { useStyles } from "react-native-unistyles";
import AllCarRecommendation from "../components/Home/AllCarRecommendation";
import CarDetailScreen from "../screens/CarDetailScreen";
import PaymentScreen from "../screens/PaymentScreen";
import InspectionAndDeliveryScreen from "../screens/InspectionAndDeliveryScreen";
import AddressScreen from "../screens/AddressScreen";
import PurchaseScreen from "../screens/PurchaseScreen";
import PaymentMethodScreen from "../screens/PaymentMethodScreen";
import ReceiptPayment from "../screens/ReceiptPaymentScreen";
import ReceiptPaymentScreen from "../screens/ReceiptPaymentScreen";
import TrackingScreen from "../screens/TrackingScreen";
import Appointment from "../components/profile/Appointment";
import TestDrive from "../components/profile/TestDrive";
import Vouchers from "../components/profile/Vouchers";
import Settings from "../components/profile/Settings";
import LinkAccount from "../components/profile/LinkAccount";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
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
            backgroundColor: theme.colors.white,
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
          },

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const RootNavigation = () => {
  const isLoadingComplete = useCachedResources();
  const { theme } = useStyles();

  if (!isLoadingComplete) {
    return;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        animation: "none",
      }}
    >
      <Stack.Screen
        name="BrandScreen"
        component={BrandScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{
          headerTitle: "Choose your location",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.gray200,
          },
        }}
      />
      <Stack.Screen
        name="AllCarRecommendation"
        component={AllCarRecommendation}
        options={{
          headerTitle: "Car Recommendations",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="CarDetailScreen"
        component={CarDetailScreen}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.gray200,
          },
        }}
      />
      <Stack.Screen
        name="PurchaseScreen"
        component={PurchaseScreen}
        options={{
          // title: "Payment methods",
          headerTitleAlign: "center",
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="InspectionAndDeliveryScreen"
        component={InspectionAndDeliveryScreen}
        options={{
          // title: "Payment methods",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="Address"
        component={AddressScreen}
        options={{
          // title: "Payment methods",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          // title: "Payment methods",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="PaymentMethodScreen"
        component={PaymentMethodScreen}
        options={{
          title: "Payment method",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="ReceiptPayment"
        component={ReceiptPaymentScreen}
        options={{
          // title: "Payment method",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          // headerLeft: ()=>(

          // ),
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      />
      <Stack.Screen
        name="TrackingScreen"
        component={TrackingScreen}
        options={{
          title: "Tracking",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          // headerLeft: ()=>(

          // ),
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="Appointment"
        component={Appointment}
        options={{
          title: "Appointment",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          // headerLeft: ()=>(

          // ),
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="TestDrive"
        component={TestDrive}
        options={{
          title: "Test drive",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          // headerLeft: ()=>(

          // ),
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="Vouchers"
        component={Vouchers}
        options={{
          title: "Vouchers",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          // headerLeft: ()=>(

          // ),
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="Setting"
        component={Settings}
        options={{
          title: "Settings",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          // headerLeft: ()=>(

          // ),
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="LinkAccount"
        component={LinkAccount}
        options={{
          title: "Link Account",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          // headerLeft: ()=>(

          // ),
          headerTitleStyle: {
            ...theme.typography.bodyXLarge.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

const stylesheet = StyleSheet.create({});
