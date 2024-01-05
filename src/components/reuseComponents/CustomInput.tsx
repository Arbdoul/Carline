import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

const CustomInput = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  placeholderTextColor,
  icon,
  rules = {},
}: any) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                },
                styles.input,
              ]}
            >
              {icon}
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
              />
            </View>
            {error && (
              <Text style={{ color: "red", alignSelf: "stretch" }}>
                {error.message || "Error"}
              </Text>
            )}
          </>
        )}
      />
    </View>
  );
};

export default CustomInput;

const stylesheet = createStyleSheet((theme) => ({
  input: {
    backgroundColor:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.gray50,
    borderRadius: 16,
    // borderWidth: 1,
    paddingHorizontal: 16,
    //borderColor: error && "red",
    color:
      UnistylesRuntime.themeName === "dark"
        ? theme.colors.gray50
        : theme.colors.gray900,

    marginTop: 16,
  },
}));
