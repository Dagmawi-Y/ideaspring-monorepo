import React from 'react';
import Image from 'next/image';
import { FaBookmark, FaMapMarkerAlt } from 'react-icons/fa'; // Import the required icons

const Profile = () => {
  return (
    <div className="profile-containerss">
      <FaBookmark/>
      <div className="profile-header">
        <div className="profile-img">
          <Image
            src="/member.jpg" // Replace with the path to your profile picture
            alt="Profile picture of Deepam A."
            width={80}
            height={80}
            style={{borderRadius: "50%",}}
          />
        </div>
        <div className="profile-info">
          <h2>DA Deepam A.</h2>
          <p>
            <span className="location-icon">
              <FaMapMarkerAlt />
            </span>
            Edmonton, Canada
          </p>
        </div>
      </div>
      <div className="profile-content">
        <div className="investment-range">
          <h3>Investment Range</h3>
          <p>£30,000 - £60,000</p>
        </div>
        <div className="expertise">
          <h3>Areas of Expertise</h3>
          <p>Sales, Branding, Marketing, Marketing Research, Competitive Analysis, Business Strategy</p>
        </div>
        <div className="profile-buttons">
          <button>
             Nudge
          </button>
          <button>More details</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;