import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import AuthRoute from './auth/AuthRoute';
import ProtectedRoute from './auth/ProtectedRoute';
import Baits from './pages/Baits';
import TackleBox from './pages/TackleBox';
import Activities from './pages/Activities';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './header/Header';
import Footer from './footer/Footer';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <main className="container pt-12 pb-6 px-4">
        <Switch>
          <AuthRoute path="/login" component={Login} />
          <AuthRoute path="/sign-up" component={SignUp} />
          <ProtectedRoute path="/tackle-box" component={TackleBox} />
          <ProtectedRoute path="/activities" component={Activities} />
          <Route path="/baits" component={Baits} />
          <Route path="/" component={Baits} />
        </Switch>
      </main>
      <Footer />
    </HashRouter>
  );
};

export default App;
