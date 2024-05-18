"use client"
import React, { useState } from 'react';
import { Range } from 'react-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const RangeSlider = () => {
  const [values, setValues] = useState([25, 75]);

  const handleRangeChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div className="range-slider-container">
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
  );
};

export default RangeSlider;