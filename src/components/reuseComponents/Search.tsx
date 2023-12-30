import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { IconSearch } from "tabler-icons-react-native";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

const Search = ({ placeholder, placeholderTextColor }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View>
      <View style={styles.textInput}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
        />
        <IconSearch
          size={24}
          color={
            UnistylesRuntime?.themeName === "dark"
              ? theme.colors.gray400
              : theme.colors.white
          }
        />
      </View>
    </View>
  );
};

export default Search;

const stylesheet = createStyleSheet((theme) => ({
  textInput: {
    borderRadius: 16,
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 12,
    backgroundColor:
      UnistylesRuntime?.themeName === "dark"
        ? theme.colors.gray800
        : theme.colors.gray50,
  },
}));
