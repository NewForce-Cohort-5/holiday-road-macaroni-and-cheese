import { Eateries } from "./EateryCard.js";
import { getEateries, useEateris } from "./EateryDataProvider.js";

export const EatrisList = (stringFromDropdown) => {
    getEateries()
    .then (() => {
        let eateriesArray = useEateris ()

        let eateriesHTML = "";

        const eateryObject =eateriesArray.find(singleObject => {
            return stringFromDropdown === singleObject.businessName
        })

      eateriesHTML = Eateries(eateryObject)
      
      document.querySelector(".eateries-container").innerHTML = eateriesHTML
    })
}