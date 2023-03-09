import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
	
    let [latitude, setLatitude] = useState(49.3);
    let [longitude, setLongitude] = useState(6.7);
    let [responseObj, setResponseObj] = useState({});

   
	function getForecast(e) {
        e.preventDefault();

      		const options = {
			method: 'GET',
		};

	fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=rain&timezone=GMT&daily=precipitation_probability_max&current_weather=true`, options)
       .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })

   }
   return (
       
       <div>
           <h2>Find Current Weather Conditions</h2>
           <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />



           
           
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
