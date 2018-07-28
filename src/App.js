import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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

    const url = `/forcast/location/${lat},${lon}`;
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
        <div className="Inner">
        <img className="Icon" src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/rain-icon.png" />
        <div className="Lat-Lon">
        <input onChange={this.setLat.bind(this)} className="input" placeholder="LAT" value={this.state.lat} />
        <input onChange={this.setLon.bind(this)} className="input" placeholder="LAT" value={this.state.lon} />
        </div>
        <button className="button" onClick={this.setLocation.bind(this)}>Get Weather Forcast</button>
        </div>
      </div>
    );
  }
}

export default App;
