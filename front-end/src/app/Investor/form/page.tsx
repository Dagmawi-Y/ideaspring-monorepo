"use client"
import React, { useState } from 'react';
import First from "../first/page";
import Second from "../formtwo/formtwo";
import Third from "../RangeSlider/page";
import Fourth from "../formtwo/formtwo";
import './style.css'; // Import the CSS file for styling

export default function MultipleForm() {
  const [currentSection, setCurrentSection] = useState(1);
  const [backClicked, setBackClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  const nextSection = () => {
    setCurrentSection(currentSection + 1);
    setBackClicked(false);
    setNextClicked(true);
  };

  const prevSection = () => {
    setCurrentSection(currentSection - 1);
    setBackClicked(true);
    setNextClicked(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <div onSubmit={handleSubmit}>
        <div style={{ display: currentSection === 1 ? 'block' : 'none' }}>
          <First />
          <div className="button-container1">
          <button
              type="button"
              
              className={backClicked ? 'back-button clicked' : 'back-button'}
            >
              Back
            </button>
            <button
              type="button"
              onClick={nextSection}
              className={nextClicked ? 'next-button clicked' : 'next-button'}
            >
              Next
            </button>
          </div>
        </div>

        <div style={{ display: currentSection === 2 ? 'block' : 'none' }}>
          <Second />
          <div className="button-container">
            <button
              type="button"
              onClick={prevSection}
              className={backClicked ? 'back-button clicked' : 'back-button'}
            >
              Back
            </button>
            <button
              type="button"
              onClick={nextSection}
              className={nextClicked ? 'next-button clicked' : 'next-button'}
            >
              Next
            </button>
          </div>
        </div>

        <div style={{ display: currentSection === 3 ? 'block' : 'none' }}>
          <Third />
          <div className="button-container">
            <button
              type="button"
              onClick={prevSection}
              className={backClicked ? 'back-button clicked' : 'back-button'}
            >
              Back
            </button>
            <button
              type="button"
              onClick={nextSection}
              className={nextClicked ? 'next-button clicked' : 'next-button'}
            >
              Next
            </button>
          </div>
        </div>

        <div style={{ display: currentSection === 4 ? 'block' : 'none' }}>
          <Fourth />
          <div className="button-container">
            <button
              type="button"
              onClick={prevSection}
              className={backClicked ? 'back-button clicked' : 'back-button'}
            >
              Back
            </button>
            <button
              type="submit"
              className={nextClicked ? 'next-button clicked' : 'next-button'}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}