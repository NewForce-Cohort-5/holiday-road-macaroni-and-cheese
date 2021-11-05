import { AttractionsList } from "./AttractionList.js";
import { getAttractions, useAttractions } from "./AttractionProvider.js";

export const AttractionSelect = () => {
    getAttractions()
    .then(() => {
        let attFunc = useAttractions()
        render(attFunc)
    })
}

const render = attractionsCollection => {

    document.querySelector("#attractions-dropdown").innerHTML = `
        <select class="dropwdown" id="att_dropdown"> <option value="0">Please select an attraction...</option>
            ${
                attractionsCollection.map((attObject) => {
                    const att = attObject.name
                    return `<option>${att}</option>`
                })
            }
            </select>
    `
}

document.querySelector("body").addEventListener("change", (eventObject) => {
    if(eventObject.target.id === "att_dropdown") 
    {
       AttractionsList(eventObject.target.value)
    }
    }
)

