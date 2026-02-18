import { api } from "@/api"
import { getLocation } from "./getLocation"


async function getWeather() {
    const location = await getLocation()
    const res = await api.get(`/current.json?q=${[location?.lat,location?.long]}`)    
    
    return res.data 
}

export default getWeather