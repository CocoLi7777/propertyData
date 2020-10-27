import { useState } from 'react';
import axios from 'axios';

export const usePropertiesFetch = () => {
  const [properties, setProperties] = useState([]);
  const [allLoading, setAllLoading] = useState(false);
  const [allError, setAllError] = useState(false);

  const fetchProperties = async (endpoint) => {
    setAllLoading(true);
    setAllError(false);
    try {
      const queryResult = await axios.get(endpoint);

      const result = queryResult.data;
      setProperties(result);
    } catch (error) {
      setAllError(true);
    }
    setAllLoading(false);
  };

  return [{ properties, allLoading, allError }, fetchProperties];
};
