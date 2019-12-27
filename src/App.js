import React from 'react';
import './App.css';
import AppNavbar from "./common/AppNavbar";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className={'container'}>
      <div id="navbar mb-3">
        <AppNavbar />
      </div>
      <div id="content mt-3">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
