import { useState, createContext, ReactNode, useEffect } from "react";
import { colors } from "@/constants/constants";
import getForecast from "@/utils/getForeCast";
import { getCurrentLocation } from "@/utils/currentlocation";
import {
  CurrentWeather,
  appContextType,
  themeType,
  City,
  day,
  OpenMeteoWeatherResponse,
  WeatherCategory,
} from "@/types";

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
  const [today, setToday] = useState<day | null>(null);
  const [weekForecast, setWeekForecast] = useState<day[] | null>(null);

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
        case "Rainy":
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
      const dailyList: day[] = [];
      data?.daily.time.map((day, i) => {
        dailyList.push({
          sunrise: data.daily.sunrise[i],
          sunset: data.daily.sunset[i],
          time: day,
          humidity_mean: data.daily.relative_humidity_2m_mean[i],
          temperature_max: data.daily.temperature_2m_max[i],
          temperature_mean: data.daily.temperature_2m_mean[i],
          temperature_min: data.daily.temperature_2m_min[i],
          feel_max: data.daily.apparent_temperature_max[i],
          feel_mean: data.daily.apparent_temperature_mean[i],
          feel_min: data.daily.apparent_temperature_min[i],
          rain: data.daily.rain_sum[i],
          uv_max: data.daily.uv_index_max[i],
          uv_clear_max: data.daily.uv_index_clear_sky_max[i],
          wind_speed: data.daily.wind_speed_10m_max[i],
          daylight_duration: data.daily.daylight_duration[i],
          sunshine_duration: data.daily.sunshine_duration[i],
          weather_code: data.daily.weather_code[i],
          precipitation_hrs: data.daily.precipitation_hours[i],
          precipitation_sum: data.daily.precipitation_sum[i],
          showers_sum: data.daily.showers_sum[i],
          wind_direction_10m_dominant: data.daily.wind_direction_10m_dominant[i],
          wind_gusts_10m_max: data.daily.wind_gusts_10m_max[i],
        });
      });
      setWeekForecast(dailyList);
      setToday(dailyList[0]);
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
        today,
        weekForecast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
