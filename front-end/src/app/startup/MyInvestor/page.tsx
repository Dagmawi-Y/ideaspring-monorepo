"use client"
import React, { useState } from "react";
import "./style.css";
import NavBar from "../NavBar/page";
import Add from "../chat/add/page";
import InterestedComponent from "../Interested/page";
import ShortlistComponent from "../ShortList/page.tsx";
// import NudgedComponent from "../../chat/add/page";

const MyInvestor = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const renderComponent = () => {
    switch (activeItem) {
      case 0:
        return <InterestedComponent/>;
      case 1:
        return <ShortlistComponent/>;
      case 2:
        return(
        < div  style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img style={{height:"200px"}} src="https://media1.tenor.com/m/tTaCJqHvuLwAAAAC/pleading-puppy-eyes.gif"/>
        <p style={{fontSize:"25px", color:"red"}}>Sorry this service is not avaliable for now!</p>
        </div> 
        )
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container1">
        <div
          className={`item ${activeItem === 0 ? "active" : ""}`}
          onClick={() => handleClick(0)}
          style={{borderRadius: "20px 0 0 20px ",}}
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
          style={{borderRadius: "0 20px 20px 0",}}
        >
          Nudged
        </div>
      </div>
      <div className="warnning">
        <p className="b" style={{fontSize:"15px"}}>
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
};

export default MyInvestor;