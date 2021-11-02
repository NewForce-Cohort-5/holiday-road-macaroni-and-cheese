import { getEateries, useEateries } from "./EateryDataProvider.js";

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
            ${
                eateriesCollection.map((eateryObject) => {
                    const eateryName=eateryObject.businessName
                    return `<option>${eateryName}</option>`
                })
            }
        </select>
    `
}

document.querySelector("body").addEventListener("change", (eventObject) => {
    if(eventObject.target.id ==="nateateries-dropdown"){
        document.querySelector(".eateries-container").innerHTML = `
        <div class="eateries-styled-container">${eventObject.target.value}</div>
        `
    }
}) 