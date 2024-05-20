"use client"
import React, { useState } from 'react';
import "./style.css"
const industries = [
  'Agriculture',
  'Business Services',
  'Education & Training',
  'Energy & Natural Resources',
  'Entertainment & Leisure',
  'Fashion & Beauty',
  'Finance',
  'Food & Beverage',
  'Hospitality, Restaurants & Bars',
  'Manufacturing & Engineering',
  'Media',
  'Medical & Sciences',
];

const IndustrySelector = () => {
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  const handleIndustryChange = (event) => {
    const { name, checked } = event.target;
    const newSelectedIndustries = [...selectedIndustries];
    if (checked) {
      if (newSelectedIndustries.length < 3) {
        newSelectedIndustries.push(name);
      }
    } else {
      const index = newSelectedIndustries.indexOf(name);
      newSelectedIndustries.splice(index, 1);
    }
    setSelectedIndustries(newSelectedIndustries);
  };

  return (
    <div className="industry-selector">
      <h1 className='h1' style={{fontSize:"35px"}}>Select up to 3 industries you're interested in:</h1>
      <h2 className='h2' style={{fontSize:"25px"}}>You can always change your chosen industries later if you change your mind</h2>
      <div className="industries">
        {industries.map((industry) => (
          <div key={industry} className="industry-option">
            <input
              type="checkbox"
              id={industry}
              name={industry}
              checked={selectedIndustries.includes(industry)}
              onChange={handleIndustryChange}
            />
            <label htmlFor={industry}>{industry}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrySelector;
