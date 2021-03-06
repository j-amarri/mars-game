import React from 'react'
import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom'

import WelcomeView from './views/WelcomeView'
import AboutView from './views/AboutView'
import GameView from './views/GameView'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={WelcomeView} exact />
        <Route path="/about" component={AboutView} exact />
        <Route path="/game" component={GameView} exact />
      </BrowserRouter>
    </div>
  )
}

export default App
