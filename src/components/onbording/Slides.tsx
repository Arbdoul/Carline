import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";
import Onbording from "./Onbording";
import OnbordingOne from "./OnbordingOne";
import OnbordingTwo from "./OnbordingTwo";

import CustomButton from "../../ui/CustomButton";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { IconDots } from "tabler-icons-react-native";
import { Screen } from "../screen";

export const slides = [
  {
    id: 1,
    headerText1: "Find the best car",
    headerText2: "without headaches",
    bodyText1: "You choose your car online. We inspect it",
    bodyText2: "and deliver it.",
    image: require("../../../assets/images/onbording/onbording.png"),
  },
  {
    id: 2,
    headerText1: "Choose car right",
    headerText2: "for you",
    bodyText1: "Answer a few quick questions to find",
    bodyText2: "the right car for you.",
  },
  {
    id: 3,
    headerText1: "Let’s get started",
    bodyText1: "Sign up or login to see what",
    bodyText2: "happening near you",
  },
];

const OnboardingScreen = ({ item }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <PagerView initialPage={0} style={[{ flex: 1 }]}>
      <View key={1}>
        <Onbording />
      </View>
      <View key={2}>
        <OnbordingOne />
      </View>
      <View key={3}>
        <OnbordingTwo />
      </View>
    </PagerView>
  );
};

const Slides = () => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={{ flex: 1 }}>
      <OnboardingScreen />
    </View>
  );
};

export default Slides;

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
