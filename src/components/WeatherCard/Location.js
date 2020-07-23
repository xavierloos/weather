import React, { useState } from "react";
import styled from "@emotion/styled";

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
          <input required
            value={query}
            onChange={e => setQuery(e.target.value)} />
          <button type="submit">Search</button>
          <button onClick={() => setInputMode(false)}>Cancel</button>
        </form>
      )}
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const Container = styled.div`
    text-aling: center;
  `;
const City = styled.h1`
    font-size: 1.6rem;
    position:relative;
    cursor:pointer;
    &:hover{
      top:-5px
    }
  `;
const Country = styled.h2`
    font-size: 1.2rem;
  `;
