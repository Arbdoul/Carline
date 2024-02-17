import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { IconDots } from "tabler-icons-react-native";
import { Screen } from "../../components/screen";

const OnbordingOne = ({ navigation }: any) => {
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
          <Text style={styles.onBoardHead}>Choose car right</Text>
          <Text style={styles.onBoardHead}>for you</Text>

          <Text style={styles.onBoardbody}>
            Answer a few quick questions to find
          </Text>
          <Text style={styles.onBoardbody}>the right car for you.</Text>
        </View>
        <View>
          <Image
            style={{ width: 354, height: 340, marginTop: 32 }}
            source={require("../../../assets/images/onbording/onbording1.png")}
          />
        </View>
        <View style={styles.buttonContainer}>
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
        </View>
      </View>
    </Screen>
  );
};

export default OnbordingOne;

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
