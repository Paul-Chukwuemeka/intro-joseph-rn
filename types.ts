export type OpenMeteoWeatherResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current: CurrentWeather;
  daily: DailyWeather;

  hourly: HourlyWeather;
};

export interface DailyWeather {
  time: string[];
  apparent_temperature_max: number[];
  apparent_temperature_mean: number[];
  apparent_temperature_min: number[];
  daylight_duration: number[];
  precipitation_hours: number[];
  precipitation_sum: number[];
  rain_sum: number[];
  showers_sum: number[];
  sunrise: string[];
  sunset: string[];
  sunshine_duration: number[];
  temperature_2m_max: number[];
  temperature_2m_mean: number[];
  temperature_2m_min: number[];
  uv_index_clear_sky_max: number[];
  uv_index_max: number[];
  weather_code: number[];
  wind_direction_10m_dominant: number[];
  wind_gusts_10m_max: number[];
  wind_speed_10m_max: number[];
}

export interface day {
  apparent_temperature_mean: number;
  apparent_temperature_min: number;
  daylight_duration: number;
  precipitation_hours: number;
  precipitation_sum: number;
  rain_sum: number;
  showers_sum: number;
  sunrise: string;
  sunset: string;
  sunshine_duration: number;
  temperature_2m_max: number;
  temperature_2m_mean: number;
  temperature_2m_min: number;
  uv_index_clear_sky_max: number;
  uv_index_max: number;
  weather_code: number;
  wind_direction_10m_dominant: number;
  wind_gusts_10m_max: number;
  wind_speed_10m_max: number;
}

export interface CurrentWeather {
  time: string;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  is_day: number;
  precipitation: number;
  rain: number;
  weather_code: number;
  cloud_cover: number;
  pressure_msl: number;
  visibility: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
}

export interface HourlyWeather {
  time: string[];

  temperature_2m: number[];
  relative_humidity_2m: number[];
  apparent_temperature: number[];
  precipitation: number[];
  rain: number[];
  weather_code: number[];
  cloud_cover: number[];
  pressure_msl: number[];
  visibility: number[];
  wind_speed_10m: number[];
  wind_direction_10m: number[];
}

export const WeatherCategory: Record<
  number,
  "Clear" | "Clouds" | "Rain" | "Thunderstorm" | "Snow" | "Mist" | "Neutral"
> = {
  0: "Clear",
  1: "Clear",
  2: "Clouds",
  3: "Clouds",
  45: "Mist",
  48: "Mist",
  51: "Rain",
  53: "Rain",
  55: "Rain",
  56: "Rain",
  57: "Rain",
  61: "Rain",
  63: "Rain",
  65: "Rain",
  66: "Rain",
  67: "Rain",
  71: "Snow",
  73: "Snow",
  75: "Snow",
  77: "Snow",
  80: "Rain",
  81: "Rain",
  82: "Rain",
  85: "Snow",
  86: "Snow",
  95: "Thunderstorm",
  96: "Thunderstorm",
  99: "Thunderstorm",
};

export type themeType = {
  background: string;
  card: string;
  primaryText: string;
  secondaryText: string;
  accent: string;
};
export type City = {
  name: string;
  country: string;
  region: string;
};

export type appContextType = {
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
  currentLocation: string[] | null;
  currentWeather: CurrentWeather | null;
};
