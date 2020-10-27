import { useState } from 'react';
import axios from 'axios';

export const usePropertyFetch = () => {
  const [property, setProperty] = useState({ property: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchProperty = async (endpoint, propertyId) => {
    setLoading(true);
    setError(false);
    try {
      const queryResult = await axios.get(`${endpoint}/${propertyId}`);

      const result = queryResult.data;
      console.log(result);
      setProperty({ property: result });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return [{ property, loading, error }, fetchProperty];
};
