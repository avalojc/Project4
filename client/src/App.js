import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SolarSystem from './components/SolarSystem'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={SolarSystem}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
