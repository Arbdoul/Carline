import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useStyles } from "../../theme";
import { IconReceiptTax, IconChevronRight } from "tabler-icons-react-native";

const ProfileGenerals = ({
  icon,
  text,
  borderWidth,
  icon2,
  backgroundColor,
  onPress,
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
        borderColor: theme.colors.gray200,
        padding: 12,
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
            color: theme.colors.gray900,
          }}
        >
          {text}
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {icon2}
        <IconChevronRight size={20} />
      </View>
    </Pressable>
  );
};

export default ProfileGenerals;

const styles = StyleSheet.create({});
