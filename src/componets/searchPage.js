import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const SearchPage = (props) => {
    
   const { locationList, setLocationList, setZipCode, zipCode, handleChange, setWeatherData } = props
    const navigate = useNavigate(); 

    useEffect(() => {
      axios.get('http://localhost:8000/locations')
      .then(res => setLocationList(res.data))
      .catch(err => console.error(err))
    });
    
    const searchZipCode = () =>{
      axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=54e0b872a6ec4d0857cd588cae22095a`)
  .then(res => axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data.lat}&lon=${res.data.lon}&appid=54e0b872a6ec4d0857cd588cae22095a`)
       .then(res => setWeatherData({name: res.data.name, weather: res.data.weather[0].description}))
      .catch(err => console.error(err))
      )
  .catch(err => console.log(err))
    
     navigate(zipCode)
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
             <input type="text" value={zipCode} onChange={handleChange}></input><span><button onClick={()=> searchZipCode()}>search</button></span>
             <p>Enter a zip code to zearch for weather</p>
          </div>
          <h2>List of saved locations</h2>
          <div className="locationList">
              { locationList.map((item)=>{
                return <div onClick={()=> setZipCode(item.zipCode)} key={item.id}>{item.name}<span> {item.zipCode} </span><button value={item.id} onClick={()=> deleteLocation(item.id)}>X</button></div>
              })}
          </div>
        </main>
    )
}

export default SearchPage