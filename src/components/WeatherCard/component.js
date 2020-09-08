import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";
import { motion } from "framer-motion";
import './WeatherStyle.css';
import RestaurantCard from '../RestaurantsCard/RestaurantCard';

const WeatherCard = ({ temp, condition, city, country, getWeather, name, getResto }) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 200;
    bg = `linear-gradient(
        to top,
        rgb(255, ${highColor}, 0),
        rgb(255, ${Math.abs(lowColor)}, 0)
        );
    `;
  } else if (temp <= 12) {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 200;
    bg = `linear-gradient(
        to top,
        rgb(0, ${highColor}, 255),
        rgb(0, ${Math.abs(lowColor)}, 255)
        );
    `;
  }

  const WeatherColorBg = styled.div`
    background: ${bg};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `;

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <WeatherColorBg>
        <div className='weatherWrapper'>
          <div className='locationWrapper'>
            <Location getWeather={getWeather} city={city} country={country} />
          </div>
          <div className='weatherCondition'>
            <Icon condition={condition} />
            <Condition temp={temp} condition={condition} />
          </div>
        </div>
        <RestaurantCard />
      </WeatherColorBg>
    </motion.div>
  );
};
export default WeatherCard;
