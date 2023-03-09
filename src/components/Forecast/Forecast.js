import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

// 142dc61d9e5a430b96045028230803
const Forecast = () => {
	
    let [latitude, setLatitude] = useState(49.3);
    let [longitude, setLongitude] = useState(6.7);
    let [responseObj, setResponseObj] = useState({});

   
	function getForecast(e) {
        e.preventDefault();

      		const options = {
			method: 'GET',
		};
        // fetch('https://api.open-meteo.com/v1/forecast?latitude=0.0&longitude=0.0&hourly=rain&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=GMT', options)

	fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=rain&timezone=GMT&daily=precipitation_probability_max&current_weather=true`, options)
       .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })

   }
   return (
       
       <div>
           <h2>Find Current Weather Conditions</h2>





           
            <form onSubmit={getForecast}>
                <label for='latitude'>Latitude:    </label>
                <input className={classes.TextInput}
                    type="text"
                    placeholder="Enter latitude"
                    maxLength="50"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    />
                    
                <label for='longitude'>Longitude:    </label>
                <input className={classes.TextInput}
                    type="text"
                    placeholder="Enter longtitude"
                    maxLength="50"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    />
                    

                <button className={classes.Button}
                 type="submit">Get Forecast</button>

            </form>







           {/* <div>{JSON.stringify(responseObj)}</div> */}
            <Conditions responseObj={responseObj}/>
       </div>

   )

}

export default Forecast;
