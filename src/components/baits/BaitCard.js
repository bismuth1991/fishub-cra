import React from 'react';
import {string} from 'prop-types';
import BaitImage from './BaitImage';

const BaitCard = ({name, category, imageUrl}) => {
  return (
    <figure className="p-4 bg-white shadow-lg mb-6 rounded border border-solid border-gray-300">
      <BaitImage src={imageUrl} alt={name} />

      <h3 className="text-center text-xl">{name}</h3>
      <h4 className="text-center pt-1">{category}</h4>

      <button
        type="button"
        className="flex items-center mt-4 py-2 px-4 border border-solid border-fishub-secondary rounded-lg uppercase text-sm hover:bg-fishub-secondary hover:text-white focus:outline-none m-auto"
      >
        <i className="fas fa-toolbox pr-2" />
        Tackle Box
      </button>
    </figure>
  );
};

BaitCard.propTypes = {
  name: string.isRequired,
  category: string.isRequired,
  imageUrl: string.isRequired,
};

export default BaitCard;
