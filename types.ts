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
  relative_humidity_2m_mean: number[]
}

export interface day {
  time: string
  feel_mean: number;
  feel_min: number;
  feel_max: number;
  daylight_duration: number;
  precipitation_hrs: number;
  precipitation_sum: number;
  rain: number;
  showers_sum: number;
  sunrise: string;
  sunset: string;
  sunshine_duration: number;
  temperature_max: number;
  temperature_mean: number;
  temperature_min: number;
  uv_clear_max: number;
  uv_max: number;
  weather_code: number;
  wind_direction_10m_dominant: number;
  wind_gusts_10m_max: number;
  wind_speed: number;
  humidity_mean: number
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
  "Clear" | "Clouds" | "Rainy" | "Thunderstorm" | "Snow" | "Mist" | "Neutral"
> = {
  0: "Clear",
  1: "Clear",
  2: "Clouds",
  3: "Clouds",
  45: "Mist",
  48: "Mist",
  51: "Rainy",
  53: "Rainy",
  55: "Rainy",
  56: "Rainy",
  57: "Rainy",
  61: "Rainy",
  63: "Rainy",
  65: "Rainy",
  66: "Rainy",
  67: "Rainy",
  71: "Snow",
  73: "Snow",
  75: "Snow",
  77: "Snow",
  80: "Rainy",
  81: "Rainy",
  82: "Rainy",
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
  today: day|null,
  weekForecast: day[] | null
};
