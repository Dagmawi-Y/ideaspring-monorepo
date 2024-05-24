"use client"
import React, { useState } from 'react';
import './style.css';
import { Range } from 'react-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../Forms/RangeSlider/style.css';

 

const IndustrySelection = () => {
  const [locations, setLocations] = useState([]);
  const [stages, setStages] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [values, setValues] = useState([25, 75]);

  const handleRangeChange = (newValues) => {
    setValues(newValues);
  };
  const locationOptions = ["Addis Ababa",
  "Afar",
  "Amhara",
  "Benishangul-Gumuz",
  "Dire Dawa",
  "Gambela",
  "Harari",
  "Oromia",
  "Sidama",
  "Tigray"];
  const stageOptions = ["Achieving Sales",
  "Breaking Even",
  "MVP/Finished Product",
  "Other",
  "Pre-Startup/R&D",
  "Profitable"];
  const industryOptions = ["Agriculture",
  "Business Services",
  "Education & Training",
  "Energy & Natural Resources",
  "Entertainment & Leisure",
  "Fashion & Beauty",
  "Finance",
  "Food & Beverage",
  "Hospitality",
  "Restaurants & Bars",
  "Manufacturing & Engineering",
  "Media",
  "Medical & Sciences",
  "Personal Services",
  "Products & Inventions",
  "Property",
  "Retail",
  "Sales & Marketing"];

  const toggleCheckAll = (type, checked) => {
    switch (type) {
      case 'location':
        setLocations(checked ? locationOptions : []);
        break;
      case 'stage':
        setStages(checked ? stageOptions : []);
        break;
      case 'industry':
        setIndustries(checked ? industryOptions : []);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (type, value, checked) => {
    switch (type) {
      case 'location':
        setLocations(checked ? [...locations, value] : locations.filter((loc) => loc !== value));
        break;
      case 'stage':
        setStages(checked ? [...stages, value] : stages.filter((stage) => stage !== value));
        break;
      case 'industry':
        setIndustries(checked ? [...industries, value] : industries.filter((industry) => industry !== value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to a server
    console.log('Locations:', locations);
    console.log('Stages:', stages);
    console.log('Industries:', industries);
  };

  return (
    <div className="containerg">
      <div className="content">
      <h2 style={{background:"white"}}>Investment Criteria</h2>
      <h3>I'm interested in projects looking to raise between 25,000 - 5,000,000</h3>
      <div className="range-slider-container" style={{margin:"0px", marginBottom:"-300px"}}>
      <Range
        values={values}
        step={1000}
        min={0}
        max={5000000}
        onChange={handleRangeChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="range-slider-track"
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="range-slider-thumb"
          >
            <>
              <FontAwesomeIcon icon={faChevronLeft} />
              <FontAwesomeIcon icon={faChevronRight} />
            </>
            <div className="range-slider-thumb-value">
              {values[props.index]}
            </div>
          </div>
        )}
      />
      <div className="range-slider-values">
        <span className='value'>Min: {values[0]}$</span>
        <span className="range-slider-value-separator">-</span>
        <span className='value'>Max: {values[1]}$</span>
      </div>
    </div>
        <h3>What locations are you interested in?</h3>
        <div className="checkbox-list">
          <div>
            <label htmlFor="checkAllLocations">
              <input
                type="checkbox"
                id="checkAllLocations"
                checked={locations.length === locationOptions.length}
                onChange={(e) => toggleCheckAll('location', e.target.checked)}
              />
              Check All
            </label>
          </div>
          {locationOptions.map((location) => (
            <div key={location}>
              <label htmlFor={location}>
                <input
                  type="checkbox"
                  id={location}
                  name="location[]"
                  value={location}
                  checked={locations.includes(location)}
                  onChange={(e) => handleCheckboxChange('location', location, e.target.checked)}
                />
                {location}
              </label>
            </div>
          ))}
        </div>
        <h3>What stages of business are you interested in?</h3>
        <div className="checkbox-list">
          <div>
            <label htmlFor="checkAllStages">
              <input
                type="checkbox"
                id="checkAllStages"
                checked={stages.length === stageOptions.length}
                onChange={(e) => toggleCheckAll('stage', e.target.checked)}
              />
              Check All
            </label>
          </div>
          {stageOptions.map((stage) => (
            <div key={stage}>
              <label htmlFor={stage}>
                <input
                  type="checkbox"
                  id={stage}
                  name="stage[]"
                  value={stage}
                  checked={stages.includes(stage)}
                  onChange={(e) => handleCheckboxChange('stage', stage, e.target.checked)}
                />
                {stage}
              </label>
            </div>
          ))}
        </div>
        <h3>What industries are you interested in?</h3>
        <div className="checkbox-list">
          <div>
            <label htmlFor="checkAllIndustries">
              <input
                type="checkbox"
                id="checkAllIndustries"
                checked={industries.length === industryOptions.length}
                onChange={(e) => toggleCheckAll('industry', e.target.checked)}
              />
              Check All
            </label>
          </div>
          {industryOptions.map((industry) => (
            <div key={industry}>
              <label htmlFor={industry}>
                <input
                  type="checkbox"
                  id={industry}
                  name="industry[]"
                  value={industry}
                  checked={industries.includes(industry)}
                  onChange={(e) => handleCheckboxChange('industry', industry, e.target.checked)}
                />
                {industry}
              </label>
            </div>
          ))}
        </div>
        <button type="submit" onClick={handleSubmit} style={{width:"100%", backgroundColor:"#f9ac54"}}>
          Update
        </button>
      </div>
    </div>
  );
};

export default IndustrySelection;