import { useState, createContext, ReactNode, useEffect } from "react";
import { WeatherResponse } from "@/types";
import { colors } from "@/constants/constants";
import getForecast from "@/utils/getForeCast";

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
  data: WeatherResponse | null;
  setData: React.Dispatch<React.SetStateAction<WeatherResponse | null>>;
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
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [query, setQuery] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [cities, setCities] = useState<City[] | null>(null);
  const [theme, setTheme] = useState<themeType>(colors.Neutral);
  const [forecast, setForecast] = useState<any | null>(null);

  useEffect(() => {
    async function load() {
      const f = await getForecast(query ?? undefined);
      setForecast(f.forecast.forecastday);
      setData(f);
    }
    load();
  }, [query]);

  useEffect(() => {
    if (!data) return;
    const condition = data.current.condition.text.toLowerCase();
    const isDay = data.current.is_day;
    function getTheme() {
      if (condition.includes("thunder")) {
        return isDay ? colors.Thunderstorm : colors.ThunderstormNight;
      }
      if (condition.includes("rain")) {
        return isDay ? colors.Rain : colors.RainNight;
      }
      if (condition.includes("snow")) {
        return isDay ? colors.Snow : colors.SnowNight;
      }
      if (condition.includes("cloud") || condition.includes("overcast")) {
        return isDay ? colors.Clouds : colors.CloudsNight;
      }
      if (
        condition.includes("mist") ||
        condition.includes("fog") ||
        condition.includes("haze")
      ) {
        return isDay ? colors.Mist : colors.MistNight;
      }
      if (condition.includes("clear") || condition.includes("sunny")) {
        return isDay ? colors.Clear : colors.ClearNight;
      }

      return colors.Neutral;
    }
    const themeResult = getTheme();
    setTheme(themeResult);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
