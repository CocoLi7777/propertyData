import React from 'react';
//import { Router } from '@reach/router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './components/styles/GlobalStyle';
import Header from './components/elements/Header';
import { Home } from './Home';
import Landing from './Landing';
import { Login } from './components/elements/auth/Login';
import { Register } from './components/elements/auth/Register';

import './App.css';

const App = () => (
  <Router>
    <Route exact path="/" component={Landing} />
    <section className="container">
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </section>
    <GlobalStyle />
  </Router>
);

export default App;
