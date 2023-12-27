import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useNavigation, useRoute } from "@react-navigation/native";

const ReceiptPaymentScreen = () => {
  const { styles, theme } = useStyles(stylesheet);
  const navigation = useNavigation<any>();
  const route = useRoute();

  const item = {
    audi: require("../../assets/images/payment/audi.png") as ImageSourcePropType,
    audiIcon:
      require("../../assets/images/payment/audii.png") as ImageSourcePropType,
  };

  const handlePress = () => {
    navigation.navigate("TrackingScreen");
  };

  return (
    <>
      <View style={styles.rootContainer}></View>
      <View style={styles.innerContainer}></View>
      <ScrollView style={styles.receipt}>
        <View style={styles.product}>
          <Image source={item.audi} />
          <Image source={item.audiIcon} />
          <Text style={styles.productName}>Audi Q7 Quattro</Text>
          <Text style={styles.productReceipt}>Receipt #1998-4442</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.statusandPaymentContainer}>
          <View style={styles.status}>
            <Text style={styles.text}>Status</Text>
            <Text style={styles.confirm}>Confirmed</Text>
          </View>
          <View style={styles.payment}>
            <Text style={styles.text}>Payment method</Text>
            <Text style={styles.paymentMethodText}>9299</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.statusandPaymentContainer}>
          <View style={styles.status}>
            <Text style={styles.text}>Date</Text>
            <Text style={styles.addressText}>1/12/2022</Text>
          </View>
          <View style={styles.payment}>
            <Text style={styles.text}>Name</Text>
            <Text style={styles.addressText}>Abdul</Text>
          </View>
          <View style={styles.payment}>
            <Text style={styles.text}>Address</Text>
            <Text style={styles.addressText}>kubwa</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.statusandPaymentContainer}>
          <View style={styles.status}>
            <Text style={styles.text}>Item subtotal</Text>
            <Text style={styles.addressText}>$2000</Text>
          </View>
          <View style={styles.payment}>
            <Text style={styles.text}>Shipping</Text>
            <Text style={styles.addressText}>$300</Text>
          </View>
          <View style={styles.payment}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.total}>$2300</Text>
          </View>
        </View>
        <View style={styles.line} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.btn} onPress={handlePress}>
          <Text style={styles.btnText}>Download Reciept</Text>
        </Pressable>
      </View>
    </>
  );
};

export default ReceiptPaymentScreen;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  innerContainer: {
    flex: 2,
    backgroundColor: theme.colors.white,
  },
  receipt: {
    flex: 1,
    position: "absolute",
    borderRadius: 16,
    left: 24,
    right: 24,
    //minHeight: 667,
    backgroundColor: theme.colors.white,
    height: 662,
    top: 8,
  },

  product: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
    gap: 16,
  },
  productName: {
    ...theme.typography.bodyXLarge.bold,
    color: theme.colors.gray900,
  },
  productReceipt: {
    ...theme.typography.bodySmall.medium,
    color: theme.colors.gray500,
  },
  line: {
    borderWidth: 0.8,
    marginHorizontal: 24,
    marginTop: 16,
    borderColor: theme.colors.gray200,
  },
  statusandPaymentContainer: {
    marginHorizontal: 24,
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  payment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    ...theme.typography.bodySmall.medium,
    color: theme.colors.gray500,
    paddingTop: 16,
  },
  confirm: {
    ...theme.typography.bodySmall.bold,
    color: theme.colors.success,
    paddingTop: 16,
  },
  paymentMethodText: {
    ...theme.typography.bodySmall.medium,
    color: theme.colors.gray500,
    paddingTop: 16,
  },
  addressText: {
    ...theme.typography.bodySmall.bold,
    color: theme.colors.gray900,
    paddingTop: 16,
  },
  total: {
    ...theme.typography.bodySmall.bold,
    color: theme.colors.primary,
    paddingTop: 16,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    left: 24,
    right: 24,
    backgroundColor: theme.colors.white,
    color: theme.colors.primary,
  },
  btn: {
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 15,
    alignItems: "center",
  },
  btnText: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.primary,
    lineHeight: 24,
  },
}));
