import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { IconSearch } from "tabler-icons-react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const Search = ({ placeholder }: any) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View>
      <View style={styles.textInput}>
        <TextInput placeholder={placeholder} />
        <IconSearch size={24} />
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
    backgroundColor: theme.colors.gray50,
  },
}));
