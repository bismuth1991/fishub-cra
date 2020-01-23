import React, {useEffect, useState} from 'react';
import BaitCard from '../baits/BaitCard';
import {useAxios} from '../context/AxiosContext';
import {useAuthState} from '../context/AuthContext';

const Baits = () => {
  const [state, setState] = useState({
    baits: [],
    selectedBaitIds: [],
  });

  const axios = useAxios();
  const {user, accessToken, hasFetchedUser} = useAuthState();

  useEffect(() => {
    const fetchData = async () => {
      const baits = await axios({
        method: 'GET',
        url: '/api/baits',
      });

      if (user) {
        const selectedBaitIds = await axios({
          method: 'GET',
          url: '/api/selected-bait-ids',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setState({
          baits: baits.data,
          selectedBaitIds: selectedBaitIds.data,
        });
      } //
      else {
        setState({
          baits: baits.data,
          selectedBaitIds: [],
        });
      }
    };

    if (hasFetchedUser) {
      try {
        fetchData();
      } catch (e) {
        // eslint-disable-next-line
        console.log(e);
      }
    }
  }, [accessToken, axios, hasFetchedUser, user]);

  return (
    <ul>
      {state.baits.map(bait => (
        <li key={bait.id}>
          <BaitCard
            name={bait.name}
            category={bait.category}
            imageUrl={bait.image_url}
            isSelected={
              !!state.selectedBaitIds.find(
                selectedId => Number(selectedId) === Number(bait.id),
              )
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default Baits;
