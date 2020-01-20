import React from 'react';
import {MainNavLink} from './NavLink';

const MainNavBar = () => {
  return (
    <nav className="px-6 py-6 bg-fishub-nav-main opacity-80">
      <ul className="flex justify-around">
        <li>
          <MainNavLink to="baits">Baits</MainNavLink>
        </li>
        <li>
          <MainNavLink to="tackle-box">Tackle Box</MainNavLink>
        </li>
        <li>
          <MainNavLink to="activities">Activities</MainNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavBar;
