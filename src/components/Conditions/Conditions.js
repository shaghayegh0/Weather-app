
import React from 'react';

const Conditions = (props) => {
   return (
       <div>
           {Object.keys(props.responseObj).length !== 0 ?
               <div>
                   {/* <p><strong>{props.responseObj.name}</strong></p> */}
                   <p>It is currently {Math.round(props.responseObj.current_weather.temperature)} degrees out with wind speed of {Math.round(props.responseObj.current_weather.windspeed)}.</p>
                   
                    <p>Chance of rain in the next hour:  {(props.responseObj.hourly.rain[0])*10} percent </p>
               </div>
           : null
           }
       </div>
   )
}

export default Conditions;
