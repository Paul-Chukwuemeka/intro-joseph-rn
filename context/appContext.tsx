import { useState, createContext, ReactNode, useEffect } from "react";
import { day, OpenMeteoWeatherResponse, WeatherCategory } from "@/types";
import { colors } from "@/constants/constants";
import getForecast from "@/utils/getForeCast";
import { getCurrentLocation } from "@/utils/currentlocation";
import { CurrentWeather, appContextType, themeType, City } from "@/types";

class WeatherItem {
  [key: string]: string;

  constructor(key: string, value: string) {
    this[`${key}`] = value;
  }
}

export const AppContext = createContext<appContextType | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OpenMeteoWeatherResponse | null>(null);
  const [query, setQuery] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [cities, setCities] = useState<City[] | null>(null);
  const [theme, setTheme] = useState<themeType>(colors.Neutral);
  const [forecast, setForecast] = useState<any | null>(null);
  const [currentLocation, setCurrentLocation] = useState<string[] | null>(null);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null,
  );
  const []

  useEffect(() => {
    async function load() {
      const f = await getForecast();
      setData(f);
    }
    load();
  }, [query]);

  useEffect(() => {
    async function getCurrent() {
      const c = await getCurrentLocation();
      setCurrentLocation(c);
    }
    getCurrent();
  }, []);

  useEffect(() => {
    if (!data) return;
    const weatherCode = data.current.weather_code;
    const isDay = data.current.is_day;

    function getTheme(weatherCode: number, isDay: number) {
      const category = WeatherCategory[weatherCode] ?? "Neutral";

      switch (category) {
        case "Thunderstorm":
          return isDay ? colors.Thunderstorm : colors.ThunderstormNight;
        case "Rain":
          return isDay ? colors.Rain : colors.RainNight;
        case "Snow":
          return isDay ? colors.Snow : colors.SnowNight;
        case "Clouds":
          return isDay ? colors.Clouds : colors.CloudsNight;
        case "Mist":
          return isDay ? colors.Mist : colors.MistNight;
        case "Clear":
          return isDay ? colors.Clear : colors.ClearNight;
        default:
          return colors.Neutral;
      }
    }
    const themeResult = getTheme(weatherCode, isDay);
    setTheme(themeResult);
  }, [data]);

  useEffect(() => {
    if (!data) return;
    function configData() {
      setCurrentWeather(data && data.current);
      const dailyList: any[] = [];
      data?.daily.time.map((day, i) => {
        dailyList.push({
          sunrise: data.daily.sunrise[i],
          sunset: data.daily.sunset[i],
          date: day,
          temperature_max: data.daily.temperature_2m_max[i],
          temperature_mean: data.daily.temperature_2m_mean[i],
          temperature_min: data.daily.temperature_2m_min[i],
          feel_max: data.daily.apparent_temperature_max,
          feel_mean: data.daily.apparent_temperature_mean,
          feel_min: data.daily.apparent_temperature_min,
          rain: data.daily.rain_sum,
          uv_max: data.daily.uv_index_max,
          uv_clear_max: data.daily.uv_index_clear_sky_max,
          wind_speed: data.daily.wind_speed_10m_max,
          daylight_duration: data.daily.daylight_duration,
          sunshine_duration: data.daily.sunshine_duration,
          weather_code: data.daily.weather_code,
          precipitaion_hrs: data.daily.precipitation_hours,
          precipitaion_sum: data.daily.precipitation_sum,
        });
      });
      console.log(dailyList);
    }
    configData();
  }, [data]);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        theme,
        setTheme,
        isSearch,
        setIsSearch,
        setQuery,
        setSearchQuery,
        cities,
        searchQuery,
        setCities,
        forecast,
        setForecast,
        currentLocation,
        currentWeather,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
