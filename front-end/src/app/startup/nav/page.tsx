"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaMoneyBillAlt, FaHandHoldingUsd, FaEnvelope, FaQuestionCircle, FaCaretDown, FaUserCircle } from 'react-icons/fa';
import styles from './style.css'; // Assuming style.css is your CSS file
import { BiLineChart,BiMoney, BiEnvelope, BiCoin, BiChevronDown, BiInfoCircle,BiCoinStack } from 'react-icons/bi';

export default function Home() {
  const [investDropdown, setInvestDropdown] = useState(false);
  const [fundraiseDropdown, setFundraiseDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const toggleInvestDropdown = () => setInvestDropdown(!investDropdown);
  const toggleFundraiseDropdown = () => setFundraiseDropdown(!fundraiseDropdown);
  const toggleProfileDropdown = () => setProfileDropdown(!profileDropdown);

  // Handle click outside the dropdown
  const handleClickOutside = (event) => {
    if (investDropdown || fundraiseDropdown || profileDropdown) {
      // Check if any dropdown is open
      const clickedRef = event.target;
      const investRef = document.querySelector('.invest .dropdown');
      const fundraiseRef = document.querySelector('.fundraise .dropdown');
      const profileRef = document.querySelector('.profile .dropdown');

      // Check if clicked outside any dropdown
      if (
        !clickedRef.classList.contains('dropdown') &&
        !clickedRef.closest('.dropdown') &&
        !clickedRef.isSameNode(investRef) &&
        !clickedRef.isSameNode(fundraiseRef) &&
        !clickedRef.isSameNode(profileRef) &&
        !clickedRef.closest('.invest') &&
        !clickedRef.closest('.fundraise') &&
        !clickedRef.closest('.profile')
      ) {
        setInvestDropdown(false);
        setFundraiseDropdown(false);
        setProfileDropdown(false);
      }
    }
  };

  // Add event listener on component mount, remove on unmount
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [investDropdown, fundraiseDropdown, profileDropdown]); // Recalculate when dropdown states change

  return (
    <div className="containerx">
      <Head>
        <title>Navbar Example</title>
        <meta name="description" content="Navbar Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={`navbars ${styles.sticky}`}> {/* Apply 'sticky' class from styles.css */}
        <div className="logoContainern">
          <img src="/mlogo.png" alt="Logo" style={{borderColor: "white",height:"85px",width:'200px'}}/>
        </div>
        {/* <div className="searchContainer">
          <FaSearch className="searchIcon" />
          <input type="text" placeholder="Search..." className="searchInput" />
        </div> */}
        <div className="navLinks">
          {/* <div className="navItem" onClick={toggleInvestDropdown}>
            <BiCoinStack className='icon'/>Invest <BiChevronDown />
            {investDropdown && (
              <div className="dropdown">
                <a href="/Investor/myPortfolio">My Portfolio</a>
                <a href="#">My Matches</a>
                <a href="#">Explore</a>
                <a href="#">Search</a>
              </div>
            )}
          </div>
          <div className="navItem" onClick={toggleFundraiseDropdown}>
            <BiLineChart className='icon' /> Fundraise <BiChevronDown />
            {fundraiseDropdown && (
              <div className="dropdown">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div> */}
          <div className='navItem'>
          <a href="/startup"><BiCoinStack className='icon'/>Invest</a>
          </div>
          <div className='navItem'>
          <a href="#"><BiLineChart className='icon' /> Analytics</a>
          </div>
          <div className='navItem'>
          <a href="#"><BiEnvelope className='icon'/> Messages</a>
          </div>
          <div className='navItem'> 
          <a href="#"><BiInfoCircle className='icon'/> Help</a>
          </div>
          <div className="navItem profile" onClick={toggleProfileDropdown} style={{paddingRight: "-100px",}}>
            <FaUserCircle className="profileIcon" />
            {profileDropdown && (
              <div className="dropdown profileDropdown"> {/* Differentiate profile dropdown */}
                <a href="/startup/AccountSetting">Account Settings</a>
                <a href="/startup/Profile">Profile</a>
                <a href="#">Logout</a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
