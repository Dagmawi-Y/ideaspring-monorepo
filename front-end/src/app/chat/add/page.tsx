"use client"
import "./style.css";
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
const Card = () => {
  const [selectedInvestor, setSelectedInvestor] = useState(null);

  const handleSelectInvestor = (investor) => {
    setSelectedInvestor(investor);
  };

  const renderInvestorCard = () => {
    if (selectedInvestor) {
      return (
        <div className="card">
          <p className="card-text">User Information</p>
          <div className="user-container">
            <p>Username: {selectedInvestor.username}</p>
            <p>Email: {selectedInvestor.email}</p>
            {/* Add more user information as needed */}
          </div>
        </div>
      );
    } else {
      return (
        <div className="card">
          <p className="card-text">You don't have any investors interested yet.</p>
          <p className="card-text">Make sure your pitch is well filled in.</p>
          <p className="card-text">Then search the investors and get nudging!</p>
          <div className="button-container">
            <button className="add-pitch-button">+</button>
            <FaChevronRight className="arrow" />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="card-container">
      {renderInvestorCard()}
    </div>
  );
}

export default Card;