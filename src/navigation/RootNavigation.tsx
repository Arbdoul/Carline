import { StyleSheet, Text, View } from "react-native";
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
import { Entypo } from "@expo/vector-icons";
//import { IconSmartHome } from "@tabler/icons-react";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  const isLoadingComplete = useCachedResources();

  function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Message" component={Message} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }

  if (!isLoadingComplete) {
    return;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: "none",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{ headerShown: false }}
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

const styles = StyleSheet.create({});
