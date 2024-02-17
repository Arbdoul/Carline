import React from "react";
import { Controller } from "react-hook-form";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
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
  left,
  right,
  rules = {},
}: any) => {
  const { styles, theme } = useStyles(stylesheet);

  const renderIcon = (iconName: any) => {
    return (
      <TextInput.Icon
        icon={iconName}
        size={24}
        color={
          UnistylesRuntime.themeName === "dark"
            ? theme.colors.gray500
            : theme.colors.gray900
        }
      />
    );
  };
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
              style={
                {
                  // borderRadius: 16,
                }
              }
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                mode="outlined"
                // left={left && renderIcon(left)}
                left={left && renderIcon(left)}
                right={right && renderIcon(right)}
                theme={{ roundness: 16 }}
                textColor={
                  UnistylesRuntime.themeName === "dark"
                    ? theme.colors.gray50
                    : theme.colors.gray900
                }
                outlineColor={theme.colors.gray800}
                style={[
                  {
                    color: theme.colors.gray50,
                  },
                  styles.input,
                ]}
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
    // paddingHorizontal: 16,

    marginTop: 16,
  },
}));
