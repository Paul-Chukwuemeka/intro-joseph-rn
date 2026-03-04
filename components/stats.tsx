import { style } from "@/constants/stylesheet";
import Lucide from "@react-native-vector-icons/lucide";
import { useContext } from "react";
import { Text, View } from "react-native";
import { AppContext } from "@/context/appContext";

const Stats = () => {
  const { theme,currentWeather } = useContext(AppContext)!;

  return (
    <View style={[style.stats, { backgroundColor: theme.card }]}>
      <View style={style.statBox}>
        <Lucide name="waves" style={style.icon} color={theme.accent} />
        <Text style={[style.statValue, { color: theme.primaryText }]}>
          {currentWeather && currentWeather.wind_speed_10m} km/h
        </Text>
        <Text style={[style.statProp, { color: theme.secondaryText }]}>Wind</Text>
      </View>
      <View style={style.statBox}>
        <Lucide name="droplet" style={style.icon} color={theme.accent} />
        <Text style={[style.statValue, { color: theme.primaryText }]}>
          {currentWeather && currentWeather.relative_humidity_2m}%
        </Text>
        <Text style={[style.statProp, { color: theme.secondaryText }]}>Humidity</Text>
      </View>
      <View style={style.statBox}>
        <Lucide name="eye" style={style.icon} color={theme.accent} />
        <Text style={[style.statValue, { color: theme.primaryText }]}>
          {currentWeather?.visibility}km
        </Text>
        <Text style={[style.statProp, { color: theme.secondaryText }]}>Visibility</Text>
      </View>
    </View>
  );
};

export default Stats;
