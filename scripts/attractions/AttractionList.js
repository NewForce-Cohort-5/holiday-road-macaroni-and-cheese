import { Attractions } from "./AttractionCard.js";
import { getAttractions, useAttractions } from "./AttractionProvider.js";

export const AttractionsList = (stringFromDropdown) => {
    getAttractions()
    .then(() => {
        let attractionsArray = useAttractions()
        let attractionsHTML = "";

        // attractionsArray.forEach(singleAttObj => {
        //     attractionsHTML = (singleAttObj);

        const attractionObj = attractionsArray.find(singleObject => {
            return stringFromDropdown === singleObject.name
        })
    
        attractionsHTML = Attractions(attractionObj)

        document.querySelector(".attractions-container").innerHTML = attractionsHTML

})
}
