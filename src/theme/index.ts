import { UnistylesRegistry } from "react-native-unistyles";
// theme.ts
export const paperTheme = {
  colors: {
    primary: "rgb(65, 57, 255)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(225, 223, 255)",
    onPrimaryContainer: "rgb(9, 0, 107)",
    secondary: "rgb(93, 92, 114)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(226, 224, 249)",
    onSecondaryContainer: "rgb(26, 26, 44)",
    tertiary: "rgb(121, 83, 105)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 216, 236)",
    onTertiaryContainer: "rgb(47, 17, 36)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(28, 27, 31)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(28, 27, 31)",
    surfaceVariant: "rgb(228, 225, 236)",
    onSurfaceVariant: "rgb(71, 70, 79)",
    outline: "rgb(119, 118, 128)",
    outlineVariant: "rgb(200, 197, 208)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(49, 48, 52)",
    inverseOnSurface: "rgb(243, 239, 244)",
    inversePrimary: "rgb(193, 193, 255)",
    elevation: {
      level0: "transparent",
      level1: "rgb(246, 241, 255)",
      level2: "rgb(240, 236, 255)",
      level3: "rgb(234, 230, 255)",
      level4: "rgb(232, 228, 255)",
      level5: "rgb(228, 224, 255)",
    },
    surfaceDisabled: "rgba(28, 27, 31, 0.12)",
    onSurfaceDisabled: "rgba(28, 27, 31, 0.38)",
    backdrop: "rgba(48, 48, 56, 0.4)",
  },
};

const colors = {
  // primary
  primary50: "#F5F5FF",
  primary100: "#C6C3FF",
  primary200: "#A09CFF",
  primary300: "#7974FF",
  primary400: "#534CFF",
  primary: "#4038FF",
  // secondary
  secondary50: "#F1F5F9",
  secondary100: "#CBD5E1",
  secondary200: "#64748B",
  secondary300: "#334155",
  secondary400: "#1E293B",
  secondary: "#0F172A",
  // gray
  gray50: "#F8FAFC",
  gray100: "#F1F5F9",
  gray200: "#EEF2F6",
  gray300: "#CBD5E1",
  gray400: "#94A3B8",
  gray500: "#64748B",
  gray600: "#475569",
  gray700: "#2A3646",
  gray800: "#1B2537",
  gray900: "#0F172A",
  // alert colors
  success: "#22C55E",
  successLight: "#4ADE80",
  successDark: "#16A34A",
  warning: "#FACC15",
  warningLight: "#FDE047",
  warningDark: "#EAB308",
  error: "#FF4747",
  errorLight: "#FF7171",
  errorDark: "#DD3333",
  // additional colors
  white: "#ffffff",
  orange: "#FE964A",
  blue: "#0062FF",
  purple: "#8C62FF",
};

const typography = {
  // Headings
  h1: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 48,
    letterSpacing: -1,
    // color: theme === "dark" ? colors.gray900 : colors.gray50,
  },
  h2: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 40,
    letterSpacing: 0,
    // color: theme === "dark" ? colors.gray900 : colors.gray50,
  },
  h3: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 32,
    letterSpacing: 0,
    // color: theme === "dark" ? colors.gray900 : colors.gray50,
  },
  h4: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 24,
    letterSpacing: 0,
    // color: theme === "dark" ? colors.gray900 : colors.gray50,
  },
  h5: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 20,
    letterSpacing: 0,
    // color: theme === "dark" ? colors.gray900 : colors.gray50,
  },
  h6: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 18,
    letterSpacing: 0,
    // color: theme === "dark" ? colors.gray900 : colors.gray50,
  },

  // Body styles
  bodyXLarge: {
    regular: {
      fontFamily: "Urbanist_400Regular",
      fontSize: 18,
      letterSpacing: 0.4,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
    medium: {
      fontFamily: "Urbanist_500Medium",
      fontSize: 18,
      letterSpacing: 0.4,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
    bold: {
      fontFamily: "Urbanist_700Bold",
      fontSize: 18,
      letterSpacing: 0.3,
      //color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
  },
  bodyLarge: {
    regular: {
      fontFamily: "Urbanist_400Regular",
      fontSize: 16,
      letterSpacing: 0.4,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
    medium: {
      fontFamily: "Urbanist_500Medium",
      fontSize: 16,
      letterSpacing: 0.4,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
    bold: {
      fontFamily: "Urbanist_700Bold",
      fontSize: 16,
      letterSpacing: 0.4,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
  },
  bodyMedium: {
    regular: {
      fontFamily: "Urbanist_400Regular",
      fontSize: 14,
      letterSpacing: 0.5,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
    medium: {
      fontFamily: "Urbanist_500Medium",
      fontSize: 14,
      letterSpacing: 0.5,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
    bold: {
      fontFamily: "Urbanist_700Bold",
      fontSize: 14,
      letterSpacing: 0.4,
      //   color: theme === "light" ? colors.gray900 : colors.gray50,
    },
  },
  bodySmall: {
    regular: {
      fontFamily: "Urbanist_400Regular",
      fontSize: 12,
      letterSpacing: 0.5,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
    medium: {
      fontFamily: "Urbanist_500Medium",
      fontSize: 12,
      letterSpacing: 0.5,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
    bold: {
      fontFamily: "Urbanist_700Bold",
      fontSize: 12,
      letterSpacing: 0.5,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
  },
  bodyXSmall: {
    regular: {
      fontFamily: "Urbanist_400Regular",
      fontSize: 10,
      letterSpacing: 0.5,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
    medium: {
      fontFamily: "Urbanist_500Medium",
      fontSize: 10,
      letterSpacing: 0.5,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
    bold: {
      fontFamily: "Urbanist_700Bold",
      fontSize: 10,
      letterSpacing: 0.5,
      // color: theme === "dark" ? colors.gray900 : colors.gray50,
    },
  },
};

const utils = {
  hexToRGBA: (hex: string, opacity: number) => {
    const rgb = hex
      .replace("#", "")
      .split(/(?=(?:..)*$)/)
      .map((x) => parseInt(x, 16));
    return `rgba(${rgb.at(0)}, ${rgb.at(1)}, ${rgb.at(2)}, ${opacity})`;
  },
};

export const lightTheme = {
  colors: {
    card: colors.gray50,
    text: colors.gray900,
    background: colors.white,
    ...colors,
  },
  typography,
  //: typography("light"),
  utils,
};
export const darkTheme = {
  colors: {
    card: colors.gray800,
    text: colors.gray50,
    background: colors.gray900,
    ...colors,
  },
  typography,
  //: typography("dark"),
  utils,
};

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
}).addConfig({
  // initialTheme: "light",
  adaptiveThemes: true,
});
