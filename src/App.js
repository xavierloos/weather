import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={15} condition="Clouds" city="Sydney" country="AU" />
      <WeatherCard temp={20} condition="Dust" city="Sydney" country="AU" />
      <WeatherCard temp={30} condition="Tornado" city="Sydney" country="AU" />
    </div>
  );
}

export default App;
