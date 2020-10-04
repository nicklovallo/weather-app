import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';
import MapContainer from './components/MapContainer';

function App() {

  const [search, setSearch] = useState();
  const [weather, setWeather] = useState();

  const apiKey = 'c33a8168088f3abc66a2cb55cd7877a8'

  const getWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(res => res.json())
      .then(result => setWeather(result))
      .catch(err => {
        alert('Please enter a valid city name');
        window.location.reload();
      });
  };

  const colorChange = () => {

    if (weather && weather.main.temp < 283) {
      return 'cold';
    } else if (weather && weather.main.temp > 283) {
      return 'warm';
    };

  };

  return (
    <div className={`app ${colorChange()}`}>

      <h1>Weather</h1>

      <Search 
        search={search}
        setSearch={setSearch} 
        getWeather={getWeather}
         />

      {weather && <MapContainer weather={weather} />}

      {weather && <Weather weather={weather} />}
      
    </div>
  );

};

export default App;