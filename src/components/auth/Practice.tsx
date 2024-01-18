import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";

const Practice = ({ control, rule, name }: any) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rule}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <TextInput placeholder="" value={value} onChangeText={onChange} />
            {error && <Text>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({});
