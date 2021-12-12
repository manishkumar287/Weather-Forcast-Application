import React,{useState} from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import City from './components/city/City'
import Navbar from './components/navbar/Navbar';
import Weather from './components/weather/Weather'

const API_KEY='13a93de3a7092fa7f7902db74f46583f'

function App() {
  const [city, updateCity]=useState();
  const [weather,updateWeather]=useState();

  const fetchWeather=async(e)=>{
      e.preventDefault();
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

      updateWeather(response.data);
  }
  return (
    <div className="App">
    <Router>
    <Navbar/>
      
     
      {city&&weather? (<Weather weather={weather} />): (<City updateCity={updateCity} fetchWeather={fetchWeather}/>)}
    </Router>
    </div>
  );
}

export default App;
