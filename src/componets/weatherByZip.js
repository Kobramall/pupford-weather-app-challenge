import React from "react";
import { useNavigate } from "react-router-dom";


const WeatherByZip = (props) =>{
    const { weatherData,  postNewLocation, zipCode} = props 
    const navigate = useNavigate()
   
    
    
    
    return(
        zipCode ?
        <div>
          <div className="cityName">{weatherData.name}</div>
          <div className="currentWeather">Current weather: {weatherData.weather}</div>
          <button onClick={()=> postNewLocation()}>Save Location</button>
          <button onClick={() => navigate('/')}>Go Back</button>
        </div> : navigate('/')
    )
}

export default WeatherByZip