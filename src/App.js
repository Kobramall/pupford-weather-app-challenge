import './App.css';
import { useState, useEffect } from 'react';
import SearchPage from './componets/searchPage';
import WeatherByZip from './componets/weatherByZip';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'

function App() {
  
  const [ zipCode, setZipCode ] = useState('')
  const [ locationList, setLocationList] = useState([])
  const [ coordinate, setCoordinate] = useState({})
  
  useEffect(() => {
   axios.get('http://localhost:8000/locations')
   .then(res => setLocationList(res.data))
   .catch(err => console.error(err))
 });

 const handleChange = (evt) =>{
 
   setZipCode(evt.target.value)
 }
  
  return (
    <div className="App">
       <Router>
          <Routes>
             <Route path="/"element={<SearchPage locationList={locationList} setLocationList={setLocationList} zipCode={zipCode} handleChange={handleChange}/>}/>
             <Route path='/zip' element={<WeatherByZip zipCode={zipCode} coordinate={coordinate} setCoordinate={setCoordinate}/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
