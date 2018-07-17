import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Bot from './components/Bot'

import HomePage from './components/Home'

const App = () => (
  <Router>
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
      <Bot />
    </div>
  </Router>
)

export default App
