import { Parks } from "./ParkCard.js";
import { getParks, useParks } from "./ParkDataProvider.js";


export const ParksList = (stringFromDropdown) => {
    getParks()
    .then(() => {
        let parksArray = useParks()
        let parksHTML = "";

const parkObject= parksArray.find(singleObject => {
    return stringFromDropdown === singleObject.fullName
}) 
console.log(parkObject)

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
}


