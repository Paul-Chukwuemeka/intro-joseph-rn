import { useState, createContext, ReactNode, useEffect } from "react";
import { OpenMeteoWeatherResponse, WeatherCategory } from "@/types";
import { colors } from "@/constants/constants";
import getForecast from "@/utils/getForeCast";
import { getCurrentLocation } from "@/utils/currentlocation";
import {
  WeatherUnits,
  CurrentWeather,
  appContextType,
  themeType,
  City,
} from "@/types";

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
    console.log(data);

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
      const daily = [];
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
        currentWeather
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
