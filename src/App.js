import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherEngine from "./components/weatherEngine";
import Header from './components/Header/Header'



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <WeatherEngine
          location="Mexico" />
      </div>
    );
  }

}

export default App;
