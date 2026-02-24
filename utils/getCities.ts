import { api } from "@/api";

export async function getCities(query: string) {
  if (!query) return;
  try {
    const res = await api.get(`/search.json?q=${query}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
