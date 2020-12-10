import React from 'react';
import './App.css';
import MainPage from './pages/main';
import ScenariosPage from './pages/scenarios';
import MapPage from './pages/map';
import { Switch, Route } from "react-router-dom";

// TODO: Typescript
// TODO: scss and css-modules
// TODO: Unit tests - jest?
// TODO: Firebase?

function App() { // TODO: Function components and hooks
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
