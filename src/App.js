import React from 'react';
import './App.css';
import MainPage from './pages/main/index.js';
import ScenariosPage from './pages/scenarios/index.js';
import MapPage from './pages/map/index.js';
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Switch>
          <Route path='/map' component={MapPage} />
          <Route path='/scenarios' component={ScenariosPage} />
          <Route exact path='/' component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
