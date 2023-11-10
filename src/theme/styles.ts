// styles.ts

// import library factory
import { createUnistyles } from "react-native-unistyles";
// import your breakpoints, add whatever keys and numeric values you want
import { breakpoints } from "./breakpoints";
// import your app's theme TypeScript type, or simply use 'typeof theme'
import { theme } from "./index";

export const { createStyleSheet, useStyles } = createUnistyles<
  typeof breakpoints,
  typeof theme
>(breakpoints);
