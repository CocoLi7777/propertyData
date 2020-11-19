import React, { useEffect } from 'react';
//import { Router } from '@reach/router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './components/styles/GlobalStyle';
import Header from './components/elements/Header';
import { Home } from './Home';
import Landing from './Landing';
import Login from './components/elements/auth/Login';
import Register from './components/elements/auth/Register';
import Alert from './components/elements/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
        <Route exact path="/dashboard" component={Home} />
        <GlobalStyle />
      </Router>
    </Provider>
  );
};

export default App;
