import React from "react";
import { useNavigate } from 'react-router-dom'


const SearchPage = (props) => {
    
   const { locationList } = props
    const navigate = useNavigate(); 

    return (
        <main>
          <h3>Welcome</h3>
          <div className="searchBar">
             <input type="text"></input><span><button onClick={()=> navigate('/zip')}>?</button></span>
          </div>
          <div className="locationList">
              {locationList.map((item) =>{
                return <div key={item.id}>{item.weather}</div>
              })}
          </div>
        </main>
    )
}

export default SearchPage