let parks = []

export const useParks = () => {
    return parks.slice()
}

export const getParks = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?api_key=IDFYIA8FpIW8iKzxdTjnknA2yIoxxYeJUQTrt8dG")
    .then(response => response.json())
    .then(Jresponse => {
        //check to see if Jresponse is working
        // console.table(Jresponse) 
        console.log(Jresponse.data)
        parks = Jresponse.data
        //check to see if parks is working
        // console.table(parks)
    })
}