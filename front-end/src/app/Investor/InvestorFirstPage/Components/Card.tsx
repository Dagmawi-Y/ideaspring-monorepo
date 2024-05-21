import { BsFillBagFill } from "react-icons/bs";
import React from 'react';
import Image from 'next/image';
import { FaTrashAlt,FaStar, FaMapMarkerAlt } from 'react-icons/fa'; // Import the required icons
import '../products/style2.css';
const Card = ({ img, title, MinperInvestor, location, TotalRequired, description, h1, h2 , h3 }) => {
  return (
    <div className="profile-containerss">
      <div >
        <div className="profile-img" style={{width:"370px"}}>
          <img
            src={img}  
            alt="Profile picture of Deepam A."
            width={320}
            height={130}
            style={{
            width: "100%",
            display: "block",
            marginLeft: "-19px",
            marginTop: "-30px",
            borderRadius: "20px 20px 0 0",
            position: "relative",
            marginBottom: "-8px",
            objectFit:"fill"
            }
          }
          />
          <hr style={{height:"7px",
            background:"#d2d1d1",
            marginLeft: "-19px",
            width:"370px",
            color:"#e6e5e5"
          }}/>
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
          <p>{description}</p>
        </div>
        <div className="expertise">
          <div>
          <h4>{TotalRequired}</h4>
          <p>Total Required</p>
          </div>
          <div className="leftM">
          <h4>{MinperInvestor}</h4>
          <p>Min per Investor</p>
          </div>
        </div>
        <div className="higlight" style={{fontWeight:"bold"}}>
        <p>&bull; {h1}</p>
  <p>&bull; {h2}</p>
  <p>&bull; {h3}</p>
        </div>
        <div className="profile-buttons">
          <button style={{height:"35px"}}>
             find out more
          </button>
          <button style={{height:"35px",background:"white", marginLeft:"10px"}}><FaStar style={{color:"#f9ac54", justifyContent:"center", alignItems:"center"}}/></button>
          <button style={{height:"35px", background:"white", marginLeft:"10px"}}><FaTrashAlt style={{color:"#f9ac54", justifyContent:"center", alignItems:"center"}}/></button>
        </div>
      </div>
    </div>
  );
};

export default Card;