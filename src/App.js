
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import Weather from './weather';

const baseUrl = `https://infinite-lowlands-78570.herokuapp.com`

const Home = (props) => (
  <div className="Inner">
        <img className="Icon" src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/rain-icon.png" />
        <div className="Lat-Lon">
        <input onChange={props.onLatChange} className="input" placeholder="LAT" value={props.lat} />
        <input onChange={props.onLonChange} className="input" placeholder="LON" value={props.lon} />
        </div>
        <div className="CityState-input">
        <p>OR input your city and state</p>
        <input placeholder="City, State" />
        </div>
        <Link to='/weather'><button className="button" onClick={props.onSetLocation}>Get Forecast</button></Link>
        </div>
);


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      success: false,
      error: null,
      lat: 0,
      lon: 0,
    };
  }

  componentDidMount() {
    this.setLocation();
  }

  setLocation() {
  const { lat,lon } = this.state;

    const url = `${baseUrl}/forecast/location/${lat},${lon}`;
    axios.get(url).then((response) => {
      this.setState({
        weather: response.data,
        success: true,
      });
    }).catch((error) => {
      this.setState({
        success: false,
        error,
      });
    });
  }

  setLat(evt){
    this.setState({
      lat: evt.target.value
  });
} 

  setLon(evt){
    this.setState({
      lon: evt.target.value
  });
}

  render() {
    const { success, error, weather } = this.state;
    if (error) {
      return (
        <p>
            Stuff is broken
        </p>
      );
    }
    if (!success) {
      return (
        <h1>
            Loading...
        </h1>
      );
    }
    return (
      <div className="App-container">
        
        <Route exact path={process.env.PUBLIC_URL + '/'} render = { (routerProps) => {
          return <Home onLatChange = {this.setLat.bind(this)}
                      onLonChange = {this.setLon.bind(this)}
                      onSetLocation = {this.setLocation.bind(this)}
                      lat={this.state.lat}
                      lon={this.state.lon}
                       {...routerProps} />
        }} />
        <Route path={process.env.PUBLIC_URL + '/weather'} render ={ (routerProps) => {
          return <Weather lat={this.state.lat}
                          lon={this.state.lon}
                          weather={this.state.weather}
                          {...routerProps} />
        } } />
      </div>
    );
  }
}

export default App;
