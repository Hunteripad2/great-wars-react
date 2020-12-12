import React from 'react';
import MainPage from './pages/main';
import ScenariosPage from './pages/scenarios';
import MapPage from './pages/map';
import { Switch, Route } from "react-router-dom";

// TODO: Unit tests - jest?
// TODO: Firebase?

function App() {
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

export default App;
