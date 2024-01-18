import React from "react";
import { useMMKVBoolean, useMMKVString } from "react-native-mmkv";

import { getItem, storage } from "../storage";
import {
  UnistylesRuntime,
  UnistylesThemes,
  useInitialTheme,
} from "react-native-unistyles";

const SELECTED_THEME = "SELECTED_THEME";
const IS_ADAPTIVE_THEME = "IS_ADAPTIVE_THEME";
export type ColorSchemeType = "light" | "dark" | "system";
/**
 * this hooks should only be used while selecting the theme
 * This hooks will return the selected theme which is stored in MMKV
 * selectedTheme should be one of the following values 'light', 'dark' or 'system'
 * don't use this hooks if you want to use it to style your component based on the theme use useColorScheme from nativewind instead
 *
 */
export const useSelectedTheme = () => {
  const [theme, _setTheme] = useMMKVString(SELECTED_THEME, storage);
  const [isAdaptiveTheme, setIsAdaptiveTheme] = useMMKVBoolean(
    IS_ADAPTIVE_THEME,
    storage
  );

  const setSelectedTheme = React.useCallback(
    (t: ColorSchemeType) => {
      console.log("select theme");
      switch (t) {
        case "light": {
          setIsAdaptiveTheme(false);
          UnistylesRuntime.setTheme("light");
          break;
        }
        case "dark": {
          setIsAdaptiveTheme(false);
          UnistylesRuntime.setTheme("dark");
          break;
        }
        default:
        case "system": {
          setIsAdaptiveTheme(true);
          break;
          // return UnistylesRuntime.setTheme('')
        }
      }
      _setTheme(t);
    },
    [setIsAdaptiveTheme, _setTheme]
  );

  const selectedTheme = (theme ?? "system") as ColorSchemeType;
  return { selectedTheme, setSelectedTheme } as const;
};
// to be used in the root file to load the selected theme from MMKV
export const useLoadSelectedTheme = () => {
  const theme = storage.getString(SELECTED_THEME);
  const isAdaptiveTheme = storage.getBoolean(IS_ADAPTIVE_THEME);
  //console.log(isAdaptiveTheme);
  useInitialTheme((theme as keyof UnistylesThemes) ?? "light");
  UnistylesRuntime.setAdaptiveThemes(isAdaptiveTheme ?? true);
  // if (theme !== undefined) {
  console.log("theme", theme);
  // NativeWindStyleSheet.setColorScheme(theme as ColorSchemeType);
  // }
};
