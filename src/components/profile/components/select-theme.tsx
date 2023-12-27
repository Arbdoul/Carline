import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import React from "react";
import Swtich from "../../reuseComponents/Swtich";
import { IconMoon } from "tabler-icons-react-native";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";
import { ColorSchemeType, useSelectedTheme } from "../../../core";
import { useModal } from "../../../ui/core/modal";
import { Options } from "../../../ui/core/select/options";
import type { Option } from "../../../ui/core/select/options";

export interface SelectProps {}

export const SelectTheme = (props: SelectProps) => {
  const {} = props;
  const modal = useModal();
  const { styles, theme } = useStyles();
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  console.log(UnistylesRuntime.themeName);

  const themes = React.useMemo(
    () => [
      { label: `Dark 🌙`, value: "dark" },
      { label: `Light 🌞`, value: "light" },
      { label: `System ⚙️`, value: "system" },
    ],
    []
  );
  const onSelect = React.useCallback(
    (option: Option) => {
      setSelectedTheme(option.value as ColorSchemeType);
      modal.dismiss();
    },
    [setSelectedTheme, modal]
  );

  return (
    <>
      <Swtich
        icon={<IconMoon color={theme.colors.gray400} size={24} />}
        text="Dark mode"
        backgroundColor={theme.colors.gray50}
        onPress={modal.present}
      />
      <Options ref={modal.ref} options={themes} onSelect={onSelect} />
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
