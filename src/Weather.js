/* eslint-disable */

import React from 'react';
import './weather.css';
import WeatherIcon from 'react-icons-weather';


const Weather = (props) => (
  <div>
  <div className="Weather-container">
  Your LAT:{props.lat} Your LON:{props.lon}
  Current Weather Summary: {props.weather.currently.summary}
  Weather Icon: {props.weather.currently.icon}
  <WeatherIcon name="darksky" iconId={props.weather.currently.icon} flip="horizontal" rotate="90" />
  </div>
  </div>
)

export default Weather;