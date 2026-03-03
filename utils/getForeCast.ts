import { forecastApi } from "@/apis/forecast";
import { getLocation } from "./getLocation";
import { OpenMeteoWeatherResponse } from "@/types";

async function getForecast(query?: {
  longitude: number;
  latitude: number;
}): Promise<OpenMeteoWeatherResponse | any> {
  let q: { longitude: number; latitude: number };
  const location = await getLocation();

  if (query) {
    q = query;
  } else {
    q = location!;
  }
  try {
    const res = await forecastApi.get(`/forecast`, {
      params: {
        latitude: q.latitude,
        longitude: q.longitude,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error)
    return null
  }
}

export default getForecast;
