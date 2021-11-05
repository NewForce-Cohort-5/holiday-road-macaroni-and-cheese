let eateries = []

export const useEateries = () => {
    return eateries.slice()
}

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(Jresponse => {
        console.log(Jresponse)
        eateries = Jresponse
    })
}