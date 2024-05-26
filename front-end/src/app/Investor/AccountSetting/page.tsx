"use client"
import Nav from "../../nav/page"
import "./style1.css"
import { useState } from 'react';
import Contactinfo from "./ContactInfo/page"
import InvestmentCriteria from "./InvestmentCriteria/page"
import ProfileInfo from "./Profileinfo/page"
import Changepassword from "./password/page"
function AccountSettings() {
  const [activeTab, setActiveTab] = useState("contact-info");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <>
    <Nav/>
    <div className="container" style={{width:"100%"}}>
      <h1 style={{backgroundColor:"#f7f7f799", width:"100%", height:"80px", top:"0", marginTop:"-67px",padding:"53px",textAlign:"center", }}>Account settings</h1>
      <nav className="nav" style={{borderColor:"white"}}>
        <div className="nav-item">
          <button onClick={() => handleTabClick('contact-info')} style={{border:"1px solid #ffffff" , padding:'13px', borderRadius: "20px",marginLeft:"-30px",fontSize:"17px",backgroundColor:"#f1f0f0"}}>Contact Info</button>
        </div>
        <div className="nav-item">
          <button onClick={() => handleTabClick('investment-criteria')} style={{border:"1px solid #ffffff" , padding:'13px', borderRadius: "20px",marginLeft:"-30px",fontSize:"17px",backgroundColor:"#f1f0f0"}}>Investment Criteria</button>
        </div>
        <div className="nav-item">
          <button onClick={() => handleTabClick('profile-info')} style={{border:"1px solid #ffffff" , padding:'13px', borderRadius: "20px",marginLeft:"-30px",fontSize:"17px",backgroundColor:"#f1f0f0"}}>Profile Info</button>
        </div>
        <div className="nav-item">
          <button onClick={() => handleTabClick('password')} style={{border:"1px solid #ffffff" , padding:'13px', borderRadius: "20px",marginLeft:"-30px",fontSize:"17px",backgroundColor:"#f1f0f0"}}>Password</button>
        </div>
        <div className="nav-item">
          <button onClick={() => handleTabClick('delete-account')} style={{border:"1px solid #ffffff" , padding:'13px', borderRadius: "20px",marginLeft:"-30px",fontSize:"17px",backgroundColor:"#f1f0f0"}}>Delete Account</button>
        </div>
      </nav>
      {activeTab === 'contact-info' && (
        <div className="tab-content">
          <Contactinfo/>
        </div>
      )}
      {activeTab === 'investment-criteria' && (
        <div className="tab-content">
          <InvestmentCriteria/>
        </div>
      )}
      {activeTab === 'profile-info' && (
        <div className="tab-content">
          <ProfileInfo/>
        </div>
      )}
      {activeTab === 'password' && (
        <div className="tab-content">
          <Changepassword/>
        </div>
      )}
      {activeTab === 'delete-account' && (
        <div className="tab-content">
          <h3 style={{width:"680px"}}>Delete Account</h3>
          <button type="submit" style={{backgroundColor:"#f9ac54"}}>Unsubscribe</button>
        </div>
      )}
    </div>
    </>
  )
}

export default AccountSettings