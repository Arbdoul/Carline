import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import {
  IconEdit,
  IconCheckbox,
  IconQuestionMark,
} from "tabler-icons-react-native";
import CustomButton from "../ui/CustomButton";

const PaymentScreen = ({ navigation }: any) => {
  const { styles, theme } = useStyles(stylesheet);

  const item = {
    masterCard:
      require("../../assets/images/payment/mastercard.png") as ImageSourcePropType,
    visacard:
      require("../../assets/images/payment/visacard.png") as ImageSourcePropType,
    card: require("../../assets/images/payment/card.png") as ImageSourcePropType,
  };

  const handlePress = () => {
    navigation.navigate("PaymentMethodScreen");
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.paymentMethod}>
        <Text style={styles.paymentMethodText}>Method of Payment</Text>

        <View style={styles.paymentMethodIcon}>
          <IconEdit size={16} color={theme.colors.primary} />
          <Text style={styles.change}>Change</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.cardHeaderText}>Credit or Debit</Text>
          <Text style={styles.cardBodyText}>Online payment</Text>
        </View>
        <View style={styles.card}>
          <Image source={item.masterCard} />
          <Image source={item.visacard} />
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.cardInputContainer}>
        <Text style={styles.lebelText}>Card number</Text>
        <View style={styles.cardNumber}>
          <Image source={item.card} />
          <TextInput
            placeholder="0000 0000 0000 0000"
            placeholderTextColor={theme.colors.gray400}
          />
        </View>
      </View>
      <View style={styles.dateAndCacContainer}>
        <View>
          <View style={styles.expiryIcon}>
            <Text style={styles.lebelText}>Expiry data</Text>
            <IconQuestionMark size={16} />
          </View>
          <View style={styles.date}>
            <TextInput
              placeholder="MM/YY"
              placeholderTextColor={theme.colors.gray400}
            />
          </View>
        </View>
        <View>
          <View style={styles.expiryIcon}>
            <Text style={styles.lebelText}>CVC</Text>
            <IconQuestionMark size={16} />
          </View>
          <View style={styles.cvc}>
            <TextInput
              placeholder="000"
              placeholderTextColor={theme.colors.gray400}
            />
          </View>
        </View>
      </View>
      <View style={styles.cardInputContainer}>
        <Text style={styles.lebelText}>Card holder</Text>
        <View style={styles.cardNumber}>
          <TextInput
            placeholder="Full name"
            placeholderTextColor={theme.colors.gray400}
          />
        </View>
      </View>
      <View style={styles.termsContainer}>
        <IconCheckbox />
        <Text style={styles.terms}>
          I agree with <Text style={styles.generalTerm}> general terms </Text>
          and <Text style={styles.generalTerm}>conditions</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={handlePress}>Continue</CustomButton>
      </View>
    </View>
  );
};

export default PaymentScreen;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  paymentMethod: {
    marginTop: 16,
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paymentMethodText: {
    ...theme.typography.bodyLarge.bold,
    color: theme.colors.gray900,
  },
  paymentMethodIcon: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  change: {
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.primary,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    backgroundColor: theme.colors.secondary,
  },
  cardHeaderText: {
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.white,
  },
  cardBodyText: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.gray400,
  },
  card: {
    flexDirection: "row",
  },
  line: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    marginTop: 24,
    borderColor: theme.colors.gray200,
  },
  lebelText: {
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.gray900,
  },
  cardNumber: {
    flexDirection: "row",
    gap: 12,
    borderRadius: 16,
    marginTop: 8,
    padding: 16,
    backgroundColor: theme.colors.gray50,
  },
  cardInputContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  dateAndCacContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginHorizontal: 24,
    marginTop: 16,
  },
  expiryIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  date: {
    marginTop: 8,
    padding: 16,
    borderRadius: 16,
    backgroundColor: theme.colors.gray50,
    width: 157.5,
  },
  cvc: {
    marginTop: 8,
    padding: 16,
    borderRadius: 16,
    backgroundColor: theme.colors.gray50,
    width: 157.5,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    left: 24,
    right: 24,
  },
  termsContainer: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginTop: 24,
    gap: 4,
  },
  terms: {
    ...theme.typography.bodyMedium.medium,
    color: theme.colors.gray900,
  },
  generalTerm: {
    ...theme.typography.bodyMedium.bold,
    color: theme.colors.primary,
  },
}));
