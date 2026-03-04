import { View, Text } from "react-native";
import {
  fontWeights,
  letterSpacings,
  lineHeight,
  spacing,
  typography,
} from "@/constants/constants";
import { useContext } from "react";
import { AppContext } from "@/context/appContext";
// import { day } from "@/types";
import { style } from "@/constants/stylesheet";
import { WeatherCategory } from "@/types";

function humidityLevel(humidity: number) {
  if (humidity <= 30) return "Dry";
  if (humidity <= 50) return "Comfortable";
  if (humidity <= 70) return "Humid";
  return "Very Humid";
}

function heatLevel(temp: number) {
  if (temp <= 10) return "Cold";
  if (temp <= 20) return "Cool";
  if (temp <= 30) return "Warm";
  if (temp <= 35) return "Hot";
  if (temp <= 40) return "Very Hot";
  return "Extreme Heat";
}

function windLevel(speed: number) {
  if (speed <= 5) return "Calm";
  if (speed <= 15) return "Light Breeze";
  if (speed <= 30) return "Moderate Wind";
  if (speed <= 50) return "Strong Wind";
  if (speed <= 75) return "Very Strong Wind";
  return "Severe Wind";
}

function rainLevel(mm:number) {
  console.log(mm)
  if (mm === 0) return "No Rain";
  if (mm <= 2.5) return "Light Rain";
  if (mm <= 7.5) return "Moderate Rain";
  if (mm <= 20) return "Heavy Rain";
  if (mm <= 50) return "Very Heavy Rain";
  return "Extreme Rain";
}

const Summary = () => {
  const { theme, today } = useContext(AppContext)!;
  console.log(today)
  return (
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
        Today at a glance
      </Text>
      <Text
        style={[
          style.summary,
          {
            color: theme.secondaryText,
          },
        ]}
      >
        {heatLevel(today!.feel_mean)},{" "}
        {humidityLevel(today!.humidity_mean)}, and {WeatherCategory[today!.weather_code]}.
      </Text>
      <Text
        style={[
          style.summary,
          {
            color: theme.secondaryText,
          },
        ]}
      >
        High: {today?.temperature_max}°C
      </Text>
      <Text
        style={[
          style.summary,
          {
            color: theme.secondaryText,
          },
        ]}
      >
        Feels like: {today?.feel_mean}°C
      </Text>
      <Text
        style={[
          style.summary,
          {
            color: theme.secondaryText,
          },
        ]}
      >
        Low: {today?.temperature_min}°C
      </Text>
      <Text
        style={[
          style.summary,
          {
            color: theme.secondaryText,
          },
        ]}
      >
        {windLevel(today!.wind_speed)}. {rainLevel(today!.rain)}
      </Text>
    </View>
  );
};

export default Summary;
