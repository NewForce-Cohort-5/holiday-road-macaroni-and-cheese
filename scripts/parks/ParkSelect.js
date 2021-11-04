import { ParksList } from "./ParkList.js"
import {getParks, useParks} from "./ParkDataProvider.js"
// import { settings } from "../Settings.js"

// console.log (settings.npsKey)

// let object = settings 
//  console.log(object)

// const  settingsID = (ob) => {
//     return NParkID = ob.npskey}

//     settingsID(settings)

export const ParkSelect = (parkAipKey) => {
    getParks(parkAipKey).then(() => {
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






// document.querySelector("body").addEventListener("change", (eventObject) => {
//     if(eventObject.target.id === "natparks-dropdown"){
      
//         document.querySelector(".parks-container").innerHTML = ParkList (evetnObjuecty targe.value)
        
//      `
//     }
// })

