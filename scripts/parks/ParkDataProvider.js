let parks = []

export const useParks = () => {
    return parks.slice()
}

export const getParks =() => {
    return fetch("https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=IDFYIA8FpIW8iKzxdTjnknA2yIoxxYeJUQTrt8dG")
    .then(response => response.json())
    .then(Jresponse => {
        parks = Jresponse
    })
}