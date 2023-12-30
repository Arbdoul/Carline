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
  IconEngine,
  IconManualGearbox,
  IconCameraDollar,
  IconCircleCheck,
} from "tabler-icons-react-native";
import { Tabs } from "react-native-collapsible-tab-view";
import CustomButton from "../../ui/CustomButton";
import { useNavigation } from "@react-navigation/native";

const purchaseDetails = {
  carIcon:
    require("../../../assets/images/purchase/audisvg.jpg") as ImageSourcePropType,
  carImage:
    require("../../../assets/images/purchase/audiImage.png") as ImageSourcePropType,
  carTitel: "Audi A8 Quattro" as string,
  carRating: "4.5" as string,
  card: require("../../../assets/images/purchase/card.png") as ImageSourcePropType,
  rectangle:
    require("../../../assets/images/purchase/rectangle.png") as ImageSourcePropType,
  carDescription: "Automatic" as string,
};
const PurchaseMethod = () => {
  const { styles, theme } = useStyles(stylesheet);
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("InspectionAndDeliveryScreen");
  };

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.rootContainer}>
          <View style={styles.productContainer}>
            <View>
              <Image source={purchaseDetails.carIcon} />
              <Text style={styles.title}>{purchaseDetails.carTitel}</Text>
              <View style={styles.discriptionContainer}>
                <View style={styles.engineContainer}>
                  <IconEngine size={12} color={theme.colors.gray500} />
                  <Text style={styles.engineText}>335 hp</Text>
                </View>
                <View style={styles.gearContainer}>
                  <IconManualGearbox size={14} color={theme.colors.gray500} />
                  <Text style={styles.gearText}>
                    {purchaseDetails.carDescription}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Image source={purchaseDetails.carImage} />
            </View>
          </View>

          <View>
            <View>
              <Text style={styles.purshaseMethod}>Your purchase method</Text>
            </View>
            <View style={styles.purchaseContainer}>
              <View style={styles.purchaseIcon}>
                <Image source={purchaseDetails.card} />
              </View>
              <View>
                <Text style={styles.purchaseTitle}>Financing</Text>
                <Text style={styles.purchaseBody}>
                  Everything simply online approval
                </Text>
                <Text style={styles.purchaseBody}>within 30 minutes</Text>
              </View>
              <Image source={purchaseDetails.rectangle} />
            </View>

            <View style={styles.purchaseContainer2}>
              <View style={styles.purchaseIcon2}>
                <IconCameraDollar size={16} color={theme.colors.white} />
              </View>
              <View>
                <Text style={styles.purchaseTitle}>Payment full</Text>
                <Text style={styles.purchaseBody}>
                  Everything simply online approval
                </Text>
                <Text style={styles.purchaseBody}>within 30 minutes</Text>
              </View>
              <Image source={purchaseDetails.rectangle} />
            </View>
          </View>

          <View style={styles.carlinePromiseContainer}>
            <Text style={styles.carlinePromise}>Carline promise</Text>
            <View style={styles.carPromiseDetails}>
              <IconCircleCheck size={12} color={theme.colors.success} />
              <Text style={styles.carPromiseText}>
                Fixed Price, No Hidden Fees
              </Text>
            </View>
            <View style={styles.carPromiseDetails}>
              <IconCircleCheck size={12} color={theme.colors.success} />
              <Text style={styles.carPromiseText}>Proof of car insurance</Text>
            </View>
            <View style={styles.carPromiseDetails}>
              <IconCircleCheck size={12} color={theme.colors.success} />
              <Text style={styles.carPromiseText}>
                Proof of address, as recent as 30 days
              </Text>
            </View>
            <View style={styles.carPromiseDetails}>
              <IconCircleCheck size={12} color={theme.colors.success} />
              <Text style={styles.carPromiseText}>
                any additional owners present
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={handlePress}>Continue</CustomButton>
      </View>
    </>
  );
};

export default PurchaseMethod;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 24,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.gray200,
    paddingBottom: 24,
  },
  title: {
    marginTop: 8,
    ...theme.typography.bodyXLarge.bold,
    color:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
  },
  discriptionContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
  },
  engineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  engineText: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.gray500,
  },

  gearContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  gearText: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.gray500,
  },
  purshaseMethod: {
    marginTop: 24,
    ...theme.typography.bodyLarge.bold,
    color:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
  },
  purchaseContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray700
        : theme.colors.gray200,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 24,
  },
  purchaseContainer2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray700
        : theme.colors.gray200,
    backgroundColor: theme.colors.primary,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 24,
  },
  purchaseTitle: {
    ...theme.typography.bodyMedium.bold,
    color:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
  },
  purchaseBody: {
    ...theme.typography.bodyXSmall.regular,
    color: theme.colors.gray500,
  },
  purchaseIcon: {
    borderRadius: 12,
    padding: 16,
    backgroundColor: theme.colors.gray50,
  },
  purchaseIcon2: {
    borderRadius: 12,
    padding: 16,
    backgroundColor: theme.colors.primary400,
  },
  carlinePromiseContainer: {
    borderRadius: 16,
    marginTop: 24,
    paddingTop: 16,
    backgroundColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.gray50,
    overflow: "hidden",
    paddingHorizontal: 16,
  },
  carlinePromise: {
    ...theme.typography.bodyLarge.bold,
    marginBottom: 16,
    color:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,
  },
  carPromiseDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
  },
  carPromiseText: {
    ...theme.typography.bodySmall.medium,
    color:
      UnistylesRuntime?.themeName === "dark"
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
