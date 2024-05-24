"use client"
import React, { useState } from 'react';
import { FaCircle, FaAngleDown, FaUser, FaEnvelope, FaChartLine, FaUserCog, FaArrowRight, FaHome, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';import './style.css';
import { FiSettings } from 'react-icons/fi';
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='alls'>
      <nav className="navbar">
        <img src="/cogrow.png" className="navbar-logo" alt="logo" />
        <ul className="navbar-list">
          <li>
            <a href="/">
              <FaHome style={{marginRight: "10px",}}/> Home
            </a>
          </li>
          <li>
            <a href="/Components/about">
              <FaInfoCircle style={{marginRight: "10px",}}/> About Us
            </a>
          </li>
          <li>
            <a href="/Components/ContactUs">
              <FaPhoneAlt style={{marginRight: "10px",}}/> Contact Us
            </a>
          </li>
        </ul>

      </nav>
    </div>
  );
}
