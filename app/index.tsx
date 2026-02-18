import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { getDate } from "@/utils/getDate";
import {
  spacing,
  typography,
  radius,
  lineHeight,
  fontWeights,
  letterSpacings,
  dummyForecast,
  colors,
} from "@/constants/constants";
import { Lucide } from "@react-native-vector-icons/lucide";
import getWeather from "@/utils/getWeather";
import useLoadFonts from "@/hooks/useLoadFonts";
import { style } from "@/constants/stylesheet";
import Header from "@/components/header";
import { getWeatherColor } from "@/utils/getBg";

SplashScreen.preventAutoHideAsync().catch(() => {});

const Home = () => {
  const { fontsLoaded, fontError } = useLoadFonts();
  const [data, setData] = useState(null);
  const [color, setColor] = useState("#fbfbfb");
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontError, fontsLoaded]);

  useEffect(() => {
    async function load() {
      const d = await getWeather();
      console.log(d);

      const c = getWeatherColor(d.current.condition.text, d.current.is_day);
      setColor(c);
      setData(d);
    }

    load();
  }, []);

  if (!fontsLoaded && !fontError && !data) return null;
  const date = getDate();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[style.container, { backgroundColor: color }]}>
        {data && (
          <ScrollView
            style={style.scroll}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={style.scrollContent}
          >
            <Header />
            <View style={{ marginTop: spacing.section }}>
              <Text style={style.date}>{date}</Text>
              <Text style={style.weather}>{data.current.condition.text}</Text>
            </View>
            <View style={{ marginTop: spacing.xxl }}>
              <Text style={style.temp}>
                {Math.round(data.current.temp_c)}°
              </Text>{" "}
            </View>
            <View>
              <Text
                style={{
                  fontFamily: fontWeights.ExtraBold,
                  fontSize: typography.h2,
                  marginBottom: spacing.sm,
                  letterSpacing: letterSpacings.h2,
                }}
              >
                Daily Summary
              </Text>
              <Text
                style={{
                  fontSize: typography.body,
                  fontFamily: fontWeights.Medium,
                }}
              >
                It feels like{" "}
                <Text>{Math.round(data.current.feelslike_c)}</Text>°.
              </Text>
              {/* <Text
                style={{
                  fontSize: typography.body,
                  fontFamily: fontWeights.Medium,
                }}
              >
                It feels hot because of the direct sun. Today, the temperature
                is felt in the range from 31° to 27°.
              </Text> */}
            </View>
            <View style={style.stats}>
              <View style={style.statBox}>
                <Lucide name="waves" style={style.icon} color={color} />
                <Text style={[style.statValue, { color: color }]}>4km/h</Text>
                <Text style={[style.statProp, { color: color }]}>Wind</Text>
              </View>{" "}
              <View style={style.statBox}>
                <Lucide name="droplet" style={style.icon} color={color} />
                <Text style={[style.statValue, { color: color }]}>4km/h</Text>
                <Text style={[style.statProp, { color: color }]}>Wind</Text>
              </View>{" "}
              <View style={style.statBox}>
                <Lucide name="eye" style={style.icon} color={color} />
                <Text style={[style.statValue, { color: color }]}>4km/h</Text>
                <Text style={[style.statProp, { color: color }]}>Wind</Text>
              </View>
            </View>
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
                  }}
                >
                  Weekly forecast
                </Text>
                <Lucide name="move-right" style={style.icon} />
              </View>
              <View style={style.forecasts}>
                {dummyForecast.map((d, i) => {
                  return (
                    <View key={i} style={style.forecast}>
                      <Text
                        style={{
                          fontSize: typography.cardTemp,
                          fontFamily: fontWeights.SemiBold,
                        }}
                      >
                        {d.temp}°
                      </Text>
                      <Lucide name="sun" style={{ fontSize: typography.h2 }} />
                      <Text
                        style={{
                          fontSize: typography.caption,
                          fontFamily: fontWeights.SemiBold,
                        }}
                      >
                        {d.date}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
