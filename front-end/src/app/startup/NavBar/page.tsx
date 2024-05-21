"use client"
import React, { useState } from 'react';
import { FaCircle, FaAngleDown, FaUser, FaEnvelope, FaChartLine, FaQuestionCircle, FaArrowRight } from 'react-icons/fa';
import './style.css';
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='all'>
      <nav className="navbar">
        <img src="/cogrow.png" className="navbar-logo" alt="logo" />
        <ul className="navbar-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">My Pitchs</a>
          </li>
          <li>
            <a href="#">My Investors</a>
          </li>
          <li>
            <a href="#">Investor Search</a>
          </li>
          {/* <li>
            <a href="#">About</a>
          </li> */}
        </ul>

        <div className="profile-dropdown">
          <div onClick={toggleDropdown} className="profile-dropdown-btn">
            <div className="profile-imgg">
              <FaCircle style={{color:"#54f985", width:"10px", height:'10px'}} />
            </div>
            <p>
              Victoria <FaAngleDown/>
            </p>
          </div>

          {isOpen && (
            <ul className={`profile-dropdown-list ${isOpen ? 'active' : ''}`}>
              <li className="profile-dropdown-list-item">
                <a href="#">
                  <FaUser style={{color:"#f9ac54",marginRight:"10px"}}/> Edit Profile
                </a>
              </li>
              <li className="profile-dropdown-list-item">
                <a href="#">
                  <FaEnvelope style={{color:"#f9ac54", marginRight:"10px"}}/> Inbox
                </a>
              </li>
              <li className="profile-dropdown-list-item">
                <a href="#">
                  <FaChartLine style={{color:"#f9ac54", marginRight:"10px"}}/> Analytics
                </a>
              </li>
              <li className="profile-dropdown-list-item">
                <a href="#">
                  <FaQuestionCircle style={{color:"#f9ac54", marginRight:"10px"}}/> Help & Support
                </a>
              </li>
              <hr />
              <li className="profile-dropdown-list-item">
                <a href="#">
                  <FaArrowRight style={{color:"#f9ac54",marginRight:"10px"}}/> Log out
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}
