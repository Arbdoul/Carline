import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useMemo, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { IconEyeCancel, IconX } from "tabler-icons-react-native";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";
import { Ionicons } from "@expo/vector-icons";

export type Ref = BottomSheetModal;

interface CustomBottomSheetProps {
  handleClose: () => void;
}
const CustomBottomSheet = forwardRef<Ref, CustomBottomSheetProps>(
  (props, ref) => {
    const { styles, theme } = useStyles();
    const snapPoints = useMemo(() => ["50%"], []);

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: theme.colors.background }}
        handleIndicatorStyle={{ display: "none" }}
        //handleIndicatorStyle={theme.colors.white}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 24,
          }}
        >
          <Text
            style={{
              ...theme.typography.bodyXLarge.bold,
              color:
                UnistylesRuntime?.themeName === "dark"
                  ? theme.colors.gray50
                  : theme.colors.gray900,
            }}
          >
            Sort by
          </Text>
          <Pressable onPress={props.handleClose}>
            <IconX size={24} color={theme.colors.gray400} />
          </Pressable>
        </View>
        <View
          style={{
            marginHorizontal: 24,
            marginTop: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopWidth: 1,
            borderColor:
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray700
                : theme.colors.gray200,
            paddingTop: 16,
          }}
        >
          <Text
            style={{
              ...theme.typography.bodyLarge.bold,
              color:
                UnistylesRuntime?.themeName === "dark"
                  ? theme.colors.gray50
                  : theme.colors.gray900,
            }}
          >
            Latest saved
          </Text>
          <Ionicons
            name="radio-button-on"
            size={24}
            color={
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray700
                : theme.colors.gray200
            }
          />
        </View>
        <View
          style={{
            marginHorizontal: 24,
            marginTop: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopWidth: 1,
            borderColor:
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray700
                : theme.colors.gray200,
            paddingTop: 16,
          }}
        >
          <Text
            style={{
              ...theme.typography.bodyLarge.bold,
              color:
                UnistylesRuntime?.themeName === "dark"
                  ? theme.colors.gray50
                  : theme.colors.gray900,
            }}
          >
            Longest saved
          </Text>
          <Ionicons
            name="radio-button-on"
            size={24}
            color={
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray700
                : theme.colors.gray200
            }
          />
        </View>
        <View
          style={{
            marginHorizontal: 24,
            marginTop: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopWidth: 1,
            borderColor:
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray700
                : theme.colors.gray200,
            paddingTop: 16,
          }}
        >
          <Text
            style={{
              ...theme.typography.bodyLarge.bold,
              color:
                UnistylesRuntime?.themeName === "dark"
                  ? theme.colors.gray50
                  : theme.colors.gray900,
            }}
          >
            Most reviewed
          </Text>
          <Ionicons
            name="radio-button-on"
            size={24}
            color={
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray700
                : theme.colors.gray200
            }
          />
        </View>
        <View
          style={{
            marginHorizontal: 24,
            marginTop: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopWidth: 1,
            borderColor:
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray700
                : theme.colors.gray200,
            paddingTop: 16,
          }}
        >
          <Text
            style={{
              ...theme.typography.bodyLarge.bold,
              color:
                UnistylesRuntime?.themeName === "dark"
                  ? theme.colors.gray50
                  : theme.colors.gray900,
            }}
          >
            Highest price
          </Text>
          <Ionicons
            name="radio-button-on"
            size={24}
            color={
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray700
                : theme.colors.gray200
            }
          />
        </View>
        <View
          style={{
            marginHorizontal: 24,
            marginTop: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopWidth: 1,
            borderColor:
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray700
                : theme.colors.gray200,
            paddingTop: 16,
          }}
        >
          <Text
            style={{
              ...theme.typography.bodyLarge.bold,
              color:
                UnistylesRuntime?.themeName === "dark"
                  ? theme.colors.gray50
                  : theme.colors.gray900,
            }}
          >
            Lowest price
          </Text>
          <Ionicons
            name="radio-button-on"
            size={24}
            color={
              UnistylesRuntime?.themeName === "dark"
                ? theme.colors.gray700
                : theme.colors.gray200
            }
          />
        </View>
      </BottomSheetModal>
    );
  }
);

export default CustomBottomSheet;

const styles = StyleSheet.create({});
