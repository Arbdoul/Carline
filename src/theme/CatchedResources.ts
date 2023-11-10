import {
  Urbanist_100Thin,
  Urbanist_100Thin_Italic,
  Urbanist_200ExtraLight,
  Urbanist_200ExtraLight_Italic,
  Urbanist_300Light,
  Urbanist_300Light_Italic,
  Urbanist_400Regular,
  Urbanist_400Regular_Italic,
  Urbanist_500Medium,
  Urbanist_500Medium_Italic,
  Urbanist_600SemiBold,
  Urbanist_600SemiBold_Italic,
  Urbanist_700Bold,
  Urbanist_700Bold_Italic,
  Urbanist_800ExtraBold,
  Urbanist_800ExtraBold_Italic,
  Urbanist_900Black,
  Urbanist_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/urbanist";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const [fontsLoaded] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_100Thin,
    Urbanist_100Thin_Italic,
    Urbanist_200ExtraLight,
    Urbanist_200ExtraLight_Italic,
    Urbanist_300Light,
    Urbanist_300Light_Italic,
    Urbanist_400Regular,
    Urbanist_400Regular_Italic,
    Urbanist_500Medium_Italic,
    Urbanist_600SemiBold,
    Urbanist_600SemiBold_Italic,
    Urbanist_700Bold_Italic,
    Urbanist_800ExtraBold,
    Urbanist_800ExtraBold_Italic,
    Urbanist_900Black,
    Urbanist_900Black_Italic,
  });

  useEffect(() => {
    async function loaded() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setLoadingComplete(true);
      }
    }
    loaded();
  }, [fontsLoaded]);

  return isLoadingComplete;
}
