import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageSourcePropType,
  Image,
} from "react-native";
import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { IconClock, IconClockDollar } from "tabler-icons-react-native";

interface CarItem {
  image: ImageSourcePropType;
  audi: ImageSourcePropType;
}

const Vouchers = () => {
  const { styles, theme } = useStyles(stylesheet);

  const items: CarItem = {
    image: require("../../../assets/images/vouchers/T.png"),
    audi: require("../../../assets/images/vouchers/audi.png"),
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.textInput}>
        <TextInput placeholder="Enter promo code" />
      </View>
      <View style={styles.activeVouchersContainer}>
        <Text style={styles.activeVouchersText}>Active vouchers</Text>
      </View>
      <View>
        <View
          style={{
            padding: 16,
            marginTop: 24,
            marginHorizontal: 24,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: theme.colors.primary,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 16,
              paddingBottom: 16,
              borderBottomWidth: 1,
              borderColor: theme.colors.primary300,
            }}
          >
            <View
              style={{
                borderRadius: 10,
                backgroundColor: theme.colors.primary400,
                width: 48,
                height: 48,
                padding: 13,
              }}
            >
              <Image source={items.image} />
            </View>
            <View>
              <Text
                style={{
                  ...theme.typography.bodySmall.medium,
                  color: theme.colors.gray200,
                }}
              >
                #summersale
              </Text>
              <Text
                style={{
                  ...theme.typography.bodyLarge.bold,
                  color: theme.colors.white,
                }}
              >
                Save up to $3,000 on sale car
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 16,
            }}
          >
            <Text
              style={{
                ...theme.typography.bodySmall.medium,
                color: theme.colors.primary300,
              }}
            >
              Your coupon code:
            </Text>
            <Text
              style={{
                ...theme.typography.bodyXLarge.bold,
                color: theme.colors.white,
              }}
            >
              TOYTA25
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 24,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderWidth: 1,
            borderColor: theme.colors.gray200,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              gap: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  borderRadius: 8,
                  backgroundColor: theme.colors.gray200,
                  padding: 8,
                }}
              >
                <IconClock />
              </View>
              <View style={{ paddingRight: 24.5 }}>
                <Text
                  style={{
                    ...theme.typography.bodyXSmall.medium,
                    color: theme.colors.gray400,
                    marginBottom: 4,
                  }}
                >
                  Valid until
                </Text>
                <Text
                  style={{
                    ...theme.typography.bodySmall.bold,
                    color: theme.colors.gray900,
                    paddingTop: 4,
                  }}
                >
                  date here
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <View
                style={{
                  borderRadius: 8,
                  backgroundColor: theme.colors.gray200,
                  padding: 8,
                }}
              >
                <IconClockDollar size={32} color={theme.colors.gray500} />
              </View>
              <View>
                <Text
                  style={{
                    ...theme.typography.bodyXSmall.medium,
                    color: theme.colors.gray400,
                    marginBottom: 4,
                  }}
                >
                  min. transaction
                </Text>
                <Text
                  style={{
                    ...theme.typography.bodySmall.bold,
                    color: theme.colors.gray900,
                    paddingTop: 4,
                  }}
                >
                  $10, 000, 00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            padding: 16,
            marginTop: 24,
            marginHorizontal: 24,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: theme.colors.secondary,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 16,
              paddingBottom: 16,
              borderBottomWidth: 1,
              borderColor: theme.colors.gray700,
            }}
          >
            <View
              style={{
                borderRadius: 10,
                backgroundColor: theme.colors.gray800,
                width: 48,
                height: 48,
                padding: 13,
              }}
            >
              <Image source={items.audi} />
            </View>
            <View>
              <Text
                style={{
                  ...theme.typography.bodySmall.medium,
                  color: theme.colors.gray200,
                }}
              >
                #summersale
              </Text>
              <Text
                style={{
                  ...theme.typography.bodyLarge.bold,
                  color: theme.colors.white,
                }}
              >
                Save up to $3,000 on sale car
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 16,
            }}
          >
            <Text
              style={{
                ...theme.typography.bodySmall.medium,
                color: theme.colors.gray700,
              }}
            >
              Your coupon code:
            </Text>
            <Text
              style={{
                ...theme.typography.bodyXLarge.bold,
                color: theme.colors.white,
              }}
            >
              TESLAMXX
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 24,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderWidth: 1,
            borderColor: theme.colors.gray200,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              gap: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  borderRadius: 8,
                  backgroundColor: theme.colors.gray200,
                  padding: 8,
                }}
              >
                <IconClock />
              </View>
              <View style={{ paddingRight: 24.5 }}>
                <Text
                  style={{
                    ...theme.typography.bodyXSmall.medium,
                    color: theme.colors.gray400,
                    marginBottom: 4,
                  }}
                >
                  Valid until
                </Text>
                <Text
                  style={{
                    ...theme.typography.bodySmall.bold,
                    color: theme.colors.gray900,
                    paddingTop: 4,
                  }}
                >
                  date here
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <View
                style={{
                  borderRadius: 8,
                  backgroundColor: theme.colors.gray200,
                  padding: 8,
                }}
              >
                <IconClockDollar size={32} color={theme.colors.gray500} />
              </View>
              <View>
                <Text
                  style={{
                    ...theme.typography.bodyXSmall.medium,
                    color: theme.colors.gray400,
                    marginBottom: 4,
                  }}
                >
                  min. transaction
                </Text>
                <Text
                  style={{
                    ...theme.typography.bodySmall.bold,
                    color: theme.colors.gray900,
                    paddingTop: 4,
                  }}
                >
                  $10, 000, 00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Vouchers;

const stylesheet = createStyleSheet((theme) => ({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  textInput: {
    borderRadius: 16,
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 12,
    backgroundColor: theme.colors.gray50,
  },
  activeVouchersContainer: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  activeVouchersText: {
    ...theme.typography.bodyXLarge.bold,
    color: theme.colors.gray900,
  },
}));
