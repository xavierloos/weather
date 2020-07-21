import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherEngine from "./components/weatherEngine"
function App() {
  return <div className="App">
    <WeatherEngine location="Mexico" />
    <WeatherEngine location="London" />
    <WeatherEngine location="Tabasco" />
  </div>;
}

export default App;
