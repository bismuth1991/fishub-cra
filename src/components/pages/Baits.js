import React, {useEffect, useState} from 'react';
import BaitCard from '../baits/BaitCard';
import {useAxios} from '../context/AxiosContext';

const Baits = () => {
  const [baits, setBaits] = useState([]);

  const axios = useAxios();

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/baits',
    })
      .then(res => setBaits(res.data))
      .catch(() => {});
  }, [axios]);

  return (
    <ul>
      {baits.map(bait => (
        <li key={bait.id}>
          <BaitCard
            name={bait.name}
            category={bait.category}
            imageUrl={bait.image_url}
          />
        </li>
      ))}
    </ul>
  );
};

export default Baits;
