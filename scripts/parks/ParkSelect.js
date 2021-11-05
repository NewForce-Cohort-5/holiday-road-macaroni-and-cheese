import { ParksList, WeatherList } from "./ParkList.js"
import {getParks, useParks} from "./ParkDataProvider.js"
import { settings } from "../Settings.js"

let key = settings.npsKey 
 //console.log(key)

export const ParkSelect = () => {
    getParks().then(() => {
        let parkPark = useParks()
        render(parkPark)
    })
}

const render = parksCollection => {
    document.querySelector("#parks-dropdown").innerHTML =`
        <select class="dropdown" id="natparks-dropdown">
        <option value="0">Please select a park...</option>
            ${
                parksCollection.map((parkObject) => {
                    const park = parkObject.fullName
                    return `<option>${park}</option>`
                }) 
            }
        </select>
    `
}

document.querySelector("body").addEventListener("change", (eventObject) => {
    if(eventObject.target.id === "natparks-dropdown"){
        ParksList(eventObject.target.value)
        WeatherList(eventObject.target.value)
    }
})