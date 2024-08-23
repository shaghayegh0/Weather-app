import React, { useEffect } from 'react';
import L from 'leaflet';
import './Map.css'; 
import { getWeatherData } from '../Forecast/Forecast';  


function Map() {
    useEffect(() => {
        const map = L.map('mapid').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const coordsDiv = document.getElementById('coords');
        let timeout;

        map.on('mousemove', function(e) {
            clearTimeout(timeout);
            coordsDiv.style.display = 'none';

            timeout = setTimeout(function() {
                const lat = e.latlng.lat.toFixed(5);
                const lng = e.latlng.lng.toFixed(5);
                coordsDiv.textContent = `Lat: ${lat}, Lng: ${lng}`;

                coordsDiv.style.left = (e.originalEvent.pageX + 10) + 'px';
                coordsDiv.style.top = (e.originalEvent.pageY + 10) + 'px';
                coordsDiv.style.display = 'block';
            }, 1000);
        });

        map.on('mouseout', function() {
            clearTimeout(timeout);
            coordsDiv.style.display = 'none';
        });

        map.on('click', async function(e) {
            const lat = e.latlng.lat;
            const lng = e.latlng.lng;

            try {
                const data = await getWeatherData(lat, lng);  // Fetch data using the imported function
                document.getElementById('temp').textContent = data.current_weather.temperature;
                document.getElementById('windspeed').textContent = data.daily.precipitation_probability_max[0];
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        });
    }, []);

    return (
        <div>
            <div id="mapid"></div>
            <div id="coords"></div>
            <div id="info">
                <p>Temperature: <span id="temp">N/A</span> °C</p>
                <p>Chance of Rain: <span id="windspeed">N/A</span>%</p>
            </div>
        </div>
    );
}

export default Map;
