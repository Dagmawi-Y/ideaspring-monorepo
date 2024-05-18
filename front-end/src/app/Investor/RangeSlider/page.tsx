import React from 'react';
import RangeSlider from './RangeSlider';
import "./style.css"
const HomePage = () => {
  return (
    <div>
      <h1 className='h1'>How much are you looking to invest?</h1>
      <h2 className='h2'>Your investment range will help us match you with suitable investment opportunities.</h2>
      <RangeSlider />
    </div>
  );
};

export default HomePage;