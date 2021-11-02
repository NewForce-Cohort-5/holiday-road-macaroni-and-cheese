let attractions = []

export const useAttractions = () => {
    return attractions.slice()
}
export const getAttractions = () => { 
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(attractionResponse => attractionResponse.json())
    .then(attractionReceipt => {
        
        attractions = attractionReceipt
    } )
}

