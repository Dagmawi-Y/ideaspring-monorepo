"use client"
import React, { useState } from 'react';
import "./styl.css";
import { FaBars, FaTimes, FaQrcode, FaLink, FaStream, FaCalendar, FaQuestionCircle, FaSlidersH, FaEnvelope } from 'react-icons/fa';
import Form from "./Form/page"; 
import Pitch from "./CompanyInfo/page"
import NavBar from "../NavBar/page"
import Team from "./Team/page"
import Picture from "./image/page"
import Document from "./document/page"

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('Form'); 

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
    <NavBar/>
      <input type="checkbox" id="check" />
      {/* <label htmlFor="check">
        {expanded ? (
          <FaBars id="cancel" onClick={toggleSidebar} />
        ) : (
          <FaTimes id="btn" onClick={toggleSidebar} />
        )}
      </label> */}
      <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
        <header></header>
        <a
          href="#"
          className={activeLink === 'Form' ? 'active' : ''}
          onClick={() => handleLinkClick('Form')}
        >
          <FaQrcode />
          {/* <span className='Stitle'>CompancyInfo</span> */}
          &nbsp; Company Info
        </a>
        <a
          href="#"
          className={activeLink === 'Pitch' ? 'active' : ''}
          onClick={() => handleLinkClick('Pitch')}
        >
          <FaLink />
          {/* <span className='Stitle'>Shortcuts</span> */}
          &nbsp; Pitch and Deal
        </a>
        <a
          href="#"
          className={activeLink === 'Team' ? 'active' : ''}
          onClick={() => handleLinkClick('Team')}
        >
          <FaStream />
          {/* <span className='Stitle'>Overview</span> */}
          &nbsp; Team
        </a>
        <a
          href="#"
          className={activeLink === 'images' ? 'active' : ''}
          onClick={() => handleLinkClick('images')}
        >
          <FaCalendar />
          {/* <span className='Stitle'>Events</span> */}
          &nbsp; Images and Videos
        </a>
        <a
          href="#"
          className={activeLink === 'document' ? 'active' : ''}
          onClick={() => handleLinkClick('document')}
        >
          <FaQuestionCircle />
          {/* <span className='Stitle'>About</span> */}
          &nbsp; Document
        </a>
        
      </div>
      {activeLink === 'Form' && <Form />}
      {activeLink === 'Pitch' && <Pitch />}
      {activeLink === 'Team' && <Team />}
      {activeLink === 'images' && <Picture />}
      {activeLink === 'document' && <Document />}
      
    </>
  );
};

export default Sidebar;