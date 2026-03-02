import { forecastApi } from "@/apis/forecast";
import { getLocation } from "./getLocation";
import { OpenMeteoWeatherResponse } from "@/types";

async function getForecast(query?: {
  longitude: number;
  latitude: number;
}): Promise<OpenMeteoWeatherResponse> {
  let q: { longitude: number; latitude: number };
  const location = await getLocation();

  if (query) {
    q = query;
  } else {
    q = location!;
  }
  const res = await forecastApi.get(`/forecast`, {
    params: {
      latitude: q.longitude,
      longitude: q.latitude,
    },
  });
  return res.data;
}

export default getForecast;
