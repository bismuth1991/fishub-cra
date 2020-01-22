import React from 'react';
import {string} from 'prop-types';

const BaitImage = ({src, alt}) => {
  return (
    <div className="bait relative h-0 pb-1/2">
      <img
        src={src}
        alt={alt}
        className="absolute h-full w-full object-cover"
      />
    </div>
  );
};

BaitImage.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
};

export default BaitImage;
