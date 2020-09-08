import React, { useState } from "react";
import styled from "@emotion/styled";
import './WeatherStyle.css';
import RestaurantSearch from '../RestaurantsCard/RestaurantSearch';

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
   
  return (
    <Container>
      {!inputMode && <City onClick={() => setInputMode(true)}>{city}</City>}
      {inputMode && (
        <form
          onSubmit={e => {
            e.preventDefault();
            getWeather(query);
          }}>
          <input
            required
            value={query}
            onChange={e => setQuery(e.target.value)}
            id='location'
            className='inputLocation' 
            placeholder='Search for a city' />
          <button 
            type="submit">S</button>
          {/* <button onClick={() => setInputMode(false)}>Cancel</button> */}
        </form>
      )}
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  text-aling: center;
  background:transparent;
  margin-left:20px;
  width:70%;
  min-height:100px;
      display: flex;
    align-items: flex-end;
  `;
const City = styled.h1`
    font-size: 3rem;
    display:flex;
    position:relative;
    cursor:pointer;
  `;
const Country = styled.h2`
    font-size: 1.2rem;
  `;
