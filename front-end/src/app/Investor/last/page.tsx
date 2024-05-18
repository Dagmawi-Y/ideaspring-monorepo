import React from 'react';
import "./style.css"

const IndexPage = () => {
  return (
    <div className="container">
      <h1 className="h1">What's your professional background?</h1>
      <h2 className="h2">
        We use this information to prioritize your profile for the best investment deals. The more specific you can be, the better!
      </h2>
      <div className="background-section">
  <span className="background-title">Professional background</span>
  <textarea className="background-input" rows="4" placeholder="eg. I worked in Management Consultancy for 10 years before founding a restaurant chain which exited last year."></textarea>
  <a href="#" className="link">
        Click to see how this will display
      </a>
</div>
      
    </div>
  );
};

export default IndexPage;
