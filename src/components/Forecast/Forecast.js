import React, { useState } from 'react';


const Forecast = () => {
	
   let [responseObj, setResponseObj] = useState({});
   
	function getForecast() {
      		const options = {
			method: 'GET',
		};

	fetch('https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m&timezone=GMT&daily=precipitation_probability_max&current_weather=true', options)
	
       .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })

   }
   return (
       
       <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>
       </div>

   )

}

export default Forecast;
