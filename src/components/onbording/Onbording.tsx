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
import { useNavigation } from "@react-navigation/native";

const Onbording = () => {
  const { styles, theme } = useStyles(stylesheet);
  const navigation = useNavigation<any>();
  const handlePress = () => {
    navigation.navigate("OnbordingTwo");
  };
  return (
    <Screen
      // backgroundColor={theme.colors.background}
      contentContainerStyle={{ flex: 1 }}
      statusBarProps={{
        backgroundColor: theme.colors.gray900,
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
      <ImageBackground
        resizeMode="cover"
        style={{ flex: 1 }}
        source={require("../../../assets/images/onbording/onbording.png")}
      >
        <View style={styles.headerContainer}>
          <View>
            <IconDots size={24} color="white" />
          </View>
          <Pressable>
            <Text style={styles.pressedText}>Skip</Text>
          </Pressable>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.onBoardHead}>Find the best car</Text>
          <Text style={styles.onBoardHead}>without headaches</Text>

          <Text style={styles.onBoardbody}>
            You choose your car online. We inspect it
          </Text>
          <Text style={styles.onBoardbody}>and deliver it.</Text>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton onPress={handlePress}>Get Started</CustomButton>
        </View>
      </ImageBackground>
    </Screen>
  );
};

export default Onbording;

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
    color: theme.colors.primary,
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
