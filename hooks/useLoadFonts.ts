import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { useEffect } from "react";

const useLoadFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Inter_400Regular,
    Poppins_500Medium,
    Inter_500Medium,
    Poppins_600SemiBold,
    Inter_600SemiBold,
    Poppins_700Bold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Poppins_800ExtraBold,
    Inter_900Black,
  });

  useEffect(() => {
    if (fontError) {
      console.error("Font loading failed:", fontError);
    }
  }, [fontError]);

  return { fontsLoaded, fontError };
};

export default useLoadFonts;
