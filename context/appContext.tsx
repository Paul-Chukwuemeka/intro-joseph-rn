import { useState, createContext, ReactNode, useEffect } from "react";
import { OpenMeteoWeatherResponse,WeatherCategory } from "@/types";
import { colors } from "@/constants/constants";
import getForecast from "@/utils/getForeCast";
import { currentLocation } from "@/utils/currentlocation";

export type themeType = {
  background: string;
  card: string;
  primaryText: string;
  secondaryText: string;
  accent: string;
};
type City = {
  name: string;
  country: string;
  region: string;
};

type appContextType = {
  data: OpenMeteoWeatherResponse | null;
  setData: React.Dispatch<
    React.SetStateAction<OpenMeteoWeatherResponse | null>
  >;
  setForecast: React.Dispatch<React.SetStateAction<any | null>>;
  forecast: any | null;
  theme: themeType;
  setTheme: React.Dispatch<React.SetStateAction<themeType>>;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  isSearch: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setCities: React.Dispatch<React.SetStateAction<City[] | null>>;
  cities: City[] | null;
  searchQuery: string;
};

export const AppContext = createContext<appContextType | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OpenMeteoWeatherResponse | null>(null);
  const [query, setQuery] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [cities, setCities] = useState<City[] | null>(null);
  const [theme, setTheme] = useState<themeType>(colors.Neutral);
  const [forecast, setForecast] = useState<any | null>(null);

  useEffect(() => {
    async function load() {
      const f = await getForecast();
      setData(f);
    }
    load();
  }, [query]);

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

  currentLocation()

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
