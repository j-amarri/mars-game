import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import GameView from './views/GameView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={HomeView} exact />
        <Route path="/about" component={AboutView} exact />
        <Route path="/game" component={GameView} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
