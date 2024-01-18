import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import Button from "../onbording/Button";
import CustomInput from "../reuseComponents/CustomInput";
import { useForm, Controller } from "react-hook-form";
import { IconMail } from "tabler-icons-react-native";
import CustomButton from "../../ui/CustomButton";

const ResetPassword = ({ navigation }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  const { control, handleSubmit } = useForm();

  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };
  const onResetPress = () => {
    navigation.navigate("VerificationCode");
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 48,
        }}
      >
        <Image source={require("../../../assets/images/auth/reset.png")} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 32,
          marginTop: 32,
        }}
      >
        <Text
          style={{
            ...theme.typography.h4,
            color:
              UnistylesRuntime.themeName === "dark"
                ? theme.colors.gray50
                : theme.colors.gray900,
          }}
        >
          Can't sign in?
        </Text>
        <Text
          style={{
            ...theme.typography.bodyLarge.medium,
            color: theme.colors.gray500,
          }}
        >
          Enter the email associated with your account, and Carline will send
          you a link to reset your password.
        </Text>
      </View>
      <View style={{ marginHorizontal: 24 }}>
        <CustomInput
          control={control}
          name="email"
          placeholder="Email"
          rules={{ required: "Email is required" }}
          placeholderTextColor={theme.colors.gray500}
          left="email"
        />
      </View>
      <View style={{ marginTop: 161, marginHorizontal: 24 }}>
        <CustomButton
          onPress={handleSubmit(onResetPress)}
          backgroundColor={theme.colors.primary}
          color={theme.colors.white}
        >
          Reset Password
        </CustomButton>
        <View style={{ marginTop: 16 }} />
        <CustomButton
          backgroundColor={theme.colors.white}
          borderRadius={1}
          borderColor={theme.colors.white}
          color={theme.colors.primary}
          onPress={handleSignIn}
        >
          Return to Sign In
        </CustomButton>
      </View>
    </View>
  );
};

export default ResetPassword;

const stylesheet = createStyleSheet((theme) => ({}));
