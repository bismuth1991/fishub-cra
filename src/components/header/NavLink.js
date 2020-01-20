import React from 'react';
import {Link} from '@reach/router';

const baseClasses = 'opacity-75 text-fishub-brand hover:opacity-100';
const baseActiveClasses = 'border-b-2 border-fishub-green opacity-100';
const mainNavClasses = 'text-2xl';

const isActive = ({isCurrent}) => {
  return isCurrent
    ? {className: `${baseClasses} ${baseActiveClasses}`}
    : {className: baseClasses};
};

const isMainNavActive = ({isCurrent}) => {
  return isCurrent
    ? {className: `${baseClasses} ${mainNavClasses} ${baseActiveClasses}`}
    : {className: `${baseClasses} ${mainNavClasses}`};
};

export const NavLink = props => {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Link getProps={isActive} {...props} />;
};

export const MainNavLink = props => {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Link getProps={isMainNavActive} {...props} />;
};
