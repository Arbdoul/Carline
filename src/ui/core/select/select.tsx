import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { useModal } from "../modal";
import type { Option } from "./options";
import { Options } from "./options";
import React from "react";

export interface SelectProps {
  value?: string | number;
  label?: string;
  disabled?: boolean;
  error?: string;
  options?: Option[];
  onSelect?: (value: string | number) => void;
  placeholder?: string;
}

export const Select = (props: SelectProps) => {
  const {
    label,
    value,
    error,
    options = [],
    placeholder = "select...",
    disabled = false,
    onSelect,
  } = props;
  const modal = useModal();

  //const { colorScheme } = useColorScheme();
  //const isDark = colorScheme === 'dark';
  const onSelectOption = useCallback(
    (option: Option) => {
      onSelect?.(option.value);
      modal.dismiss();
    },
    [modal, onSelect]
  );

  //const { borderColor, bgColor, valueColor, labelColor } = useColors(!!error);

  const textValue =
    value !== undefined
      ? options?.filter((t) => t.value === value)?.[0]?.label ?? placeholder
      : placeholder;

  return (
    <>
      <View style={{ marginBottom: 16 }}>
        {label && <Text style={{}}>{label}</Text>}
        <TouchableOpacity
          style={{
            marginTop: 6,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            paddingHorizontal: 12,
            paddingVertical: 16,
            borderRadius: 8,
            //borderColor: '',
            backgroundColor: "#fafafa",
            borderColor: "#c4c3cb",
          }}
          disabled={disabled}
          onPress={modal.present}
        >
          <View style={{ flex: 1 }}>
            <Text style={{}}>{textValue}</Text>
          </View>
          <Icon name="chevron-down" size={14} color="gray" />
        </TouchableOpacity>
        {error && <Text>{error}</Text>}
      </View>
      <Options ref={modal.ref} options={options} onSelect={onSelectOption} />
    </>
  );
};

/* const useColors = (error: boolean) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const borderColor = error
    ? 'border-danger-600'
    : isDark
    ? 'border-charcoal-700'
    : 'border-neutral-400';

  const bgColor = isDark
    ? 'bg-charcoal-800'
    : error
    ? 'bg-danger-50'
    : 'bg-neutral-200';

  const labelColor = error
    ? 'text-danger-600'
    : isDark
    ? 'text-charcoal-100'
    : 'text-black';

  const valueColor = error
    ? 'text-danger-600'
    : isDark
    ? 'text-charcoal-100'
    : 'text-neutral-600';

  return { borderColor, bgColor, labelColor, valueColor } as const;
};
 */
