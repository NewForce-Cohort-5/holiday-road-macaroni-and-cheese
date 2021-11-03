import { WeatherList } from "./WeatherList";
import { getWeather, useWeather} from "./WeatherProvider.js"

export const WeatherSelect = () => {
    getWeather ()
    .then(() => {
        let weatherWeather = useWeather()
        render(weatherWeather)
    })
}

const render = weatherCollection => {
    
}
