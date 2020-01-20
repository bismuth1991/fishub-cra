import React from 'react';
import {Link} from '@reach/router';

const isActive = ({isCurrent}) => {
  const baseClasses = 'opacity-75 text-fishub-brand hover:opacity-100';
  const activeClasses = 'border-b-2 border-fishub-green opacity-100';

  return isCurrent
    ? {className: `${baseClasses} ${activeClasses}`}
    : {className: baseClasses};
};

const NavLink = props => {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Link getProps={isActive} {...props} />;
};

export default NavLink;
