import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const [query, setQuery] = useState("Sydney, au");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });

  // Connecting to the weather API
  // AWAIT word help to wait for the data to pass to the var
  const data = async q => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=9ec9591a31e3be7446a43513c920d793`
    );
    // Transfer the database to a json file
    const resJSON = await apiRes.json();
    // return the data in a json file
    return resJSON;
  };
  const handleSearch = e => {
    e.preventDefault();
    data(query).then(res => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.country
      });
    });
  };
  useEffect(() => {
    data(query).then(res => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.country
      });
    });
  }, []);

  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <button onClick={e => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
