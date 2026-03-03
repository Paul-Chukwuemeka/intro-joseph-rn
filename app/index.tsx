import Header from "@/components/header";
import {
  fontWeights,
  letterSpacings,
  lineHeight,
  spacing,
  typography,
} from "@/constants/constants";
import { style } from "@/constants/stylesheet";
import useLoadFonts from "@/hooks/useLoadFonts";
import { Lucide } from "@react-native-vector-icons/lucide";
import * as SplashScreen from "expo-splash-screen";
import React, { useContext, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ForecastCard from "@/components/forecastCard";
import SearchField from "@/components/searchField";
import Stats from "@/components/stats";
import { AppContext } from "@/context/appContext";
import { StatusBar } from "expo-status-bar";
import Counter from "@/components/TempCount";

SplashScreen.preventAutoHideAsync().catch(() => {});

const Home = () => {
  const { fontsLoaded, fontError } = useLoadFonts();
  const { data, theme, isSearch, forecast,currentWeather } = useContext(AppContext)!;
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
            <View style={{ marginTop: spacing.md }}>
              <Text style={[style.weather, { color: theme.secondaryText }]}>
                {/* {data.current.condition.text} */}
              </Text>
            </View>
              {/* <Counter target={Math.round(data.current.temp_c)} />
            <View
              style={{
                marginTop: spacing.section,
              }}
            >
              <Text
                style={{
                  fontFamily: fontWeights.ExtraBold,
                  fontSize: typography.h2,
                  letterSpacing: letterSpacings.h2,
                  color: theme.secondaryText,
                  lineHeight: lineHeight.body,
                }}
              >
                Daily Summary
              </Text>
              <Text
                style={{
                  fontSize: typography.body,
                  fontFamily: fontWeights.Medium,
                  color: theme.secondaryText,
                }}
              >
                It feels like
                <Text> {Math.round(data.current.feelslike_c)}</Text>°.
              </Text>
            </View>
            <Stats />
            <View style={{ marginTop: spacing.section }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: typography.h2,
                    fontFamily: fontWeights.ExtraBold,
                    color: theme.secondaryText,
                  }}
                >
                  Weekly forecast
                </Text>
                <Lucide
                  name="move-right"
                  style={[style.icon, { color: theme.secondaryText }]}
                />
              </View>
              <View style={style.forecasts}>
                {forecast.map((d: any, i: number) => {
                  return <ForecastCard key={i} d={d} />;
                })}
              </View>
            </View> */}
          </ScrollView>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
