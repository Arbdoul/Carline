const styles = StyleSheet.create({});

import React from "react";
import { useForm } from "react-hook-form";
import { Image, StyleSheet, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import CustomButton from "../../ui/CustomButton";

const VerificationCode = ({ navigation }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  const { control, handleSubmit } = useForm();

  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };
  const onResetPress = () => {
    navigation.navigate("SignIn");
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
        <Image
          source={require("../../../assets/images/auth/verification.png")}
        />
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
          Almost there!
        </Text>
        <Text
          style={{
            ...theme.typography.bodyLarge.medium,
            color: theme.colors.gray500,
          }}
        >
          Check your email inbox and input the verification code to verify your
          account.
        </Text>
      </View>
      <View style={{ marginHorizontal: 24, marginTop: 24 }}>
        <OtpInput
          numberOfDigits={5}
          focusColor={theme.colors.primary}
          focusStickBlinkingDuration={500}
          onTextChange={(text) => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          theme={
            {
              //  containerStyle: styles.container,
              //  inputsContainerStyle: styles.inputsContainer,
              //  pinCodeContainerStyle: styles.pinCodeContainer,
              //  pinCodeTextStyle: styles.pinCodeText,
              //  focusStickStyle: styles.focusStick,
              //  focusedPinCodeContainerStyle: styles.activePinCodeContainer
            }
          }
        />
      </View>
      <View style={{ marginTop: 161, marginHorizontal: 24 }}>
        <CustomButton
          onPress={handleSubmit(onResetPress)}
          backgroundColor={theme.colors.primary}
          color={theme.colors.white}
        >
          Continue
        </CustomButton>
        <View style={{ marginTop: 16 }} />
        <CustomButton
          backgroundColor={theme.colors.white}
          borderRadius={1}
          borderColor={theme.colors.white}
          color={theme.colors.primary}
          onPress={handleSignIn}
        >
          Resend code
        </CustomButton>
      </View>
    </View>
  );
};

export default VerificationCode;

const stylesheet = createStyleSheet((theme) => ({}));
