export const Weather = (weather) => {
    let eachWeatherHTML = ""
    for(let i=0; i < 5;i++){
           
      eachWeatherHTML += `

    <section id="weather_card">
<<<<<<< HEAD
        <ul class="weather_type">
            <li> Temperature: ${weather[i].main.temp} F </li>
            <li> Feels like: ${weather[i].main.feels_like} F</li>
            <li> Low Temperature: ${weather[i].main.temp_min} F</li>
            <li> High Temperature: ${weather[i].main.temp_max} F </li>
            <li> Humidity: ${weather[i].main.humidity}</li>
        </ul>
=======
    <div class="weather_type">${weather.data.}</div>
>>>>>>> parent of 39f2213 (Merge pull request #13 from NewForce-Cohort-5/bdHolidayRoad)
    </section>
    `

}
console.log(eachWeatherHTML)
return eachWeatherHTML
}
