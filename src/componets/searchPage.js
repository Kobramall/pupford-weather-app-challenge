import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const SearchPage = (props) => {
    
   const { locationList, zipCode, handleChange, setWeatherData } = props
    const navigate = useNavigate(); 

    const searchZipCode = () =>{
      axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=54e0b872a6ec4d0857cd588cae22095a`)
  .then(res => axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data.lat}&lon=${res.data.lon}&appid=54e0b872a6ec4d0857cd588cae22095a`)
       .then(res => setWeatherData({name: res.data.name, weather: res.data.weather[0].description}))
      .catch(err => console.error(err))
      )
  .catch(err => console.log(err))
    
     navigate('/zip')
}
    
    
    const deleteLocation = (id) =>{
      
      axios.delete(`http://localhost:8000/locations/${id}`)
      .then(res => console.log(res))
      .catch(err => console.error(err))
    }

    
    return (
        <main>
          <h3>Welcome</h3>
          <div className="searchBar">
             <input type="text" value={zipCode} onChange={handleChange}></input><span><button onClick={()=> searchZipCode()}>?</button></span>
             <p>Enter a Zip code to Search for Weather</p>
          </div>
          <h2>List of saved Locations</h2>
          <div className="locationList">
              {locationList.map((item)=>{
                return <div key={item.id}>{item.name}<span> {item.zipCode}</span><button value={item.id} onClick={()=> deleteLocation(item.id)}>X</button></div>
              })}
          </div>
        </main>
    )
}

export default SearchPage