import { locationApi } from "@/apis/locationApi";

export async function getCities(query: string) {
  if (!query) return;
  try {
    const res = await locationApi.get(`/search?name=${query}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
