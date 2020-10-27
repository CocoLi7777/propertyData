import { useState } from 'react';
import axios from 'axios';

export const usePropertyFetch = () => {
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchProperty = async (endpoint, propertyId) => {
    setLoading(true);
    setError(false);
    try {
      const queryResult = await axios.get(`${endpoint}/${propertyId}`);

      const result = queryResult.data.data;
      setProperty({ result });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return [{ property, loading, error }, fetchProperty];
};
