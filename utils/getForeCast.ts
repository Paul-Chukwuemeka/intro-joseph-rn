import { api } from "@/api";
import { getLocation } from "./getLocation";

async function getForecast(query?: string | null): Promise<any> {
  let q: string;

  if (query) {
    q = query;
  } else {
    const location = await getLocation();
    if (!location) {
      throw new Error("Unable to get location");
    }
    q = `${location?.lat},${location?.long}`;
  }
  const res = await api.get(`/forecast.json?q=${q}&days=3`);

  return res.data;
}

export default getForecast;
