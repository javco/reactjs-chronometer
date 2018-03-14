import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Chronometer from './components/Chronometer/Chronometer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Chronometre</h1>
        </header>
        <p className="App-intro">
          Click the button to start/stop the chronometer
        </p>
        <Chronometer />
      </div>
    );
  }
}

export default App;
