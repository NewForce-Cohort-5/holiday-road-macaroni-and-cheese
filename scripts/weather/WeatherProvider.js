let weather = []

export const useWeather = () =>{
  return weather.slice()
}

export const getWeather = (zipCode, weatherKey) =>{
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${weatherKey}
    `)
    .then(res => res.json())
    .then(parsedWeather => {
      //console.log(parsedWeather.list)
      weather = parsedWeather.list
  })
  
  
  }
 
