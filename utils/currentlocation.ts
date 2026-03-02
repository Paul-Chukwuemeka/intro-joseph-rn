import { getLocation } from "./getLocation";
import axios from "axios";

export async function currentLocation() {
  const location = await getLocation();
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${location?.latitude}&lon=${location?.longitude}&apiKey=e2a5b86a7c60481f96ac78d707f449c9`;
  const res = await axios.get(url)
  const f = res.data.features[0].properties
  console.log(f.county,f.city)
}
