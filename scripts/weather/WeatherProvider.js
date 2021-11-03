let weather = []

export const getWeather = (lat, long, apikey) =>{
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apikey}`)
    .then(res => res.json())
    .then(parsedWeather => {weather = parsedWeather.list.slice()
  })
  
  
  }
  export const useWeather = () =>{
    return weather
  }

