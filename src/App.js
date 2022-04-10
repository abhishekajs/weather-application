import { useState } from "react";
import "./App.css";
import axios from "axios";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";

const API_KEY = "de8ec7840ce97b7de2e18e5369c29261";

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();

    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updateWeather(res.data);
  };

  return (
    <div className="container">
      <span id="Head-Label">The Weather App</span>
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
}

export default App;
