import React from 'react';
import {bool} from 'prop-types';
import {Link} from 'react-router-dom';

const BaitCardButton = ({isSelected}) => {
  const baseClasses =
    'flex items-center justify-center mt-4 py-2 px-4 border border-solid border-fishub-secondary rounded-lg uppercase text-sm focus:outline-none m-auto';

  const linkClasses =
    'bg-fishub-secondary text-white hover:bg-fishub-secondary-dark';

  const buttonClasses = 'hover:bg-fishub-secondary hover:text-white';

  if (isSelected) {
    return (
      <button type="button" className={`${baseClasses} ${linkClasses}`}>
        <Link to="/tackle-box">
          <i className="fas fa-toolbox pr-2 w-" />
          In Tackle Box
        </Link>
      </button>
    );
  }

  return (
    <button type="button" className={`${baseClasses} ${buttonClasses}`}>
      <i className="fas fa-toolbox pr-2" />
      Tackle Box
    </button>
  );
};

BaitCardButton.propTypes = {
  isSelected: bool.isRequired,
};

export default BaitCardButton;
