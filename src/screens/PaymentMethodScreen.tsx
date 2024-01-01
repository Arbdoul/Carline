import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import {
  IconBrandMastercard,
  IconCheckbox,
  IconBrandPaypal,
  IconBrandApple,
  IconBrandGoogle,
} from "tabler-icons-react-native";
import CustomButton from "../ui/CustomButton";
import { useNavigation } from "@react-navigation/native";

const PaymentMethodScreen = () => {
  const { styles, theme } = useStyles(stylesheet);
  const navigation = useNavigation<any>();

  const item = {
    paymentMethod:
      require("../../assets/images/payment/payment.png") as ImageSourcePropType,
  };

  const handlePress = () => {
    navigation.navigate("ReceiptPayment");
  };
  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <View style={styles.cardContainer}>
          <Image style={styles.paymentCard} source={item.paymentMethod} />
        </View>

        <View style={styles.iconandcardRootContainer}>
          <View style={styles.iconandcardContainer}>
            <View style={styles.iconandcard}>
              <IconBrandMastercard size={32} color={theme.colors.gray400} />
              <Text style={styles.text}>Credit/Debit card</Text>
            </View>
            <View>
              <IconCheckbox
                color={
                  UnistylesRuntime.themeName === "dark"
                    ? theme.colors.gray500
                    : theme.colors.gray700
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.iconandcardRootContainer}>
          <View style={styles.iconandcardContainer}>
            <View style={styles.iconandcard}>
              <IconBrandPaypal size={32} color={theme.colors.gray400} />
              <Text style={styles.text}>Paypal</Text>
            </View>
            <View>
              <IconCheckbox
                color={
                  UnistylesRuntime.themeName === "dark"
                    ? theme.colors.gray500
                    : theme.colors.gray700
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.iconandcardRootContainer}>
          <View style={styles.iconandcardContainer}>
            <View style={styles.iconandcard}>
              <IconBrandApple size={32} color={theme.colors.gray400} />
              <Text style={styles.text}>Apple pay</Text>
            </View>
            <View>
              <IconCheckbox
                color={
                  UnistylesRuntime.themeName === "dark"
                    ? theme.colors.gray500
                    : theme.colors.gray700
                }
              />
            </View>
          </View>
        </View>
        <View style={styles.iconandcardRootContainer}>
          <View style={styles.iconandcardContainer}>
            <View style={styles.iconandcard}>
              <IconBrandGoogle size={32} color={theme.colors.gray400} />
              <Text style={styles.text}>Google pay</Text>
            </View>
            <View>
              <IconCheckbox
                color={
                  UnistylesRuntime.themeName === "dark"
                    ? theme.colors.gray500
                    : theme.colors.gray700
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={handlePress}>Select payment</CustomButton>
      </View>
    </>
  );
};

export default PaymentMethodScreen;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    //marginBottom: 100,
  },
  cardContainer: {
    alignItems: "center",
  },
  paymentCard: {
    marginTop: 24,
    borderRadius: 12,
    resizeMode: "cover",
    width: 327,
    height: 200,
  },
  iconandcard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconandcardRootContainer: {
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginHorizontal: 24,
    borderColor:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray700
        : theme.colors.gray200,
  },
  iconandcardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 16,
  },
  text: {
    ...theme.typography.bodyLarge.bold,
    color:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    left: 24,
    right: 24,
  },
}));
