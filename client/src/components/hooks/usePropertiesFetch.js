import { useState } from 'react';
import axios from 'axios';

export const usePropertyFetch = () => {
  const [properties, setProperties] = useState({ properties: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchProperties = async (endpoint, keywordQuery) => {
    setLoading(true);
    setError(false);
    try {
      const queryResult = await axios.get(endpoint);

      const result = queryResult.data;
      setProperties({ properties: result });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return [{ properties, loading, error }, fetchProperties];
};
