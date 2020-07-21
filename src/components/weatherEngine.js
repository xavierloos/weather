import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({
        temp: null,
        city: null,
        condition: null,
        country: null
    });

    // Connecting to the weather API
    // AWAIT word help to wait for the data to pass to the var
    const getWeather = async q => {
        const apiRes = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=9ec9591a31e3be7446a43513c920d793`
        );
        // Transfer the database to a json file
        const resJSON = await apiRes.json();
        // return the data in a json file
        setWeather({
            temp: resJSON.main.temp,
            city: resJSON.name,
            condition: resJSON.weather[0].main,
            country: resJSON.country
        });
    };
    const handleSearch = e => {
        e.preventDefault();
        getWeather(query);
    };
    useEffect(() => {
        getWeather(location);
    }, [location]);

    return (
        <div>
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
};

export default WeatherEngine;
