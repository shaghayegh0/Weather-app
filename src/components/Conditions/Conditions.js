
import React from 'react';

const Conditions = (props) => {
    if (Object.keys(props.responseObj).length !== 0) {
        const rain = Math.round(props.responseObj.hourly.rain[0]) * 10
        const temp = Math.round(props.responseObj.current_weather.temperature)
        const windspeed = Math.round(props.responseObj.current_weather.windspeed)
        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

                <div>
                    <p>It is currently {temp} degrees celsius out
                        with wind speed of {windspeed} km/h.</p>
                    <p>Chance of rain in the next hour:  {rain} percent </p>

                    {rain < 5 ? <span class="material-symbols-outlined">partly_cloudy_day</span> : <span class="material-symbols-outlined">cloudy_snowing</span> }

                </div>
            </div>
        )
    } else {
        return null
    }
}


export default Conditions;
