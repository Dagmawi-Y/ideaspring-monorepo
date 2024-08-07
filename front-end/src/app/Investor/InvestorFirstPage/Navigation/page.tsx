'use client'
import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./style.css";

// Define the prop type for the handleInputChange prop
type HandleInputChangeType = (event: React.ChangeEvent<HTMLInputElement>) => void;

interface NavProps {
  handleInputChange: HandleInputChangeType;
  query: string;
}

const Nav: React.FC<NavProps> = ({ handleInputChange, query }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search for Bussiness Proposals."
        />
      </div>
      <div className="profile-container">
        
      </div>
    </nav>
  );
};

export default Nav;