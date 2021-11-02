import { Parks } from "./ParkCard.js";
import { getParks, useParks } from "./ParkDataProvider.js";

export const ParksList = () => {
    getParks()
    .then(() => {
        let parksArray = useParks()
        let parksHTML = "";

        parksArray.forEach(singleParkObj => {
            parksHTML += (singleParkObj);
        })
    document.querySelector(".parks-container").innerHTML = `
    <div class="parks-styled-container">${parksHTML}</div>
    `
})
}

