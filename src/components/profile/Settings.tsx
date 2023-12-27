import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import ProfileGenerals from "../reuseComponents/ProfileGenerals";
import {
  IconAlertCircle,
  IconBell,
  IconLink,
  IconLock,
  IconMoon,
  IconUser,
} from "tabler-icons-react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Swtich from "../reuseComponents/Swtich";
import { useNavigation } from "@react-navigation/native";
import { SelectTheme } from "./components/select-theme";
import { Screen } from "../screen";
import { isDarkMode } from "../../core";

const Settings = () => {
  const { styles, theme } = useStyles(stylesheet);
  const navigation = useNavigation<any>();
  console.log("theme color ", theme.colors.background);

  const handleLinkAccount = () => {
    navigation.navigate("LinkAccount");
  };
  console.log("isDArk mode ", UnistylesRuntime.themeName === "dark");
  return (
    <Screen
      style={styles.rootContainer}
      preset="scroll"
      backgroundColor={theme.colors.background}
      statusBarProps={{
        backgroundColor: theme.colors.background,

        barStyle: `${UnistylesRuntime?.themeName ?? "dark"}-content`,
      }}
      //statusBarStyle="dark"
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Account Settings</Text>
      </View>
      <View style={styles.accountSetting}>
        <ProfileGenerals
          icon={<IconUser color={theme.colors.gray400} size={24} />}
          text="Account information"
          backgroundColor={theme.colors.gray50}
        />
        <ProfileGenerals
          icon={
            <Ionicons
              name="card-outline"
              size={24}
              color={theme.colors.gray400}
            />
          }
          text="Payment method"
          backgroundColor={theme.colors.gray50}
        />
        <ProfileGenerals
          onPress={handleLinkAccount}
          icon={<IconLink color={theme.colors.gray400} size={24} />}
          text="Link Account"
          backgroundColor={theme.colors.gray50}
        />
        <Swtich
          icon={<IconMoon color={theme.colors.gray400} size={24} />}
          text="Dark mode"
          backgroundColor={theme.colors.gray50}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>App Settings</Text>
      </View>
      <View style={styles.accountSetting}>
        <ProfileGenerals
          icon={
            <Ionicons
              name="globe-outline"
              size={24}
              color={theme.colors.gray400}
            />
          }
          text="Language"
          backgroundColor={theme.colors.gray50}
        />
        <Swtich
          icon={<IconBell color={theme.colors.gray400} size={24} />}
          text="Push notification"
          backgroundColor={theme.colors.gray50}
        />
        <SelectTheme />

        {/* <Swtich
          icon={<IconMoon color={theme.colors.gray400} size={24} />}
          text="Dark mode"
          backgroundColor={theme.colors.gray50}
        /> */}
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Support</Text>
      </View>
      <View style={styles.accountSetting}>
        <ProfileGenerals
          icon={<IconAlertCircle color={theme.colors.gray400} size={24} />}
          text="About Carline"
          backgroundColor={theme.colors.gray50}
        />
        <ProfileGenerals
          icon={
            <AntDesign
              name="questioncircleo"
              size={24}
              color={theme.colors.gray400}
            />
          }
          text="Get help"
          backgroundColor={theme.colors.gray50}
        />
        <ProfileGenerals
          icon={<IconLock color={theme.colors.gray400} size={24} />}
          text="Privacy policy"
          backgroundColor={theme.colors.gray50}
        />
      </View>
    </Screen>
  );
};

export default Settings;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
  },
  header: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  headerText: {
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.gray400,
  },
  accountSetting: {
    marginTop: 8,
    paddingTop: 8,
    paddingHorizontal: 24,
  },
}));
