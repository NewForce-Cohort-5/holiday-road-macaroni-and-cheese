import { WeatherList } from "./WeatherList";
import { getWeather, useWeather} from "./WeatherProvider.js"
import { useParks } from "./parks/ParkDataProvider.js";


export const WeatherSelect = () => {
    getWeather (lat, long,)
    .then(() => {
        let weatherWeather = useWeather()
        render(weatherWeather)
    })
}

const render = weatherCollection => {
    
}
