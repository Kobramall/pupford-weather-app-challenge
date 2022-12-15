import './App.css';
import { useState } from 'react';
import SearchPage from './componets/searchPage';
import WeatherByZip from './componets/weatherByZip';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  
  const [ zipCode, setZipCode ] = useState('')
  const [ locationList, setLocationList] = useState([{id: 0, weather: 83},{id: 1, weather: 32}])
  
  return (
    <div className="App">
       <Router>
          <Routes>
             <Route path="/"element={<SearchPage locationList={locationList} />}/>
             <Route path='/zip' element={<WeatherByZip />}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
