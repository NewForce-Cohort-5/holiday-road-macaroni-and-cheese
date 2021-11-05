import { Parks } from "./ParkCard.js";
import { getParks, useParks } from "./ParkDataProvider.js";
import { useWeather, getWeather } from "../weather/WeatherProvider.js";
import {settings} from "../Settings.js"
import { Weather } from "../weather/WeatherCard.js";

export const ParksList = (stringFromDropdown) => {
    getParks()
    .then(() => {
        let parksArray = useParks()
        let parksHTML = "";

const parkObject= parksArray.find(singleObject => {
    return stringFromDropdown === singleObject.fullName
}) 
//console.log(parkObject)

//new part
parksHTML = Parks(parkObject)

document.querySelector(".parks-container").innerHTML = parksHTML

        // parksArray.forEach(singleParkObj => {
        //     parksHTML = (singleParkObj);
        // })
    // document.querySelector(".parks-container").innerHTML = `
    // <div class="parks-styled-container">${parksHTML}</div>
    // `
})
//this is the weather part 


}

//code for the weather based on the choosen zip code 
// - get weather api, get the zipcode information, find for the weather data against zipcode, put the selected weather date into the html format, display in the below the 5 day weather forcase in the html section which is class="weather-container"
export const WeatherList = (stringFromDropdown) => {
    let weatherAPIKey = settings.weatherKey
    console.log(weatherAPIKey)
    let parksArray = useParks()
    console.log(parksArray)
    const zipCodeWeather = parksArray.find(singleObject => {
           return stringFromDropdown === singleObject.fullName
    } )
    //console.log(zipCodeArray)
    const zipCode = zipCodeWeather.addresses[0].postalCode
    console.log(zipCode)
    getWeather (zipCode, weatherAPIKey)
    .then(() => {
        let weatherWeather = useWeather ()
        //render(weatherWeatehr)
        //console.log(getWeather)
        let allWeatherHTML = Weather(weatherWeather)

        document.querySelector(".weather-container").innerHTML = allWeatherHTML
        // const WeatherObject = weatherArray.find(singleObject => {
        //     return stringFromDropdown === singleObject.??
        })
    }

