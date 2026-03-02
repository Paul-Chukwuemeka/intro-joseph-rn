import axios from "axios";

export const locationApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_OPEN_MATEO_LOCATION_API_URL,
  timeout: 10000,
  timeoutErrorMessage: "request timed out",
});

locationApi.interceptors.request.use((config) => {
  config.params = {
    ...(config.params || {}),
    count: 10,
    language: "en",
    format: "json",
  };
  console.log("Request:", config.url, config.params);
  return config;
});
