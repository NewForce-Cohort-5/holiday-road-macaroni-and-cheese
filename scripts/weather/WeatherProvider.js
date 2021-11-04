let weather = []

export const getWeather = (zipCode, weatherKey) =>{
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?&units=imperial&zip=${zipCode}&appid=${weatherKey}
    `)
    .then(res => res.json())
    .then(parsedWeather => {weather = parsedWeather.list.slice()
  })
  
  
  }
  export const useWeather = () =>{
    return weather
  }

