import React, { useState, useEffect } from 'react';
import { ROOT_API } from './config';
import { usePropertyFetch } from './components/hooks/usePropertyFetch';

export const Home = () => {
  const [{ property, loading, error }, fetchProperty] = usePropertyFetch();

  useEffect(() => {
    fetchProperty(ROOT_API, 789012);
  }, []);
  //if (error === true) return <Error />;
  //if (loading === true) return <Spinner />;
  return <div></div>;
};
