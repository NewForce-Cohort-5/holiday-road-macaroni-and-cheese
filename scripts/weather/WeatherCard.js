export const Weather = (weather) => {
    let eachWeatherHTML = ""
    for(let i=0; i < 5;i++){
           
      eachWeatherHTML += `

    <section id="weather_card">
        <ul class="weather_type">
            <li> Date: ${weather[i].dt_txt} </li>
            <li> Temperature: ${weather[i].main.temp} <span>&#8457;</span> </li>
            <li> Feels like: ${weather[i].main.feels_like} <span>&#8457;</span></li>
            <li> Low Temperature: ${weather[i].main.temp_min} <span>&#8457;</span> </li>
            <li> High Temperature: ${weather[i].main.temp_max} <span>&#8457;</span>  </li>
            <li> Humidity: ${weather[i].main.humidity}</li>
        </ul>
    
    </section>
    `

}
//console.log(eachWeatherHTML)
return eachWeatherHTML
}
