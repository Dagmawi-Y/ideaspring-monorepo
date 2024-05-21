'use client';
import React, { useState } from 'react';
import './form.css';
import FormInput from './forms';
// import T from "../../t/page"
import { RiArrowRightLine } from 'react-icons/ri';

const initialState = {
  name: '',
  linkedin: '',
  position: '',
  bio: '',
};
const App = ({ setActiveLink }) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
    location: '',
    industry1: '',
    industry2: '',
    stage: '',
    idealInvestorRole: '',
    previousRaise: '',
    totalRaise: '',
    totalRaiseProgress: '',
    minimumInvestment: '',
  });

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  const inputs = [
    {
      id: 1,
      name: 'Pitch Title',
      type: 'textarea', // Change the type to 'textarea'
      // placeholder: 'Short Summary',
      errorMessage:
        "Pitch Title should be less than 25 characters and shouldn't include any special characters!",
      label: 'Short Summary',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
  ];

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Team</h1>
        <h2 className="h22">a</h2>
        <h3>55% complete</h3>
        <div className="col">
          <div className="formpage">
            {inputs.map((input) => {
              if (input.type === 'checkbox') {
                return (
                  <div className="form-group" key={input.id}>
                    <input
                      type="checkbox"
                      id={input.name}
                      name={input.name}
                      checked={values[input.name]}
                      onChange={(e) =>
                        handleChange(input.name, e.target.checked)
                      }
                    />
                    <label htmlFor={input.name}>{input.label}</label>
                  </div>
                );
              } else {
                return (
                  <div className="form-group" key={input.id}>
                    <br />
                    <label htmlFor={input.name}>{input.label}</label>
                    <br />
                    <textarea
                      id={input.name}
                      name={input.name}
                      value={values[input.name]}
                      onChange={(e) => handleChange(input.name, e.target.value)}
                      placeholder={input.placeholder}
                    />
                  </div>
                );
              }
            })}
            <br />
            {/* <T /> */}
            <button type="submit">Save and Continue</button>
          </div>
          <div className="image">
            <div className="explore__card">
              <span>
                <i className="ri-heart-pulse-fill"></i>
              </span>
              <img src="/team.avif" alt="logo" />
              <p>
                Offers a dedicated section or feature on the website to showcase
                selected Entrepreneurs to a broader audience, including
                potential investors, industry experts, and the Entrepreneurs
                community at large.
              </p>
              <a href="#" style={{ color: '#f88630' }}>
                Join Now <RiArrowRightLine />
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
