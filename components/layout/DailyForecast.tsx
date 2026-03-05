import { View, Text } from "react-native";
import React, { useContext } from "react";
import { style } from "@/constants/stylesheet";
import { AppContext } from "@/context/appContext";
import { DayIcon } from "@/constants/icons";


const DailyForecast = () => {
  const { theme, weekForecast } = useContext(AppContext)!;
  return (
    <View style={[style.forecast, { backgroundColor: theme.card }]}>
      <View style={style.forecastHeader}>
        <DayIcon color={theme.primaryText} />
        <Text style={[style.forecastHeadertext, { color: theme.primaryText }]}>
          Daily Forecast
        </Text>
      </View> 
      <View style={[style.forecastOptions,{backgroundColor:theme.background}]}>
        
      </View>
    </View>
  );
};

export default DailyForecast;
