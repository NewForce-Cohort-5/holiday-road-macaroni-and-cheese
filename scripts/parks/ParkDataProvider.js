let weather = []

export const getWeather = (lat, long, apikey) => {
    return fetch('https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apikey}')
    .then(res => res.json())
    .then(parsedWeather => {weather = parsedWeather.list.slice()
  })
}



export const useWeather = () => {
    return weather
}








// export const getParks = () => {
//     return fetch
//     .then(response => response.json())
//     .then(Jresponse => {
//         //check to see if Jresponse is working
//         // console.table(Jresponse) 
//         console.log(Jresponse.data)
//         parks = Jresponse.data
//         //check to see if parks is working
//         // console.table(parks)
//     })
// }
