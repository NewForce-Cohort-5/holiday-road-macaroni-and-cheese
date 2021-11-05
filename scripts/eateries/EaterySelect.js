import { getEateries, useEateries } from "./EateryDataProvider.js";
import {EateriesList} from "./EateryList.js"

export const EaterySelect = () => {
    getEateries()
    .then(() => {
        let eateriesArray = useEateries ()
        render(eateriesArray)
    })
}

const render = eateriesCollection => {
    document.querySelector("#eateries-dropdown").innerHTML = `
    <select class="dropdown" id="nateateries-dropdown">
        <option value="0">Please select an eatry...</option>
            ${eateriesCollection.map((eateryObject) => {
                    const eateryName=eateryObject.businessName
                    const eateryId=eateryObject.id
                    return `<option id="eatery__${eateryId}">${eateryName}</option>`
                })
            }
        </select>
    `
}


document.querySelector("body").addEventListener("change", (eventObject) => {
    if(eventObject.target.id ==="nateateries-dropdown"){
        EateriesList(eventObject.target.value)
    }
}) 