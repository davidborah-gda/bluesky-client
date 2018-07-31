/* eslint-disable */

import React from 'react';
import './weather.css';
import WeatherIcon from 'react-icons-weather';


const Weather = (props) => (
  <div>
  <div className="Weather-container">
  <h4>Your Latitude is {props.lat} Your Longitude is {props.lon}</h4>
  <h3>Current Weather: {props.weather.currently.summary}</h3>
  <WeatherIcon name="darksky" iconId={props.weather.currently.icon} flip="horizontal" rotate="90" />
  <h3>Temperature: {props.weather.currently.temperature} Degrees</h3>
  </div>
  </div>
)

export default Weather;