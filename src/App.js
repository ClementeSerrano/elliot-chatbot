import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Bot from './componentes/Bot';

import PagInicio from './paginas/PagInicio';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={PagInicio} />
      </Switch>
      <Bot />
    </div>
  </Router>
);

export default App;
