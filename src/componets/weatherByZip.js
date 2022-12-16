import React from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const WeatherByZip = (props) =>{
    const { zipCode, weatherData } = props 
    const navigate = useNavigate()
    const newLocation = {name: weatherData.name, zipCode: zipCode}

    
    return(
        <div>
          <div className="cityName">{weatherData.name}</div>
          <div className="currentWeather">current weather: {weatherData.weather}</div>
          <button onClick={()=> axios.post('http://localhost:8000/locations', newLocation).then(res => console.log(res)).catch(err => console.error(err))}>Save Location</button>
          <button onClick={() => navigate('/')}>Go Back</button>
        </div> 
    )
}

export default WeatherByZip