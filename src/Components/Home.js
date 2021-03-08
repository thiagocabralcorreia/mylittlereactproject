import React from 'react';
import Button from './Button/Button';
import { Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Route path="/" component={Button} />
    </div>
  );
};

export default Home;
