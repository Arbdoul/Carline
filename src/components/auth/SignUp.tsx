import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../reuseComponents/CustomInput";
import { useForm } from "react-hook-form";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import Button from "../onbording/Button";
import {
  IconBrandApple,
  IconLock,
  IconMail,
  IconUser,
} from "tabler-icons-react-native";
import { Screen } from "../screen";
const SignUp = ({ navigation }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  const { control, handleSubmit } = useForm();

  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View
      //  backgroundColor={theme.colors.background}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.signInTitle}>Sign Up</Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          name="fullname"
          placeholder="Fullname"
          placeholderTextColor={theme.colors.gray500}
          control={control}
          rules={{ required: "name is required" }}
          icon={<IconUser size={20} color={theme.colors.gray500} />}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          placeholderTextColor={theme.colors.gray500}
          control={control}
          rules={{ required: "email is required" }}
          icon={<IconMail size={20} color={theme.colors.gray500} />}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          placeholderTextColor={theme.colors.gray500}
          control={control}
          rules={{ required: "password is required" }}
          icon={<IconLock size={20} color={theme.colors.gray500} />}
        />
      </View>
      <Text
        style={{
          marginHorizontal: 24,
          marginTop: 16,
          ...theme.typography.bodyLarge.medium,
          color: theme.colors.gray500,
        }}
      >
        By signing up, you agree to our{" "}
        <Text style={{ color: theme.colors.primary }}>Terms of Service</Text>{" "}
        and
        <Text style={{ color: theme.colors.primary }}> Privacy Policy.</Text>
      </Text>

      <View>
        <Button
          backgroundColor={
            UnistylesRuntime.themeName === "dark"
              ? theme.colors.primary
              : theme.colors.gray50
          }
          color={
            UnistylesRuntime.themeName === "dark"
              ? theme.colors.gray50
              : theme.colors.gray900
          }
          style={styles.signup}
          alignItems={"center"}
        >
          Sign Up
        </Button>
        <Button
          icon={<IconBrandApple />}
          borderColor={theme.colors.gray50}
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
          //onPress={handlePress}
        >
          Continue with Google
        </Button>
        <Button
          icon={<IconBrandApple />}
          borderColor={theme.colors.gray50}
          // onPressIn={() => setIsApplePressed(1)}
          // onPressOut={() => setIsApplePressed(0)}
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
          //onPress={handlePress}
        >
          Continue with Apple
        </Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <Text
          style={{
            ...theme.typography.bodyLarge.medium,
            color:
              UnistylesRuntime.themeName === "dark"
                ? theme.colors.gray50
                : theme.colors.gray900,
          }}
        >
          Already have an account?
        </Text>
        <Pressable onPress={handleSignIn}>
          <Text
            style={{
              ...theme.typography.bodyLarge.medium,
              color: theme.colors.primary,
            }}
          >
            Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  inputContainer: {
    marginTop: 8,
    marginHorizontal: 24,
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
  signup: {
    alignItems: "center",
  },
}));
