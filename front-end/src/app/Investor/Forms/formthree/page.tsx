"use client"
import React, { useState } from 'react';
import './style.css'; // Import the CSS file

const Form = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'city') {
      setCity(value);
    } else if (name === 'country') {
      setCountry(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { city, country });
    // You can handle form submission here, e.g., send data to server
  };

  return (
    <div className="form-container" style={{height:"375px"}} onSubmit={handleSubmit}>
      <h1 className='h1'>Where are you based?</h1>
      <h2 className='h2'>Your location will help us match you with investment opportunities in your area.</h2>
      <div className="form-group">
        <label htmlFor="city">City/Town *</label>
        <input type="text" id="city" name="city" value={city} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select id="country" name="country" value={country} onChange={handleChange} style={{ height: '60px' , width:'470px'}}>
          <option value="">Select Country</option>
          <option value="UK">United Kingdom</option>
          {/* Add more country options here */}
        </select>
      </div>
      <button className="bu" type="submit">Click to see how this will display</button>
    </div>
  );
};

export default Form;