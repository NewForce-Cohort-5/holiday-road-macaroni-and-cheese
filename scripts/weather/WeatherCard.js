export const Weather = (weather) => {
    let eachWeatherHTML = ""
    for(let i=0; i < 5;i++){
           
      eachWeatherHTML += `

    <section id="weather_card">
        <ul class="weather_type">
            <li> Temperature: ${weather[i].main.temp} C </li>
            <li> Feels like: ${weather[i].main.feels_like} C</li>
            <li> Low Temperature: ${weather[i].main.temp_min} C</li>
            <li> High Temperature: ${weather[i].main.temp_max} C </li>
            <li> Humidity: ${weather[i].main.humidity}</li>
        </ul>
    </section>
    `

}
//console.log(eachWeatherHTML)
return eachWeatherHTML
}
