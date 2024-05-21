'use client';
import React, { useEffect, useState } from 'react';
import './styl.css';
import {
  FaBars,
  FaTimes,
  FaQrcode,
  FaLink,
  FaStream,
  FaCalendar,
  FaQuestionCircle,
  FaSlidersH,
  FaEnvelope,
} from 'react-icons/fa';
import Form from './Form/page';
import Pitch from './CompanyInfo/page';
import NavBar from '../NavBar/page';
import Team from './Team/page';
import Picture from './image/page';
import Document from './document/page';
import { useRouter } from 'next/navigation';
import cookie from 'js-cookie';

export const setActiveLink = (link) => {
  setActiveLink(link);
};
const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('Form');
  const router = useRouter();

  useEffect(() => {
    const token = cookie.get('token');
    if (!token) {
      window.location.href = '/';
    }
  }, []);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <NavBar />
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
      {activeLink === 'Form' && <Form setActiveLink={setActiveLink} />}
      {activeLink === 'Pitch' && <Pitch setActiveLink={setActiveLink} />}
      {activeLink === 'Team' && <Team setActiveLink={setActiveLink} />}
      {activeLink === 'images' && <Picture setActiveLink={setActiveLink} />}
      {activeLink === 'document' && <Document setActiveLink={setActiveLink} />}
    </>
  );
};

export default Sidebar;
