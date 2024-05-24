"use client"
import React, { useState, useRef } from 'react';
import './style.css';
import "../../../startup/t/style.css"
const initialState = {
    name: '',
    linkedin: '',
    position: '',
    bio: '',
    photo: null, 
  };
function AccountSettings() {
   
  const [memberData, setMemberData] = useState(initialState);
  const [savedMembers, setSavedMembers] = useState([]); // Stores saved members
  const fileInputRef = useRef(null); // Reference to the file input element

  const handleInputChange = (event) => {
    setMemberData({
      ...memberData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddMember = () => {
    // Update saved members
    setSavedMembers([...savedMembers, memberData]);
    setMemberData(initialState); // Clear form after saving
  };

  const handleAddAnotherMember = () => {
    setMemberData(initialState); // Clear form without saving
  };

  const handlePhotoUpload = () => {
    const file = fileInputRef.current.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMemberData({
          ...memberData,
          photo: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [bannerColor, setBannerColor] = useState('#fbc289'); // Initial banner color

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const handleColorChange = (event) => {
    setBannerColor(event.target.value);
  };
  return (
    <div className="containerf">
      <div className="content">
      <div>
        <h2>Contact Information</h2>
        </div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" />

          {/* Address Section */}
          <h3>Address</h3>
          <label htmlFor="streetAddress">Street Address</label>
          <input type="text" id="streetAddress" name="streetAddress" />
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" />
          <label htmlFor="state">State/Province</label>
          <input type="text" id="state" name="state" />
          <label htmlFor="postalCode">Postal Code</label>
          <input type="text" id="postalCode" name="postalCode" />
          <label htmlFor="country">Country</label>
          <select style={{height:"60px"}} id="country" name="country">
            <option value="">Select Country</option>
            <option value="US">United States</option>
            {/* ... other countries */}
          </select>
          <div className='team' style={{width:"620px"}}>
        <div className='team2' style={{width:"580px"}}>
        <div className="upload-container">
          <div>
            <div className="circle-image" style={{ backgroundImage: `url(${memberData.photo})` }}></div>
            {/* <p style={{marginTop:"-66px", marginLeft:"10px"}}>Upload Photo</p> */}
          </div>
          <div>
          <button type="button" className="upload-button" onClick={() => fileInputRef.current.click()}>
            Choose Photo
          </button>
          <input
            type="file"
            id="upload-photo"
            accept="image/*"
            ref={fileInputRef}
            onChange={handlePhotoUpload}
            style={{ display: 'none' }}
          />
          </div>
        </div>
        <hr style={{color:'#fafafd'}}/>
        <div className="upload-banner">
        <div className="banner-content">
            <p className="banner-text">Banner Image</p>
            <div className='section'>
            <div className="upload-sections">
            <input type="file" onChange={handleImageChange} accept="image/*" />
            <p>
                {selectedImage ? (
                <span>Selected: {selectedImage.name}</span>
                ) : (
                <span>Upload your banner image</span>
                )}
            </p>
            </div>
            <p>OR</p>
            <div className="color-picker">
            <p htmlFor="bannerColor">Choose Banner Color</p>
            <input
                type="color"
                id="bannerColor"
                value={bannerColor}
                onChange={handleColorChange}
            />
            </div>
        </div>
        </div>
      </div>
      </div>
      </div>
        </form>
        <button type="submit" style={{width:"100%", backgroundColor:"#f9ac54"}}>Update Profile</button>

      </div>
    </div>
  );
}

export default AccountSettings;