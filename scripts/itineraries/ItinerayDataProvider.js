let itineraries = []

export const useItineraries = () => {
    return itineraries.slice()
}

export const getItineraries = () => {
    return fetch('http://localhost:8088/db')
    .then(response => response.json())
    .then(parsedItineraries => {
        itineraries = parsedItineraries
    })
}