import { Attractions } from "./AttractionCard.js";
import { getAttractions, useAttractions } from "./AttractionProvider.js";

export const AttractionsList = () => {
    getAttractions()
    .then(() => {
        let attractionsArray = useAttractions()
        let attractionsHTML = "";

        attractionsArray.forEach(singleAttObj => {
            attractionsHTML = (singleAttObj);
    })
})
}