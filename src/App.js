import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="Inner">
        <img className="Icon" src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/rain-icon.png" />
        <div className="Lat-Lon">
        <input className="input" placeholder="LAT" />
        <input className="input" placeholder="LAT" />
        </div>
        <button className="button">GO</button>
        </div>
      </div>
    );
  }
}

export default App;
