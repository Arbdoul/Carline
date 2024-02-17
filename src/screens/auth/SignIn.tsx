import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import CustomInput from "../../components/reuseComponents/CustomInput";
import { Screen } from "../../components/screen";
import { useLoginMutation } from "../../graphql/graphql";
import CustomButton from "../../ui/CustomButton";
import Button from "../onbording/Button";
const SignIn = ({ navigation }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  const [isSignInPressed, setIsSignPressed] = useState(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isGooglePressed, setIsGooglePressed] = useState(0);
  const [isApplePressed, setIsApplePressed] = useState(0);

  const [loginMutation] = useLoginMutation({
    // variables: {
    //   data: {
    //     email: "sheriff@gmail.com",
    //     password: "password",
    //   },
    // },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors);
  const onSignPressed = async (data: any) => {
    // navigation.navigate("BrandScreen");
    console.log("email: ", data.email, "password: ", data.password);
    await loginMutation({
      variables: {
        email: data.email,
        password: data.password,
      },

      onCompleted: async (response) => {
        console.log("Login success:", response);
      },
      onError: (error) => {
        console.error("Login error:", error);
      },
    });
  };

  const handleSignup = (data: any) => {
    //console.log(data);
    navigation.replace("SignUp");
  };

  const handleReset = () => {
    navigation.replace("ResetPassword");
  };

  const renderIcon = () => {
    // navigation.navigate("ResetPassword");
  };
  return (
    <Screen
      statusBarProps={{
        backgroundColor: theme.colors.background,
        barStyle:
          UnistylesRuntime?.themeName === "dark"
            ? "light-content"
            : "dark-content",
      }}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.signInTitle}>Sign in to Carline</Text>
        <Text style={styles.signInSubitle}>
          Welcome back! please enter your details
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          name="email"
          placeholder="Email"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          placeholderTextColor={theme.colors.gray500}
          control={control}
          rules={{ required: "email is required" }}
          // icon={<IconMail size={20} color={theme.colors.gray500} />}
          left="mail"
        />

        <CustomInput
          name="password"
          placeholder="password"
          placeholderTextColor="gray"
          control={control}
          secureTextEntry
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          rules={{
            required: "password is required",
            minLength: {
              value: 8,
              message: "Password should me minimum of 8 characters longrr",
            },
          }}
          right="eye-off-outline"
          left="lock"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          //justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <View>
          <Text
            style={{
              marginLeft: 24,
              marginTop: 16,
              ...theme.typography.bodyLarge.medium,
              color: theme.colors.gray500,
            }}
          >
            Forgot password?
          </Text>
        </View>
        <View>
          <Pressable onPress={handleReset}>
            <Text style={{ color: theme.colors.primary, marginTop: 16 }}>
              Reset it
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={{ marginHorizontal: 24, marginTop: 24 }}>
        <CustomButton
          onPress={handleSubmit(onSignPressed)}
          onPressIn={() => setIsSignPressed(1)}
          onPressOut={() => setIsSignPressed(0)}
          style={{ textAlign: "center" }}
          backgroundColor={
            UnistylesRuntime.themeName === "dark"
              ? theme.colors.primary
              : theme.colors.gray50
          }
          color={isSignInPressed ? theme.colors.white : theme.colors.gray800}
        >
          Sign In
        </CustomButton>
      </View>

      <Button
        // icon={<Icon name="google-icon" />}
        borderColor={theme.colors.gray50}
        backgroundColor={
          UnistylesRuntime.themeName === "dark"
            ? theme.colors.gray800
            : theme.colors.gray50
        }
        //color={theme.colors.white}
        color={
          UnistylesRuntime.themeName === "dark"
            ? theme.colors.gray50
            : theme.colors.gray900
        } //onPress={handlePress}
      >
        Continue with Google
      </Button>
      <Button
        icon={
          <AntDesign
            name="apple1"
            size={24}
            color={
              UnistylesRuntime.themeName === "dark"
                ? theme.colors.white
                : theme.colors.gray900
            }
          />
        }
        borderColor={theme.colors.gray50}
        onPressIn={() => setIsApplePressed(1)}
        onPressOut={() => setIsApplePressed(0)}
        backgroundColor={
          UnistylesRuntime.themeName === "dark"
            ? theme.colors.gray800
            : theme.colors.gray50
        }
        color={
          UnistylesRuntime.themeName === "dark"
            ? theme.colors.gray50
            : theme.colors.gray900
        }
      >
        Continue with Apple
      </Button>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          position: "absolute",
          bottom: -150,
          left: 24,
          right: 24,
        }}
      >
        <Text
          style={{
            ...theme.typography.bodyLarge.medium,
            color:
              UnistylesRuntime.themeName === "dark"
                ? theme.colors.gray50
                : theme.colors.gray900,
            alignItems: "center",
            //  marginBottom: 12,
          }}
        >
          Don't have any account?
        </Text>
        <Pressable onPress={handleSignup}>
          <Text
            style={{
              ...theme.typography.bodyLarge.bold,
              color: theme.colors.primary,
              // marginBottom: 24,
            }}
          >
            Sign Up
          </Text>
        </Pressable>
      </View>
    </Screen>
  );
};

export default SignIn;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  signInTitle: {
    color:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
    ...theme.typography.h3,
  },
  signInSubitle: {
    color:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray400
        : theme.colors.gray500,
    ...theme.typography.bodyLarge.medium,
    marginTop: 8,
  },
  inputContainer: {
    marginTop: 8,
    marginHorizontal: 24,
  },
}));
