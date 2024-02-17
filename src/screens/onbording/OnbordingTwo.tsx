import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { IconBrandApple, IconMail } from "tabler-icons-react-native";
import { Screen } from "../../components/screen";
//import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import Buttons from "./Button";

const OnbordingTwo = () => {
  const { styles, theme } = useStyles(stylesheet);
  const [textColor, setTextColor] = useState();
  const [isEmailPressed, setIsEmailPressed] = useState(0);
  const [isGooglePressed, setIsGooglePressed] = useState(0);
  const [isApplePressed, setIsApplePressed] = useState(0);

  // const [pressed, setPressed] = useState<any>();

  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("SignIn");
  };
  return (
    <Screen
      backgroundColor={theme.colors.primary}
      contentContainerStyle={{ flex: 1 }}
      statusBarProps={{
        backgroundColor: theme.colors.primary,
        barStyle:
          UnistylesRuntime?.themeName === "dark"
            ? "light-content"
            : "dark-content",
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Image
              source={require("../../../assets/images/onbording/logo.png")}
            />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.onBoardHead}>Let’s get started</Text>

          <Text style={styles.onBoardbody}>Sign up or login to see what</Text>
          <Text style={styles.onBoardbody}>happening near you</Text>
        </View>
        <View>
          <Image
            style={{ width: 405, height: 241, marginTop: 23, left: 32 }}
            source={require("../../../assets/images/onbording/onbording2.png")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Buttons
            icon={<IconMail />}
            borderColor={theme.colors.gray400}
            borderWidth={1}
            onPress={handlePress}
            onPressIn={() => {
              setIsEmailPressed(1);
            }}
            color={isEmailPressed ? theme.colors.primary : theme.colors.white}
            onPressOut={() => setIsEmailPressed(0)}
            backgroundColor={
              isEmailPressed ? theme.colors.white : theme.colors.primary
            }
          >
            Continue with Email
          </Buttons>
          <Buttons
            icon={
              <Image
                // style={{ paddingVertical: 16 }}
                source={require("../../../assets/images/auth/google.png")}
              />
            }
            borderColor={theme.colors.gray400}
            borderWidth={1}
            onPress={handlePress}
            onPressIn={() => {
              setIsGooglePressed(2);
            }}
            onPressOut={() => setIsGooglePressed(0)}
            color={isGooglePressed ? theme.colors.primary : theme.colors.white}
            backgroundColor={
              isGooglePressed ? theme.colors.white : theme.colors.primary
            }
          >
            Continue with Google
          </Buttons>
          <Buttons
            icon={<IconBrandApple />}
            borderColor={theme.colors.gray400}
            borderWidth={1}
            onPress={handlePress}
            onPressIn={() => {
              setIsApplePressed(3);
            }}
            onPressOut={() => setIsApplePressed(0)}
            color={isApplePressed ? theme.colors.primary : theme.colors.white}
            backgroundColor={
              isApplePressed ? theme.colors.white : theme.colors.primary
            }
          >
            Continue with Apple
          </Buttons>
        </View>
      </View>
    </Screen>
  );
};

export default OnbordingTwo;

const stylesheet = createStyleSheet((theme) => ({
  headerContainer: {
    marginTop: 29,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },

  pressedText: {
    fontWeight: "700",
    fontSize: theme.typography.bodyLarge.bold.fontSize,
    lineHeight: 26.4,
    color: theme.colors.gray50,
  },
  onBoardHead: {
    ...theme.typography.h3,
    color: theme.colors.white,
  },
  onBoardbody: {
    ...theme.typography.bodyLarge.medium,
    color: theme.colors.gray400,
  },
  textContainer: {
    marginHorizontal: 24,
    marginTop: 32,
  },
  buttonContainer: {
    marginTop: 16,
  },
}));
