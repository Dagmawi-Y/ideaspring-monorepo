"use client"
import React, { useState, useRef } from 'react';
import './style.css';

const initialState = {
  name: '',
  linkedin: '',
  position: '',
  bio: '',
  photo: null, 
};

function MemberAdd() {
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
    <div className="containerf">
      <label>Team Members</label>
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
          <label htmlFor="name">Name</label>
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
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={memberData.linkedin}
            onChange={handleInputChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={memberData.position}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="bio">Bio</label>
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
          Add Member
        </button>
        {/* <button
          type="button"
          className="button"
          onClick={handleAddAnotherMember}
        >
          Add Another Member
        </button> */}
      </div>
      </div>

      {savedMembers.length > 0 && ( // Only display if there are saved members
        <div className="saved-members">
          <label>Saved Members</label>
          {savedMembers.map((member, index) => (
            <div key={index} className="member-profile">
              <div>
              {member.photo && (
                <div
                  className="circle-image"
                  style={{ backgroundImage: `url(${member.photo})` }}
                ></div>
              )}
              </div>
              <div style={{marginLeft:"10px"}}>
              <p> {member.name}</p>
              <p>{member.position}</p>
              {member.linkedin && <p>{member.linkedin}</p>}
              <p>{member.bio}</p>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MemberAdd;