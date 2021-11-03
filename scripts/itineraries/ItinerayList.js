import { useItineraries, getItineraries } from "./ItinerayDataProvider.js";

export const ItineraryList = () => {
    getItineraries()
    .then(() => {
        let itineraryArray = useItineraries()
        
        let itineraryHTML = ""
// how to coonect the results from the dropdown menues to the itineraryHTML?

    document.querySelector("#").innerHTML = ` <h3>Itineraries</h3>
    ${itineraryHTML}
    `
    })
}

document.querySelector("#").addEventListener("change", (eventObject)=> {
    if (eventObject.target.id === " " ||eventObject.target.id === "" || eventObject.target.id === ""){

    console.log("can I target 3 results each of which is selected from the 3 menue, on the one if statement?", eventObject.target.value ")
   
co++nst Pizza = (taco) => {
// how can I get each eventObject target value?

    return taco.value 

}

  }
})