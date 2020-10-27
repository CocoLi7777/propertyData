import React, { useState, useEffect } from 'react';
import { ROOT_API } from './config';
import { usePropertyFetch } from './components/hooks/usePropertyFetch';
import { usePropertiesFetch } from './components/hooks/usePropertiesFetch';
import { BarChart } from './components/elements/BarChart';
import { DropdownMenu } from './components/elements/DropdownMenu';
import { Spinner } from './components/elements/Spinner';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

export const Home = () => {
  const [{ property, loading, error }, fetchProperty] = usePropertyFetch();
  const [
    { properties, allLoading, allError },
    fetchProperties,
  ] = usePropertiesFetch();
  const [selectProperty, setSelectProperty] = useState(123456);

  const handlePropertyChange = (value) => {
    setSelectProperty(value);
  };

  useEffect(() => {
    fetchProperty(ROOT_API, selectProperty);
    fetchProperties(ROOT_API);
  }, [selectProperty]);
  //if (error === true) return <Error />;
  if (loading === true) return <Spinner />;
  return (
    <div>
      <Row span={12}>
        <DropdownMenu callback={handlePropertyChange} properties={properties} />
      </Row>
      <Row>
        <Col span={12}>
          <BarChart
            property={property.result && property.result.income}
            title={'Income'}
          />
        </Col>
        <Col span={12}>
          <BarChart
            property={property.result && property.result.expense}
            title={'Expense'}
          />
        </Col>
      </Row>
    </div>
  );
};
