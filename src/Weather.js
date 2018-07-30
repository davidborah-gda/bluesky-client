/* eslint-disable */

import React from 'react';
import './weather.css';

const Weather = (props) => (
  <div>
  <div className="Weather-container">
  Your LAT:{props.lat} Your LON:{props.lon}
  Current Weather Summary: {props.weather.currently.summary}
  </div>
  </div>
)

export default Weather;