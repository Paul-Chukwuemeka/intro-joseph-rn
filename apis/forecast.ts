import axios from "axios";

export const forecastApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_OPEN_MATEO_API_URL,
  timeout: 10000,
  timeoutErrorMessage: "request timed out",
});



forecastApi.interceptors.request.use((config) => {
  config.params = {
    ...(config.params || {}),

    daily: [
      "sunrise",
      "sunset",
      "daylight_duration",
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "apparent_temperature_max",
      "apparent_temperature_min",
      "rain_sum",
      "showers_sum",
      "uv_index_max",
      "sunshine_duration",
      "uv_index_clear_sky_max",
      "wind_speed_10m_max",
      "wind_gusts_10m_max",
      "wind_direction_10m_dominant",
      "precipitation_sum",
      "precipitation_hours",
      "temperature_2m_mean",
      "apparent_temperature_mean",
    ].join(","),

    hourly: [
      "temperature_2m",
      "relative_humidity_2m",
      "weather_code",
      "pressure_msl",
      "apparent_temperature",
      "surface_pressure",
      "snowfall",
      "visibility",
      "wind_speed_10m",
      "snow_depth",
      "wind_gusts_10m",
      "temperature_80m",
      "wind_direction_10m",
    ].join(","),

    current: [
      "relative_humidity_2m",
      "apparent_temperature",
      "is_day",
      "rain",
      "snowfall",
      "precipitation",
      "showers",
      "wind_speed_10m",
      "wind_gusts_10m",
      "wind_direction_10m",
      "weather_code",
      "cloud_cover",
      "temperature_2m",
      "pressure_msl",
      "surface_pressure",
    ].join(","),

    timezone: "auto",
  };

  return config;
});

