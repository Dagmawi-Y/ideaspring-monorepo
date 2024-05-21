'use client'
import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./style.css";

type HandleInputChangeType = (event: React.ChangeEvent<HTMLInputElement>) => void;

interface NavProps {
  handleInputChange: HandleInputChangeType;
  query: string;
}

const Nav: React.FC<NavProps> = ({ handleInputChange, query }) => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search for Investors."
        />
      </div>
      <div className="profile-container">
        
      </div>
    </nav>
  );
};

export default Nav;