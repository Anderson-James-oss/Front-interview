import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>你好，红移科技</h2>
        </div>
        <p className="App-intro">
          俺是一枚菜鸟
        </p>
      </div>
    );
  }
}

export default App;
