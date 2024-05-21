"use client"
import React, { useState } from 'react';
import { FaTrash, FaMapMarkerAlt } from 'react-icons/fa';
import "./style.css"
import { FiChevronRight } from 'react-icons/fi';

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
        </div>
      </div>
    </div>
  );
}

export default Card;