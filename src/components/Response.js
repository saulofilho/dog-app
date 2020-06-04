import React from 'react';
// import logo from './logo.svg';
// import './App.css';

const Response = ({ food }) => {
  return (
    <div className="">
      <h3>response:</h3>
      {food.map(foodInfo => (
        <div key={foodInfo.id}>
          <p>{foodInfo.eat}</p>
          <p>{foodInfo.infos}</p>
        </div>
      ))}
    </div>
  );
};

export default Response;
