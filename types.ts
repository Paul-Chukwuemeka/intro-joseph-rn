export type OpenMeteoWeatherResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current_units: WeatherUnits;
  current: CurrentWeather;

  hourly_units: WeatherUnits;
  hourly: HourlyWeather;
};

export interface WeatherUnits {
  time: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  apparent_temperature: string;
  is_day: string;
  precipitation: string;
  rain: string;
  weather_code: string;
  cloud_cover: string;
  pressure_msl: string;
  visibility: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
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

export const WeatherCategory: Record<number, "Clear" | "Clouds" | "Rain" | "Thunderstorm" | "Snow" | "Mist" | "Neutral"> = {
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