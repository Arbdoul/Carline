// theme.ts
export const theme = {
  colors: {
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
  },
  typography: {
    // Headings
    h1: {
      fontFamily: "Urbanist_700Bold",
      fontSize: 48,
      letterSpacing: -1,
    },
    h2: {
      fontFamily: "Urbanist_700Bold",
      fontSize: 40,
      letterSpacing: 0,
    },
    h3: {
      fontFamily: "Urbanist_700Bold",
      fontSize: 32,
      letterSpacing: 0,
    },
    h4: {
      fontFamily: "Urbanist_700Bold",
      fontSize: 24,
      letterSpacing: 0,
    },
    h5: {
      fontFamily: "Urbanist_700Bold",
      fontSize: 20,
      letterSpacing: 0,
    },
    h6: {
      fontFamily: "Urbanist_700Bold",
      fontSize: 18,
      letterSpacing: 0,
    },

    // Body styles
    bodyXLarge: {
      regular: {
        fontFamily: "Urbanist_400Regular",
        fontSize: 18,
        letterSpacing: 0.4,
      },
      medium: {
        fontFamily: "Urbanist_500Medium",
        fontSize: 18,
        letterSpacing: 0.4,
      },
      bold: {
        fontFamily: "Urbanist_700Bold",
        fontSize: 18,
        letterSpacing: 0.3,
      },
    },
    bodyLarge: {
      regular: {
        fontFamily: "Urbanist_400Regular",
        fontSize: 16,
        letterSpacing: 0.4,
      },
      medium: {
        fontFamily: "Urbanist_500Medium",
        fontSize: 16,
        letterSpacing: 0.4,
      },
      bold: {
        fontFamily: "Urbanist_700Bold",
        fontSize: 16,
        letterSpacing: 0.4,
      },
    },
    bodyMedium: {
      regular: {
        fontFamily: "Urbanist_400Regular",
        fontSize: 14,
        letterSpacing: 0.5,
      },
      medium: {
        fontFamily: "Urbanist_500Medium",
        fontSize: 14,
        letterSpacing: 0.5,
      },
      bold: {
        fontFamily: "Urbanist_700Bold",
        fontSize: 14,
        letterSpacing: 0.4,
      },
    },
    bodySmall: {
      regular: {
        fontFamily: "Urbanist_400Regular",
        fontSize: 12,
        letterSpacing: 0.5,
      },
      medium: {
        fontFamily: "Urbanist_500Medium",
        fontSize: 12,
        letterSpacing: 0.5,
      },
      bold: {
        fontFamily: "Urbanist_700Bold",
        fontSize: 12,
        letterSpacing: 0.5,
      },
    },
    bodyXSmall: {
      regular: {
        fontFamily: "Urbanist_400Regular",
        fontSize: 10,
        letterSpacing: 0.5,
      },
      medium: {
        fontFamily: "Urbanist_500Medium",
        fontSize: 10,
        letterSpacing: 0.5,
      },
      bold: {
        fontFamily: "Urbanist_700Bold",
        fontSize: 10,
        letterSpacing: 0.5,
      },
    },
  },
  utils: {
    hexToRGBA: (hex: string, opacity: number) => {
      const rgb = hex
        .replace("#", "")
        .split(/(?=(?:..)*$)/)
        .map((x) => parseInt(x, 16));
      return `rgba(${rgb.at(0)}, ${rgb.at(1)}, ${rgb.at(2)}, ${opacity})`;
    },
  },
};

export * from "./styles";
