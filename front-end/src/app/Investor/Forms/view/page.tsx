import React from 'react';
import "./style.css"
const IndexPage = () => {
  return (
    <div className="investor-card">
      <div className="card-header">
        <h2 className="card-title">Example Investor Card</h2>
        <p className="card-location">Your location will be shown like this</p>
      </div>
      <div className="card-body">
        <div className="image-placeholder"></div>
        <div className="investor-info">
          <p className="investment-range">
            £1- £1,000,000
          </p>
          <p className="investor-location">London, UK</p>
          <p className="investor-description">
            I am Legal and Risk Consultant. I am acting on behalf of my clients (2 venture capitalists to be precise). My instruction is to identify potential and...
          </p>
        </div>
        <div className="expertise-section">
          <p className="expertise-title">Areas of Expertise</p>
          <p className="expertise-list">E.G. Tech, Mobile, App Development</p>
        </div>
      </div>
      <button className="start-button">Start your application</button>
    </div>
  );
};

export default IndexPage;
