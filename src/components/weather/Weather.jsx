import React from 'react'
import './weather.css'
const Weather = (props) => {
    const {weather}=props;
   
    const isDay=weather?.weather[0].icon?.includes('d');
    const getTime=(timeStamp)=>{
        return `${new Date(timeStamp*1000).getHours()} : ${new Date(timeStamp*1000).getMinutes()}`
    }
    return (
        <div className='container'>
            <div className="city-title">
                <h2>Weather Application</h2>
            </div>
            <span className="weatherCondition">
                <div className="condition">
                   <span>{`${Math.floor(weather?.main?.temp-273)}`}°C  </span>
                   {` ${weather?.weather[0].description}`}
                </div>
                <div className="conditionImg">
                    <img src="/icons/perfect-day.svg" />
                </div>
            </span>
                <div className="location">
                    {`${weather?.name}, ${weather?.sys?.country}`}
                </div>
                <div className="info">
                    Weather Info
                </div>
                <div className="infoCont1">
                    <span className="cont1">
                        <img src="/icons/temp.svg" alt="" />
                        <div>
                            {getTime(weather?.sys[isDay? 'Sunset' : 'Sunrise'])}
                            <br />
                            <span>{isDay? 'Sunset' : 'Sunrise'}</span>
                        </div>
                    </span>
                    <span className="cont2">
                        <img src="/icons/humidity.svg" alt="" />
                        <div>
                            {weather?.main?.humidity}
                            <br />
                            <span>Humidity</span>
                        </div>
                    </span>
                </div>
                <div className="infoCont2">
                    <span className="cont3">
                        <img src="/icons/wind.svg" alt="" />
                        <div>
                            {weather?.wind?.speed}
                            <br />
                            <span>Wind</span>
                        </div>
                    </span>
                    <span className="cont4">
                        <img src="/icons/pressure.svg" alt="" />
                        <div>
                            {weather?.main?.pressure}
                            <br />
                            <span>Pressure</span>
                        </div>
                    </span>
                </div>
        </div>
    )
}

export default Weather
