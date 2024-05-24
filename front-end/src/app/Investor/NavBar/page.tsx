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

        <div className="profile-dropdown" >
          <div onClick={toggleDropdown} className="profile-dropdown-btn">
            <div className="profile-imgg">
              <FaCircle style={{color:"#54f985", width:"9px", height:'9px'}} />
            </div>
            <p>
              Victoria <FaAngleDown/>
            </p>
          </div>

          {isOpen && (
            <ul className={`profile-dropdown-list ${isOpen ? 'active' : ''}`}>
              <li className="profile-dropdown-list-item">
                <a href="/Investor/InvestorDetail">
                  <FaUser style={{color:"#f9ac54",marginRight:"10px"}}/> Profile
                </a>
              </li>
              <li className="profile-dropdown-list-item">
                <a href="/Investor/AccountSetting">
                  <FaUserCog style={{color:"#f9ac54", marginRight:"10px"}}/> Account setting
                </a>
              </li>
              <li className="profile-dropdown-list-item">
                <a href="/Investor/chat">
                  <FaEnvelope style={{color:"#f9ac54", marginRight:"10px"}}/> Inbox
                </a>
              </li>
              <li className="profile-dropdown-list-item">
                <a href="#">
                  <FaChartLine style={{color:"#f9ac54", marginRight:"10px"}}/> Analytics
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
