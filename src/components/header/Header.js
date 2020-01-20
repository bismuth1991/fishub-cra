import React from 'react';
import AuthNavBar from './AuthNavBar';
import Brand from './Brand';
import MainNavBar from './MainNavBar';

const Header = () => {
  return (
    <header>
      <AuthNavBar />
      <Brand />
      <MainNavBar />
    </header>
  );
};

export default Header;
