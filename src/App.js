import './App.css';
import { useState } from 'react';
import SearchPage from './componets/searchPage';
import WeatherByZip from './componets/weatherByZip';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'

function App() {
  
  const [ zipCode, setZipCode ] = useState('')
  const [ locationList, setLocationList] = useState([])
  const [weatherData, setWeatherData] = useState({name:'', weather: []})
  
  

 const postNewLocation = () =>{
  
  const newLocation = {name: weatherData.name, zipCode: zipCode}
  
  axios.post('http://localhost:8000/locations', newLocation)
  .then(res => console.log(newLocation))
  .catch(err=> console.error(err))
}




 const handleChange = (evt) =>{
 
   setZipCode(evt.target.value)
 }
  
  return (
    <div className="App">
       <Router>
          <Routes>
             <Route path="/"element={<SearchPage locationList={locationList} setLocationList={setLocationList} zipCode={zipCode} handleChange={handleChange} setWeatherData={setWeatherData}setZipCode={setZipCode}/>}/>
             <Route path={zipCode} element={<WeatherByZip zipCode={zipCode} weatherData={weatherData} postNewLocation={postNewLocation}/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
