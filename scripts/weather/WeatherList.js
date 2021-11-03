import { Weather } from "./WeatherCard.js";
import { getWeather, useWeather } from "./WeatherProvider.js"

export const WeatherList = () => {
    getWeather()
    .then(() => {
        let weatherArray =useWeather()
        let weatherHTML = "";

        weatherArray.array.forEach(singleWeatherObj => {
            weatherHTML += (singleWeatherObj)
         
    document.querySelector(".weather_container").innerHTML = `
    <div class= "weather_styled_container"${weatherHTML}></div>
    `

        });



    })


}