import React, {useEffect, useState} from "react";
import axios from 'axios'


const WeatherByZip = (props) =>{
    const { zipCode} = props
    const [weatherData, setWeatherData] = useState({})

   useEffect(()=>{
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${zipCode}&limit=5&appid=54e0b872a6ec4d0857cd588cae22095a`)
    .then(res =>  console.log(res))
    .catch(err => console.log(err))
    console.log('here')
   }, [])

    

    const postNewLocation = (newLocation) =>{
        axios.post('http://localhost:8000/locations', newLocation)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }

    
    return(
        <div>
          <div>HELLO</div>
          <button onClick={()=> postNewLocation({name:'place', lat:45.86, long:112.46})}>Save Location</button>
        </div>
    )
}

export default WeatherByZip