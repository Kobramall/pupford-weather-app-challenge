import React from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const SearchPage = (props) => {
    
   const { locationList, zipCode, handleChange } = props
    const navigate = useNavigate(); 

    
    const deleteLocation = (id) =>{
      
      axios.delete(`http://localhost:8000/locations/${id}`)
      .then(res => console.log(res))
      .catch(err => console.error(err))
    }

    
    return (
        <main>
          <h3>Welcome</h3>
          <div className="searchBar">
             <input type="text" value={zipCode} onChange={handleChange}></input><span><button onClick={()=> navigate('/zip')}>?</button></span>
          </div>
          <div className="locationList">
              {locationList.map((item)=>{
                return <div key={item.id}>{item.name}<span> {item.zipCode}</span><button value={item.id} onClick={()=> deleteLocation(item.id)}>X</button></div>
              })}
          </div>
        </main>
    )
}

export default SearchPage