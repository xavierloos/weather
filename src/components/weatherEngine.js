import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
    const [query, setQuery] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({
        temp: null,
        city: null,
        condition: null,
        country: null
    });

    // Connecting to the weather API
    // AWAIT word help to wait for the data to pass to the var
    const getWeather = async q => {
        setQuery('');
        setLoading(true);
        try {
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
        } catch (error) {
            setError(true);

        }
        setLoading(false);
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
            {!loading && !error ? (
                <div>
                    <WeatherCard
                        temp={weather.temp}
                        condition={weather.condition}
                        city={weather.city}
                        country={weather.country}
                        getWeather={getWeather}
                    />

                </div>
            ) : loading ? (
                <div style={{ color: 'black' }}>Loading</div>
            ) : !loading & error ? (
                <div style={{ color: 'black' }}>
                    There has been an error<br />
                    <button onClick={() => setError(false)}>Reset</button>
                </div>
            ) : null}

        </div>
    );
};

export default WeatherEngine;
