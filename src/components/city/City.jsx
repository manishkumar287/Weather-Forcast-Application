import React from 'react'

import './city.css'
 
const City = (props) => {
    const {updateCity,fetchWeather}=props;
    return (
        <div className='container'>
            <div className="city-title">
                <h2>Weather Application</h2>
            </div>
            <div className="weatherLogo">
                <img src="/icons/perfect-day.svg" />
            </div>
            <span className="searchLebel">
                <h3>Find Weather of your city</h3>
            </span>
            <form action="" className='form'>
                <input type="text" placeholder='City' onChange={(e)=>updateCity(e.target.value)}/>
                
                    <button type='submit' onClick={fetchWeather}>Search
                    </button>
                
                
            </form>
        </div>
    )
}

export default City
