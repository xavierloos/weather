import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";
// import RestaurantCard from './RestaurantCard/RestaurantCard';
import PuffLoader from 'react-spinners/PuffLoader';

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
   
    // const [resto, setResto] = useState({
    //     name: null,
        
    // });
//  console.log(resto);
    // Connecting to the weather API
    // AWAIT word help to wait for the data to pass to the var
    
    const getWeather = async q => {
        setQuery('');
        // console.log(q);
        setLoading(true);
        try {
            const apiRes = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=323252`
            );
            // const apiRestaurant = await fetch(
            //     `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${q}`, {
            //         headers: {
            //             Authorization: `Bearer ${apiKey}`
            //         }
            //     }
            // );
            // Transfer the database to a json file
            const resJSON = await apiRes.json();
            // const restaurantJSON = await apiRestaurant.json();
            // return the data in a json file
            setWeather({
                temp: Math.round(resJSON.main.temp),
                city: resJSON.name,
                condition: resJSON.weather[0].main,
                country: resJSON.country
            });
            // setResto({
            //     name: restaurantJSON.name
            // });
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
                        // name={resto.name}
                    />
                </div>
            ) : loading ? (
                <div style={{ width: '200px', height: '240px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                    <PuffLoader />
                </div>
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
