"use client"
import React, { useState } from 'react';
import { FaTrash, FaMapMarkerAlt } from 'react-icons/fa';
import "./style.css"

const Card = ({ img, title, investmentRange, location, AreaOfExperties, description }) => {
  const [cards, setCards] = useState([1]);

  const handleAddCard = () => {
    setCards([...cards, cards.length + 1]);
  }

  const handleDeleteCard = (cardId) => {
    const updatedCards = cards.filter((id) => id !== cardId);
    setCards(updatedCards);
  }

  return (
    <div className="card-container">
      <div className="card">
        <p className="card-text">Hit the big orange button to add a new pitch.</p>
        <div className="button-container">
          <button className="add-pitch-button">+</button>
          <i className="fas fa-chevron-right arrow"></i>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-img">
            <img
              src={img}
              alt="Profile picture of Deepam A."
              width={280}
              height={280}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="profile-info">
            <h2>{title}</h2>
            <p>
              <span className="location-icon">
                <FaMapMarkerAlt />
              </span>
              {location}
            </p>
          </div>
        </div>
        <div className="profile-content">
          <div className="investment-range">
            <h3>Investment Range</h3>
            <p>{investmentRange}</p>
          </div>
          <p>{description}</p>
          <div className="expertise">
            <h3>Areas of Expertise</h3>
            <p>{AreaOfExperties}</p>
          </div>
          <div className="profile-buttons">
            <button>
              Mange my pitch
            </button>
            <button><FaTrash/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;