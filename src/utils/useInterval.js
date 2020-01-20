/**
 * Custom useInterval hook created by Dan Abramov
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */

import {useEffect, useRef} from 'react';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  // eslint-disable-next-line
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay * 1000);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
