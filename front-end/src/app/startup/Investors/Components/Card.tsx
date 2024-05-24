import { BsFillBagFill } from "react-icons/bs";
import React from 'react';
import Image from 'next/image';
import { FaBookmark, FaMapMarkerAlt } from 'react-icons/fa'; // Import the required icons
import '../startups/style2.css';
const Card = ({ img, title, investmentRange, location, AreaOfExperties, description }) => {
  const handleFindOutMore = () => {
    window.location.href = '/Investor/InvestorDetail'; // Replace '/startup-details' with the actual path to the desired page
  };
  return (
    <div className="profile-containerss">
      <FaBookmark style={{justifyContent:"flex-end", alignItems:"end", marginLeft:"300px"}}/>
      <div className="profile-header">
        <div className="profile-img">
          <img
            src={img}  
            alt="Profile picture of Deepam A."
            width={80}
            height={80}
            style={{borderRadius: "50%",}}
          />
        </div>
        <div className="profile-info">
          <h2>{title}</h2>
          <p>
            <span className="location-icon">
              <FaMapMarkerAlt />
            </span>
            {location}
          </p>
        </div>
      </div>
      <div className="profile-content">
        <div className="investment-range">
          <h3>Investment Range</h3>
          <p>{investmentRange}</p>
        </div>
        <p>{description}</p>
        <div className="expertise">
          <h3>Areas of Expertise</h3>
          <p>{AreaOfExperties}</p>
        </div>
        <div className="profile-buttons">
          <button>
             Nudge
          </button>
          <button onClick={handleFindOutMore}>More details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;