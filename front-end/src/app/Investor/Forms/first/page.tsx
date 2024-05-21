"use client"
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./style.css";
import ComponentOneForm from "../Forms/view/formone/pagee
import ComponentTwoForm from "../Forms/view/formtwo/formtwoo

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      if (selectedOption === "option1") {
        setCurrentComponent(<ComponentOneForm />);
      } else if (selectedOption === "option2") {
        setCurrentComponent(<ComponentTwoForm />);
      }
    } else {
      setCurrentComponent(null);
    }
  };

  const handleBack = () => {
    setSelectedOption(null);
    setCurrentComponent(null);
  };

  if (currentComponent) {
    return (
      <>
        {currentComponent}
      </>
    );
  }

  return (
    <>
      <div className="h1">What type of investor are you?</div>
      <div className="h2">
        For the purposes of the Financial Services and Markets Act (Financial Promotion) Order 2005, I declare that I
        am a:
      </div>
      <div className="flex">
        <div className="custom-container">
          <div className="custom-box">
            <div className="custom-radio-container">
              <input
                type="radio"
                id="option1"
                name="option"
                defaultChecked
                onChange={() => handleOptionChange("option1")}
              />
              <label htmlFor="option1">
                <span></span>
                <h3>Self-Certified Sophisticated Investor</h3>
              </label>
            </div>
          </div>
        </div>

        <div className="custom-container">
          <div className="custom-box">
            <div className="custom-radio-container">
              <input
                type="radio"
                id="option2"
                name="option"
                onChange={() => handleOptionChange("option2")}
              />
              <label htmlFor="option2">
                <span></span>
                <h3>High Net Worth Individual</h3>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="button-container">
        <button className="icon-button" onClick={handleBack}>
          <FaArrowLeft />
        </button>
        <button className="icon-button" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>

      {currentComponent && (
        <div>
          <h2>Rendered Component:</h2>
          {currentComponent}
        </div>
      )}
    </>
  );
};

export default RadioButton;