import React from 'react';
import {Router, createHistory, LocationProvider} from '@reach/router';
import createHashSource from 'hash-source';
import Baits from './pages/Baits';
import TackleBox from './pages/TackleBox';
import Activities from './pages/Activities';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './header/Header';

const App = () => {
  const source = createHashSource();
  const history = createHistory(source);

  return (
    <LocationProvider history={history}>
      <Header />
      <main className="container pt-12 pb-6 px-4">
        <Router>
          <Baits path="/" />
          <Baits path="baits" />
          <TackleBox path="tackle-box" />
          <Activities path="activities" />
          <Login path="login" />
          <SignUp path="sign-up" />
        </Router>
      </main>
    </LocationProvider>
  );
};

export default App;
