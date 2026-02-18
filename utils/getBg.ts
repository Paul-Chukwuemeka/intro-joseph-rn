import { colors } from "@/constants/constants";



const getWeatherColor = (conditionText: string, isDay: number): string => {
  const text = conditionText.toLowerCase();
  const night = isDay === 0; // 0 = night, 1 = day

  if (text.includes("thunder"))
    return night ? colors.ThunderstormNight : colors.Thunderstorm;
  if (text.includes("rain")) return night ? colors.RainNight : colors.Rain;
  if (text.includes("snow")) return night ? colors.SnowNight : colors.Snow;
  if (text.includes("cloud")) return night ? colors.CloudsNight : colors.Clouds;
  if (text.includes("mist") || text.includes("fog"))
    return night ? colors.MistNight : colors.Mist;
  if (text.includes("clear") || text.includes("sunny"))
    return night ? colors.ClearNight : colors.Clear;

  return colors.black;
};


export {getWeatherColor}