import { StyleSheet, Text, View, Pressable, Switch } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useStyles } from "react-native-unistyles";

const Swtich = ({
  icon,
  text,
  borderWidth,
  icon2,
  backgroundColor,
  onPress,
  maginTop,
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
        marginTop: maginTop,
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
            //   color: theme.colors.gray900,
          }}
        >
          {text}
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {icon2}
        <Switch />
      </View>
    </Pressable>
  );
};

export default Swtich;

const styles = StyleSheet.create({});
