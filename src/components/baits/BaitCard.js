import React from 'react';
import {string, bool} from 'prop-types';
import BaitImage from './BaitImage';
import BaitCardButton from './BaitCardButton';

const BaitCard = ({name, category, imageUrl, isSelected}) => {
  return (
    <figure className="p-4 bg-white shadow-lg mb-6 rounded border border-solid border-gray-300">
      <BaitImage src={imageUrl} alt={name} />

      <h3 className="text-center text-xl">{name}</h3>
      <h4 className="text-center pt-1">{category}</h4>

      <BaitCardButton isSelected={isSelected} />
    </figure>
  );
};

BaitCard.propTypes = {
  name: string.isRequired,
  category: string.isRequired,
  imageUrl: string.isRequired,
  isSelected: bool.isRequired,
};

export default BaitCard;
