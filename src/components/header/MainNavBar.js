import React from 'react';
import {NavLink} from 'react-router-dom';

const MainNavBar = () => {
  return (
    <nav className="px-6 py-6 bg-fishub-nav-main opacity-80">
      <ul className="flex justify-around">
        <li>
          <NavLink
            to="/baits"
            className="nav-link text-2xl"
            activeClassName="nav-link--active"
          >
            Baits
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tackle-box"
            className="nav-link text-2xl"
            activeClassName="nav-link--active"
          >
            Tackle Box
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/activities"
            className="nav-link text-2xl"
            activeClassName="nav-link--active"
          >
            Activities
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavBar;
