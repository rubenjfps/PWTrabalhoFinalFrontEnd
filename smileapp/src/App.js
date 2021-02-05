import './App.css';
import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './resources/logo.svg';
import Trends from './components/trends';
import Jokes from './components/jokes';

function App() {
  
  return (
    <div className="covid">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <Router>
          <Route path="/jokes" component={Jokes}/>
          <Route path="/trends" component={Trends}/>
      </Router>
    </div>
  );
}

export default App;
