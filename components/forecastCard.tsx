import { View,Image,Text } from "react-native";
import React, { useContext } from "react";
import { style } from "@/constants/stylesheet";
import { typography, fontWeights } from "@/constants/constants";
import { AppContext } from "@/context/appContext";
import { ForecastDay } from "@/types";

const ForecastCard = ({ d }: { d: ForecastDay }) => {
  const { theme } = useContext(AppContext)!;
  return (
    <View style={[style.forecast, { backgroundColor: theme.card }]}>
      <Text
        style={{
          fontSize: typography.cardTemp,
          fontFamily: fontWeights.SemiBold,
          color: theme.primaryText,
        }}
      >
        {Math.floor(d.day.avgtemp_c)}°
      </Text>
      <Image
        source={{ uri: `https:${d.day.condition.icon}` }}
        style={style.image}
        resizeMode="cover"
      />
      <Text
        style={{
          fontSize: typography.caption,
          fontFamily: fontWeights.SemiBold,
          color: theme.secondaryText,
        }}
      >
        {d.date}
      </Text>
    </View>
  );
};

export default ForecastCard;
