import { View, Text } from "react-native";
import React, { useContext } from "react";
import { style } from "@/constants/stylesheet";
import { AppContext } from "@/context/appContext";
import { ClockIcon } from "@/constants/icons";

const HourlyForeCast = () => {
  const { theme, weekForecast } = useContext(AppContext)!;
  return (
    <View style={[style.forecast, { backgroundColor: theme.card }]}>
      <View style={style.forecastHeader}>
        <ClockIcon color={theme.primaryText} />
        <Text style={[style.forecastHeadertext, { color: theme.primaryText }]}>
          Hourly Forecast
        </Text>
      </View>
    </View>
  );
};

export default HourlyForeCast;
