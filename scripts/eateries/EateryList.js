import { Eateries } from "./EateryCard.js";
import { getEateries, useEateries } from "./EateryDataProvider.js";

export const EateriesList = (stringFromDropdown) => {
    getEateries()
    .then (() => {
        let eateriesArray = useEateries ()

        let eateriesHTML = "";

        const eateryObject =eateriesArray.find(singleObject => {
            return stringFromDropdown === singleObject.businessName
        })
//onsole.log(eateryObject)

      eateriesHTML = Eateries(eateryObject)
      
      document.querySelector(".eateries-container").innerHTML = eateriesHTML
    })
}