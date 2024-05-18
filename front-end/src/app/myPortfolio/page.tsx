"use client"
import { useState} from 'react';
import Image from 'next/image';
import "./style.css"
import "../MyInvestor/style.css";
import InterestedComponent from "../chat/add/page";
import ShortlistComponent from "../chat/page";
import NudgedComponent from "../chat/add/page";
export default function Home() {
    const [activeItem, setActiveItem] = useState(0);

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const renderComponent = () => {
    switch (activeItem) {
      case 0:
        return <InterestedComponent />;
      case 1:
        return <ShortlistComponent />;
      case 2:
        return <NudgedComponent />;
      default:
        return null;
    }
  };
  return (
    <>
    <div className="container">
      <div className="top-section">
        <div>
        <Image src="/member.jpg" alt="Company Logo" width={100} height={100} style={{borderRadius: "50%", marginRight:"20px"}} />
        </div>
        <div>
        <h2>jon</h2>
        <p style={{width:"300px"}}>Welcome to your investment overview</p>
        </div>
        
      </div>
      <div className="investment-stats">
        <div className='co'>
        <p className="stat-value">0</p>
        <p className="stat-title">Invested</p>
        </div>
        <div className='co'>
        <p className="stat-value">0</p>
        <p className="stat-title">Interested</p>
        </div>
        <div className='co'>
        <p className="stat-value">0</p>
        <p className="stat-title">Shortlisted</p>
        </div>
      </div>
    </div>
    <div className="container1">
        <div
          className={`item ${activeItem === 0 ? "active" : ""}`}
          onClick={() => handleClick(0)}
        >
          Interested
        </div>
        <div
          className={`item ${activeItem === 1 ? "active" : ""}`}
          onClick={() => handleClick(1)}
        >
          Shortlist
        </div>
        <div
          className={`item ${activeItem === 2 ? "active" : ""}`}
          onClick={() => handleClick(2)}
        >
          Nudged
        </div>
      </div>
      <div className="warnning">
        <p className="b">
          Before contacting the investors, make sure you check our tips and
          advice page
        </p>
      </div>
      {renderComponent() || (
        <div className="card-container">
          <div className="card">
            <p className="card-text">You don't have any investors interested yet.</p>
            <p className="card-text">Make sure your pitch is well filled in.</p>
            <p className="card-text">Then search the investors and get nudging!</p>
            <div className="button-container">
              <button className="add-pitch-button">+</button>
              <i className="fas fa-chevron-right arrow"></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
