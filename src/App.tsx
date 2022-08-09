import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hello from '../src/components/Hello'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Hello />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
