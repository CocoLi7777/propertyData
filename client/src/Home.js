import React, { useState, useEffect } from 'react';
import { ROOT_API } from './config';
import { usePropertyFetch } from './components/hooks/usePropertyFetch';
import { BarChart } from './components/elements/BarChart';

export const Home = () => {
  const [{ property, loading, error }, fetchProperty] = usePropertyFetch();

  useEffect(() => {
    fetchProperty(ROOT_API, 789012);
    console.log(property);
  }, []);
  //if (error === true) return <Error />;
  //if (loading === true) return <Spinner />;
  return (
    <div>
      <BarChart property={property.result.income} title={'Income'} />
      <BarChart property={property.result.expense} title={'Expense'} />
    </div>
  );
};
