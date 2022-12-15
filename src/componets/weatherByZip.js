import React from "react";
import axios from 'axios'


const WeatherByZip = (props) =>{

    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=40.39&lon=-111.86&appid=17d2206dea5f040274a256c8ec71c6bb')
    .then(res => console.log(res))
    .catch(err => console.error(err));

    return(
        <div>HELLO</div>
    )
}

export default WeatherByZip