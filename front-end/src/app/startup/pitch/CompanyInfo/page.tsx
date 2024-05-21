'use client';
import React, { useState } from 'react';
import './form.css';
import FormInput from './forms';
// import Try from "../../try/page"
import { RiArrowRightLine } from 'react-icons/ri';
import apiClient from '@/utils/apiClient';
import Cookies from 'js-cookie';

const App = ({ setActiveLink }) => {
  const [values, setValues] = useState({
    startup_id: Cookies.get('startup_id') || null,
    short_summary: '',
    business_description: '',
    market_description: '',
    progress_proof: '',
    objectives_future: '',
  });

  const [highlights, setHighlights] = useState<string[]>([]);

  const handleHighlightChange = (index: number, value: string) => {
    const updatedHighlights = [...highlights];
    updatedHighlights[index] = value;
    setHighlights(updatedHighlights);
  };

  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
    console.log(`Field ${name} changed to ${value}`);
  };

  const handleChanges = (event) => {
    const value = event.target.value;
    console.log(value);
    setUserInput(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const highlightsString = highlights.join(', ');
      // Prepare the form data
      const formData = {
        startup_id: values.startup_id,
        short_summary: values.short_summary,
        business_description: values.business_description,
        market_description: values.market_description,
        progress_proof: values.progress_proof,
        objectives_future: values.objectives_future,
        highlights: highlightsString,
        // Include any other form fields as needed
      };

      console.log({
        formData,
      });
      // Send the POST request to update the pitch deal
      const response = await apiClient.put(
        `startups/${values.startup_id}/pitch-deal`,
        formData
      );
      console.log('Pitch deal updated successfully', response.data);
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors
    }
  };

  const inputs = [
    {
      id: 1,
      name: 'short_summary',
      type: 'textarea', // Change the type to 'textarea'
      // placeholder: 'Short Summary',
      errorMessage:
        "Pitch Title should be less than 25 characters and shouldn't include any special characters!",
      label: 'Short Summary',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'business_description',
      type: 'textarea', // Change the type to 'textarea'
      // placeholder: 'Website',
      errorMessage: 'It should be a valid website address!',
      label: 'The Business',
      required: true,
    },
    {
      id: 3,
      name: 'market_description',
      type: 'textarea', // Change the type to 'textarea'
      // placeholder: 'Location',
      label: 'The Market',
    },
    {
      id: 4,
      name: 'progress_proof',
      type: 'textarea', // Change the type to 'textarea'
      // placeholder: 'Website',
      errorMessage: 'It should be a valid website address!',
      label: 'Progress/Proof',
      required: true,
    },
    {
      id: 5,
      name: 'objectives_future',
      type: 'textarea', // Change the type to 'textarea'
      // placeholder: 'Location',
      label: 'Objectives/Future',
    },
    {
      id: 6,
      name: 'Loan',
      type: 'checkbox',
      label: 'Loan',
    },
    {
      id: 7,
      name: 'Equity',
      type: 'checkbox',
      label: 'Equity',
    },
  ];
  const [userInput, setUserInput] = useState('');
  const maxLength = 75;

  const charactersRemaining = maxLength - userInput.length;
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Pitch and Deal</h1>
        <h2>a</h2>
        <h3>50% complete</h3>
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
                      placeholder={input.label}
                    />
                  </div>
                );
              }
            })}
            <br />
            <br />
            <label style={{ fontSize: 'larger' }}>Highlights</label>
            <br />
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="containerk">
                <div
                  className="characters-remaining"
                  style={{
                    color: '#898888b8',
                    marginLeft: '350px',
                    fontSize: '13px',
                  }}
                >
                  {charactersRemaining} characters remaining
                </div>
                <div style={{ display: 'flex' }}>
                  <p
                    style={{
                      border: '1px solid #dddddd',
                      padding: '20px',
                      height: '5px',
                      marginTop: '10px',
                      backgroundColor: '#eeeef0',
                    }}
                  >
                    {index + 1}
                  </p>
                  <input
                    type="text"
                    maxLength={maxLength}
                    value={highlights[index] || ''}
                    onChange={(e) =>
                      handleHighlightChange(index, e.target.value)
                    }
                    style={{ width: '410px' }}
                  />
                </div>
              </div>
            ))}
            <br />
            <label style={{ fontSize: 'larger' }}>Tags</label>
            <br />
            <br />
            <p className="cap">
              Enter 5 to 10 relevant keywords. These are really important to
              help investors find your pitch in our search engine. We always
              suggest using short and obvious tags that you think investors
              would actually search for. - (Press the Return key after each
              keyword to enter it)
            </p>
            <br />
            <br />

            {/* <Try /> */}
            <button type="submit">Save and Continue</button>
          </div>
          <div className="image">
            <div className="explore__card">
              <span>
                <i className="ri-heart-pulse-fill"></i>
              </span>
              <img src="/office2.jpg" alt="logo" />
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
