import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import ResetPassword from "../screens/auth/ResetPassword";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";
import VerificationCode from "../screens/auth/VerificationCode";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const { theme } = useStyles();
  return (
    <View>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            // headerShown: false,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            // headerShown: false,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            // headerShown: false,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCode}
          options={{
            // headerShown: false,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default AuthNavigator;

const stylesheet = StyleSheet.create({});
