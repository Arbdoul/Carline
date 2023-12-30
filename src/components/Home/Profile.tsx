import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ImageSourcePropType,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import {
  IconSettings,
  IconArrowNarrowLeft,
  IconShoppingCart,
  IconDots,
  IconCircleDot,
  IconChevronRight,
  IconClipboardList,
  IconSteeringWheel,
  IconReceiptTax,
} from "tabler-icons-react-native";
import ProfileGenerals from "../reuseComponents/ProfileGenerals";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "../screen";

interface CarItem {
  image: ImageSourcePropType;
}
const Profile = ({ navigation }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  //const navigation = useNavigation<>()
  const items: CarItem = {
    image: require("../../../assets/images/profile/download.jpg"),
  };

  const handleAppointment = () => {
    navigation.navigate("Appointment");
  };

  const handleTestDrive = () => {
    navigation.navigate("TestDrive");
  };
  const handleVouchers = () => {
    navigation.navigate("Vouchers");
  };
  const handleSettings = () => {
    navigation.navigate("Setting");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Profile",
      headerRight: () => (
        <Pressable onPress={handleSettings}>
          <IconSettings
            size={24}
            color={theme.colors.white}
            style={{ marginRight: 20 }}
          />
        </Pressable>
      ),

      headerLeft: () => (
        <Pressable onPress={navigation.goBack}>
          <IconArrowNarrowLeft
            size={24}
            color={theme.colors.white}
            style={{ marginLeft: 24 }}
          />
        </Pressable>
      ),
    });
  }, []);
  return (
    <>
      <Screen
        style={{ flex: 1 }}
        preset="scroll"
        backgroundColor={theme.colors.background}
        statusBarProps={{
          backgroundColor: theme.colors.primary,
          barStyle: "light-content",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.primary,
            paddingBottom: 24,
          }}
        >
          <View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{
                  marginTop: 24,
                  borderRadius: 50,
                  borderWidth: 4,
                  borderColor: theme.colors.white,
                  width: 80,
                  height: 80,
                }}
                source={items.image}
              />
              <Text
                style={{
                  ...theme.typography.h5,
                  color: theme.colors.white,
                  marginTop: 24,
                }}
              >
                Salisu Abdullahi
              </Text>
              <Text
                style={{
                  ...theme.typography.bodyMedium.medium,
                  color: theme.colors.primary100,
                }}
              >
                Buyer's account
              </Text>
            </View>
          </View>
        </View>
        <Screen
          style={{
            flex: 2,
            marginTop: 24,
          }}
        >
          <ProfileGenerals
            icon={<IconShoppingCart color={theme.colors.white} size={24} />}
            text="My purchases"
            icon2={<IconCircleDot size={16} />}
            borderWidth={1}
            backgroundColor={theme.colors.primary}
            paddingHorizontal={12}
          />
          <View style={{}}>
            <Text
              style={{
                marginTop: 24,
                marginHorizontal: 24,
                ...theme.typography.bodyMedium.bold,
                color: theme.colors.gray400,
              }}
            >
              Generals
            </Text>
          </View>
          <ProfileGenerals
            onPress={handleAppointment}
            icon={<IconClipboardList color={theme.colors.gray400} size={24} />}
            text="Appointment"
            backgroundColor={theme.colors.gray50}
          />

          <ProfileGenerals
            onPress={handleTestDrive}
            icon={<IconSteeringWheel color={theme.colors.gray400} size={24} />}
            text="Test drive"
            backgroundColor={theme.colors.gray50}
          />

          <ProfileGenerals
            onPress={handleVouchers}
            icon={<IconReceiptTax color={theme.colors.gray400} size={24} />}
            text="My vouchers"
            backgroundColor={theme.colors.gray50}
          />
        </Screen>
      </Screen>
    </>
  );
};

export default Profile;

const stylesheet = createStyleSheet((theme) => ({}));
