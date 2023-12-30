import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";
import { IconReceiptTax, IconChevronRight } from "tabler-icons-react-native";
import { isDarkMode } from "../../core";

const ProfileGenerals = ({
  icon,
  text,
  borderWidth,
  icon2,
  backgroundColor,
  onPress,
  paddingHorizontal,
}: any) => {
  const { styles, theme } = useStyles();
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 14,
        borderWidth: borderWidth,
        marginHorizontal: 24,
        borderColor:
          UnistylesRuntime?.themeName === "dark"
            ? theme.colors.gray800
            : theme.colors.gray200,
        paddingVertical: 12,
        paddingHorizontal: paddingHorizontal,
      }}
    >
      <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
        <View
          style={{
            borderRadius: 8,
            backgroundColor: backgroundColor,
            paddingHorizontal: 12,
            paddingVertical: 11,
          }}
        >
          {icon}
        </View>
        <Text
          style={{
            ...theme.typography.bodyMedium.bold,
            color: theme.colors.text,
          }}
        >
          {text}
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {icon2}
        <IconChevronRight
          size={20}
          color={
            UnistylesRuntime.themeName === "dark"
              ? theme.colors.gray500
              : theme.colors.gray400
          }
        />
      </View>
    </Pressable>
  );
};

export default ProfileGenerals;

const styles = StyleSheet.create({});
