"use client"
import React, { useState, useRef } from 'react';
import '../ContactInfo/style.css';
import "./style.css"
const initialState = {
    name: '',
    linkedin: '',
    position: '',
    bio: '',
    photo: null, 
  };
function AccountSettings() {
   const [keywords, setKeywords] = useState([]);

   const handleAddKeyword = (newKeyword) => {
     if (newKeyword) {
       setKeywords([...keywords, newKeyword]);
     }
     newKeyword.preventDefault();
   };
 
   const handleRemoveKeyword = (index) => {
     const updatedKeywords = [...keywords];
     updatedKeywords.splice(index, 1);
     setKeywords(updatedKeywords);
   };
  return (
    <div className="containerf">
      <div className="content">
      <div>
        <h2>Profile Info</h2>
        </div>
        <form>
        <label htmlFor="Investor">Investor type</label>
          <select style={{height:"60px"}} id="Investor" name="Investor">
            <option style={{color:"gainsboro"}}value="">Select Investor type</option>
            <option value="">Angle Group</option>
            <option value="">Angle Investor</option>
            <option value="">Advisor/Mentor</option>
            <option value="">Incubator/Accelerator</option>
            <option value="">Other</option>
            <option value="">Service Provider</option>
            <option value="">VC Fund</option>
          </select>
          <label htmlFor="Linkedin">Linkedin</label>
          <input type="text" id="Linkedin" name="Linkedin" />
          <label htmlFor="Twitter">Twitter</label>
          <input type="text" id="Twitter" name="Twitter" />
          <label htmlFor="Facebook">Facebook</label>
          <input type="email" id="Facebook" name="Facebook" />
          <label htmlFor="Website">Website</label>
          <input type="text" id="Website" name="Website" />

          <label htmlFor="Skype">Skype</label>
          <input type="text" id="Skype" name="Skype" />
          <label htmlFor="About">About Me*</label>
          <input type="textarea" id="About" name="About" />
          <label htmlFor="Areas">Areas of expertise*</label>
          <input type="textarea" id="state" name="state" />
          <div className='cont'>
      <div className="keywords">
        {keywords.map((keyword, index) => (
          <div className="keyword" key={index}>
            <input type="text" value={keyword} disabled />
            <button onClick={() => handleRemoveKeyword(index)}>-</button>
          </div>
        ))}
        <div className="keyword">
          <input type="text" name="keyword" placeholder="Add Keyword" />
          <button onClick={() => {
            const newKeyword = document.querySelector('input[name="keyword"]').value.trim();
            handleAddKeyword(newKeyword);
            document.querySelector('input[name="keyword"]').value = '';
          }}>+</button>
        </div>
      </div>
    </div>
    <label htmlFor="Investor">Number of previous investments</label>
          <select style={{height:"60px"}} id="Investor" name="Investor">
            <option value="">Select Number of previous investments</option>
            <option value="">0</option>
            <option value="">1-5</option>
            <option value="">5-10</option>
            <option value="">10+</option>
          </select>
          
        </form>
        <h3>Companies</h3>
        <p>Add any companies you have previously invested in, founded or worked for.</p>
        <button type="submit" style={{backgroundColor:"#f9ac54"}}>Add Company</button>
        <button type="submit"  style={{width:"100%", backgroundColor:"#f9ac54"}} >Update Profile</button>

      </div>
    </div>
  );
}

export default AccountSettings;