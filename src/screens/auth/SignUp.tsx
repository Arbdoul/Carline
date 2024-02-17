import React from "react";
import { useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import {
  IconBrandApple,
  IconBrandGoogle,
  IconMail,
} from "tabler-icons-react-native";
import CustomInput from "../../components/reuseComponents/CustomInput";
import CustomButton from "../../ui/CustomButton";
import { default as Button, default as Buttons } from "../onbording/Button";
const SignUp = ({ navigation }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  const { control, handleSubmit } = useForm();

  const onSignUpPressed = () => {
    navigation.navigate("SignIn");
  };

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
          left="bag-personal"
        />
        <CustomInput
          name="email"
          placeholder="Email"
          placeholderTextColor={theme.colors.gray500}
          control={control}
          rules={{ required: "email is required" }}
          icon={<IconMail size={20} color={theme.colors.gray500} />}
          left="email"
        />
        <CustomInput
          name="password"
          placeholder="Password"
          placeholderTextColor={theme.colors.gray500}
          control={control}
          rules={{ required: "password is required" }}
          right="eye-off-outline"
          left="lock"
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

      <View style={{ marginHorizontal: 24, marginTop: 16 }}>
        <CustomButton
          onPress={handleSubmit(onSignUpPressed)}
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
        </CustomButton>
      </View>
      <Buttons
        icon={
          <IconBrandGoogle
            color={
              UnistylesRuntime.themeName === "dark"
                ? theme.colors.white
                : theme.colors.gray900
            }
          />
        }
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
      </Buttons>
      <Button
        icon={
          <IconBrandApple
            color={
              UnistylesRuntime.themeName === "dark"
                ? theme.colors.white
                : theme.colors.gray900
            }
          />
        }
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

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 16,
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
          }}
        >
          Already have an account?
        </Text>
        <Pressable onPress={handleSignIn}>
          <Text
            style={{
              ...theme.typography.bodyLarge.medium,
              color: theme.colors.primary,
              marginLeft: 4,
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
