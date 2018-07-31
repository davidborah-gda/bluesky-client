/* eslint-disable */

import React from 'react';
import './weather.css';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const Weather = (props) => (
  <div>
  <div className="Weather-container">
  <h3>Current Location</h3>
  <h4 className="Location-title">Latitude: {props.lat} Longitude: {props.lon}</h4>
  <h3>Current Weather:</h3>
  <h3>{props.weather.currently.summary}</h3>
  <WeatherIcon name="darksky" iconId={props.weather.currently.icon} flip="horizontal" rotate="90" />
  <h3>Temperature: {props.weather.currently.temperature} Degrees</h3>
  <h3>Time: {moment(props.weather.currently.time * 1000).format("dddd, MMMM Do, h:mm a")}</h3>
  </div>
  </div>
)

export default Weather;