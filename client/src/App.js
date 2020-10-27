import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from './components/styles/GlobalStyle';
import Header from './components/elements/Header';
import { Home } from './Home';

import './App.css';

const App = () => (
  <div>
    <Header />
    <Router>
      <Home path="/" />
    </Router>
    <GlobalStyle />
  </div>
);

export default App;
