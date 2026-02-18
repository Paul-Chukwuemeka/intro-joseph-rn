import axios from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const apiKey = process.env.EXPO_PUBLIC_WEATHER_KEY;

  config.params = {
    ...config.params,
    key: apiKey,
  };

  return config;
});
