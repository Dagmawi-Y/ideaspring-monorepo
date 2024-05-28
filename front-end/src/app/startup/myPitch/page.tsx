"use client"
import React, { useState } from 'react';
import { FaTrash, FaMapMarkerAlt } from 'react-icons/fa';
import "./style.css"
import { FiChevronRight } from 'react-icons/fi';
import Pitchs from "./pitchs/page"


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
    <>
    <Pitchs/>
    </>
  );
}

export default Card;