"use client"
import React, { useState, useRef } from 'react';
import '../ContactInfo/style.css';

function AccountSettings() {

  return (
    <div className="containerf">
      <div className="content">
      <div>
        <h2>Change password</h2>
        </div>
        <form>
          <label htmlFor="firstName">Current password</label>
          <input type="text" id="firstName" name="firstName" />
          <label htmlFor="lastName">New password</label>
          <input type="text" id="lastName" name="lastName" />
          <label htmlFor="email">Repeat new password</label>
          <input type="email" id="email" name="email" />

        </form>
        <button type="submit" style={{width:"100%", backgroundColor:"#f9ac54"}}>Change Password</button>

      </div>
    </div>
  );
}

export default AccountSettings;