import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  // Connecting to the weather API
  // AWAIT word help to wait for the data to pass to the var
  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=9ec9591a31e3be7446a43513c920d793"
    );
    // Transfer the database to a json file
    const resJSON = await apiRes.json();
    // return the data in a json file
    return resJSON;
  };
  // DATA acces to the json otherwise it returns a promise but unaccesible
  data().then((res) => resJSON);
  return (
    <div className="App">
      <WeatherCard temp={15} condition="Clouds" city="Sydney" country="AU" />
      <WeatherCard temp={20} condition="Dust" city="Sydney" country="AU" />
      <WeatherCard temp={30} condition="Tornado" city="Sydney" country="AU" />
    </div>
  );
}

export default App;
