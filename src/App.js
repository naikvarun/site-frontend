import React from 'react';
import './App.css';
import AppNavbar from "./common/AppNavbar";

function App() {
  return (
    <div className={'container'}>
      <div id="navbar">
        <AppNavbar />
      </div>
      <div id="content">
        <h1>Weather App</h1>
      </div>
    </div>
  );
}

export default App;
