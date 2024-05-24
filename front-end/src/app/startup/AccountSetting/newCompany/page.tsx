"use client"
import React, { useState, useEffect, useRef } from 'react';
import "../../startup/t/style.css"
const initialState = {
  name: '',
  linkedin: '',
  position: '',
  bio: '',
  photo: null, 
};
const PopupPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    // Show the popup when the page is loaded
    setShowPopup(true);

    // Add event listener to close the popup when clicked outside
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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
  return (
    <>
      {showPopup && (
        <div
          className="popup-container"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '999',
          }}
        >
          <div
            ref={popupRef}
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              maxHeight: '90vh',
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: '#fcd77f #f1f1f1',
              scrollbarHeight: '10px',
            }}
          >
            <div className="containerf">
      <h2 style={{textAlign:"center"}}>Add a company</h2>
      <p style={{textAlign:"center"}}>Have you invested in any companies?</p>
      <div className='team'>
        <div className='team2'>
        <div className="upload-container">
          <div>
            <div className="circle-image" style={{ backgroundImage: `url(${memberData.photo})` }}></div>
            <p style={{marginTop:"-66px", marginLeft:"10px"}}>Upload Photo</p>
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
        <div className="formGroup">
          <label htmlFor="name">Company Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={memberData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="linkedin">Position</label>
          <select style={{
            width:"100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box"}} 
    id="Investor" name="Investor">
            <option value="">Angle Group</option>
            <option value="">Angle Investor</option>
            <option value="">Advisor/Mentor</option>
            <option value="">Incubator/Accelerator</option>
            <option value="">Other</option>
            <option value="">Service Provider</option>
            <option value="">VC Fund</option>
          </select>
        </div>
        <div className="formGroup">
          <label htmlFor="position">Website</label>
          <input
            type="url"
            id="position"
            name="position"
            value={memberData.position}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="bio">Description</label>
          <textarea
            id="bio"
            name="bio"
            value={memberData.bio}
            onChange={handleInputChange}
            maxLength={750}
          />
          <span className="charCount">
            {750 - memberData.bio.length} characters remaining
          </span>
        </div>
        <button  style={{width:"400px"}} type="button" className="button" onClick={handleAddMember}>
          Save
        </button>
      </div>
      </div>

      
    </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupPage;