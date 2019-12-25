import React from 'react';
import './App.css';
import AppNavbar from "./common/AppNavbar";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className={'container'}>
      <div id="navbar">
        <AppNavbar />
      </div>
      <div id="content">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
