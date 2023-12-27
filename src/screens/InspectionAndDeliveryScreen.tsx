import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import {
  IconQuestionMark,
  IconShieldCheck,
  IconChevronRight,
} from "tabler-icons-react-native";
import CustomButton from "../ui/CustomButton";

const InspectionAndDeliveryScreen = ({ navigation }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Inspection & Delivery",
    });
  }, [navigation]);

  const handlePress = () => {
    navigation.navigate("Address");
  };
  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.vehicleInspectionContainer}>
          <Text style={styles.vehicleInspectionHeader}>Vehicle inspection</Text>
          <IconQuestionMark size={16} color={theme.colors.gray300} />
        </View>
        <View style={styles.vehicleInpection}>
          <View style={styles.vehicleInspectionTitle}>
            <View style={styles.initialPriceContainer}>
              <Text style={styles.initialPrice}>Initial Price</Text>
            </View>
            <Text style={styles.price}>$80,063.00</Text>
          </View>
          <View style={styles.vehicleInspectionBody}>
            <IconShieldCheck size={20} color={theme.colors.success} />
            <View>
              <Text style={styles.wehicleInspectionText}>
                Money back guarantee if the car fails the{" "}
              </Text>
              <Text style={styles.wehicleInspectionText}>Inspection</Text>
            </View>
          </View>
          <View style={styles.line}>
            <Text style={styles.seeDetails}>See details</Text>
            <IconChevronRight size={20} color={theme.colors.gray400} />
          </View>
        </View>

        <View>
          <View style={styles.adressContainer}>
            <Text style={styles.addressText}>Shipping address</Text>
            <Pressable>
              <Text style={styles.adressAction}>Edit</Text>
            </Pressable>
          </View>
          <View>
            <View style={styles.addressBody}>
              <Text style={styles.addressKey}>Name</Text>
              <Text style={styles.addressValue}>Saski Ropokova</Text>
            </View>
            <View style={styles.addressBody}>
              <Text style={styles.addressKey}>Street</Text>
              <Text style={styles.addressValue}>Jackson Street 1314</Text>
            </View>
            <View style={styles.addressBody}>
              <Text style={styles.addressKey}>Phone number</Text>
              <Text style={styles.addressValue}>+1 234 567 00</Text>
            </View>
          </View>

          <View style={styles.orderSummaryContainer}>
            <Text style={styles.orderSummary}>Order summary</Text>
            <View style={styles.addressBody}>
              <Text style={styles.addressKey}>Car Audit</Text>
              <Text style={styles.addressValue}>$80,063.00</Text>
            </View>
            <View style={styles.addressBody}>
              <Text style={styles.addressKey}>Total</Text>
              <Text style={styles.total}>$80,063.00</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={handlePress}>Continue</CustomButton>
      </View>
    </>
  );
};

export default InspectionAndDeliveryScreen;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  vehicleInspectionContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    marginLeft: 24,
    marginTop: 24,
  },
  vehicleInspectionHeader: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.gray900,
  },
  vehicleInpection: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.gray200,
    marginTop: 16,
    marginHorizontal: 24,
    paddingHorizontal: 20,
  },
  vehicleInspectionTitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  vehicleInspectionBody: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 16,
    paddingHorizontal: 20,
  },
  wehicleInspectionText: {
    ...theme.typography.bodySmall.medium,
    color: theme.colors.success,
  },
  initialPriceContainer: {
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    padding: 8,
    paddingHorizontal: 12,
    marginTop: 16,
  },
  initialPrice: {
    ...theme.typography.bodyXSmall.bold,
    color: theme.colors.white,
  },
  price: {
    ...theme.typography.h3,
    color: theme.colors.gray900,
    marginTop: 16,
  },
  line: {
    borderTopWidth: 1,
    borderColor: theme.colors.gray200,
    marginTop: 16,
    paddingBottom: 16,
    paddingTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seeDetails: {
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.gray900,
  },
  adressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: theme.colors.gray200,
  },
  addressText: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.gray900,
  },
  adressAction: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.primary,
  },
  addressBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 16,
  },
  addressKey: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.gray500,
  },
  addressValue: {
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.secondary,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    left: 24,
    right: 24,
  },

  orderSummaryContainer: {
    borderRadius: 16,
    marginTop: 24,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: theme.colors.gray50,
  },
  orderSummary: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.gray900,
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginBottom: 12,
    borderColor: theme.colors.gray200,
  },
  total: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.primary,
  },
}));
