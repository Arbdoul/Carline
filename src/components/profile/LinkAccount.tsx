import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Swtich from "../reuseComponents/Swtich";
import {
  IconBrandApple,
  IconBrandGoogle,
  IconBrandTwitter,
} from "tabler-icons-react-native";

interface CarItem {
  image: ImageSourcePropType;
}
const LinkAccount = () => {
  const { styles, theme } = useStyles(stylesheet);

  const items: CarItem = {
    image: require("../../../assets/images/profile/download.jpg"),
  };
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: theme.colors.white }}>
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
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.white,
            marginHorizontal: 24,
            marginTop: 24,
          }}
        >
          <View>
            <Swtich
              icon={<IconBrandGoogle color={theme.colors.gray400} size={24} />}
              text="Login with google"
              backgroundColor={theme.colors.gray50}
              borderWidth={1}
            />
            <Swtich
              icon={<IconBrandApple color={theme.colors.gray400} size={24} />}
              text="Login with Apple"
              backgroundColor={theme.colors.gray900}
              borderWidth={1}
              maginTop={16}
            />
            <Swtich
              icon={<IconBrandTwitter color={theme.colors.gray400} size={24} />}
              text="Login with twitter"
              backgroundColor={theme.colors.blue}
              borderWidth={1}
              maginTop={16}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default LinkAccount;

const stylesheet = createStyleSheet((theme) => ({}));
