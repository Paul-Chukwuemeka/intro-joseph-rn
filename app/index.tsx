import Header from "@/components/layout/header";
import {

  spacing,
} from "@/constants/constants";
import { style } from "@/constants/stylesheet";
import useLoadFonts from "@/hooks/useLoadFonts";
import * as SplashScreen from "expo-splash-screen";
import React, { useContext, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SearchField from "@/components/searchField";
import { AppContext } from "@/context/appContext";
import { StatusBar } from "expo-status-bar";
import Counter from "@/components/layout/TempCount";
import { WeatherCategory } from "@/types";
import Summary from "@/components/layout/summary";
import DailyForecast from "@/components/layout/DailyForecast";
import HourlyForecast from "@/components/layout/HourlyForeCast";

SplashScreen.preventAutoHideAsync().catch(() => {});

const Home = () => {
  const { fontsLoaded, fontError } = useLoadFonts();
  const { data, theme, isSearch, currentWeather } = useContext(AppContext)!;
  useEffect(() => {
    if ((fontsLoaded && data) || (fontError && data)) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontError, fontsLoaded, data]);

  if (!fontsLoaded && !fontError && !data) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style={"light"} />
      <SafeAreaView
        style={[style.container, { backgroundColor: theme.background }]}
      >
        {isSearch && <SearchField />}
        {data && (
          <ScrollView
            style={style.scroll}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={style.scrollContent}
          >
            <Header />
            {currentWeather && (
              <View>
                <View style={{ marginTop: spacing.md }}>
                  <Text style={[style.weather, { color: theme.secondaryText }]}>
                    {WeatherCategory[currentWeather.weather_code]}
                  </Text>
                </View>
                <Counter target={Math.round(currentWeather.temperature_2m)} />
                <Summary />
                <DailyForecast />
                <HourlyForecast/>
              </View>
            )}
          </ScrollView>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
