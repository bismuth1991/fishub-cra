import React from 'react';
import Router from '@reach/router';
import Baits from './pages/Baits';
import TackleBox from './pages/TackleBox';
import Activities from './pages/Activities';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './header/Header';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Router>
          <Baits path="/" />
          <Baits path="baits" />
          <TackleBox path="tackle-box" />
          <Activities path="activities" />
          <Login path="login" />
          <SignUp path="sign-up" />
        </Router>
      </main>
    </>
  );
};

export default App;
