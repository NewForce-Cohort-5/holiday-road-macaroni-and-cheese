import { Parks } from "./ParkCard.js";
import { getParks, useParks } from "./ParkDataProvider.js";
import { ParkSelect } from "./ParkSelect.js";

export const ParksList = () => {
    getParks()
    .then(() => {
        let parksArray = useParks()
        let parksHTML = "";

        parksArray.forEach(singleParkObj => {
            parksHTML = (singleParkObj);
        })
    // document.querySelector(".parks-container").innerHTML = `
    // <div class="parks-styled-container">${parksHTML}</div>
    // `
})
}


// const contentTarget = document.querySelector(".parks-details")

// export const parkList = (parkSelect, selectedChoice) => {
//     let parkListContainer = document.querySelector(".parks-details");
//     parkListContainer.innerHTML = ""

//     getParks()
//     .then(() => {
//         let parks = useParks();

//         if(parkSelect === ""){

//             parks = parks.filter(singleParkInLoop = {
//                 return parkSelect === selectedChoice           
//           })
//         }
//         else if(parkSelect === ""){
//             parks = parks.filter(singleParkObjInLoop => {
//                 return singleParkObjInLoop.pa
            
                
//            })    
//         }
//     });

    
// }

// document.querySelector(".parks-details").addEventListener("click", () => {
//     CriminalList()
// })

