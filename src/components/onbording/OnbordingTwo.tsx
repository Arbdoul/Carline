import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { IconDots } from "tabler-icons-react-native";
import CustomButton from "../../ui/CustomButton";
import { Screen } from "../screen";

const OnbordingTwo = ({ navigation }: any) => {
  const { styles, theme } = useStyles(stylesheet);

  const handlePress = () => {
    navigation.navigate("OnbordingTwo");
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
        //  barStyle: `${UnistylesRuntime?.themeName ?? "dark"}-content`,
      }}
      // style={{
      //   flex: 1,
      // }}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <View>
            <IconDots size={24} color="white" />
          </View>
          <Pressable>
            <Text style={styles.pressedText}>Skip</Text>
          </Pressable>
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
          <CustomButton onPress={handlePress}>Get Started</CustomButton>
          <CustomButton onPress={handlePress}>Get Started</CustomButton>
          <CustomButton onPress={handlePress}>Get Started</CustomButton>
        </View>
        {/* <View style={styles.buttonContainer}>
          <Pressable
            style={{
              backgroundColor: theme.colors.white,
              paddingHorizontal: 16,
              paddingVertical: 15,
              borderRadius: 16,
              alignItems: "center",
            }}
            onPress={handlePress}
          >
            <Text
              style={{
                ...theme.typography.bodyLarge.bold,
                color: theme.colors.primary,
              }}
            >
              Get Started
            </Text>
          </Pressable>
        </View> */}
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
    position: "absolute",
    bottom: 16,
    left: 24,
    right: 24,
  },
}));
