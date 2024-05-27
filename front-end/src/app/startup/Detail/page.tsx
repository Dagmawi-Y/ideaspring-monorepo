import './style.css'
import {FaStar} from "react-icons/fa";

export default function Home() {
    const profileData = {
        minimumInvestment: '0 Birr',
        maximumInvestment: '90,000 Birr',
        investorType: 'Angel Investor',
        registrationDate: '7 May 2024',
        network: 'Ethiopia',
      };
      const Criteria = {
        InvestmentRange: '30,000 Birr to 60,000 Birr',
        Stages: 'Pre-Startup/R&D, MVP/Finished Product, Achieving Sales, Breaking Even, Profitable, Other',
        Industries: 'Transportation, Business Services, Finance, Energy & Natural Resources, Property, Entertainment & Leisure',
        Location: 'Alberta, British Columbia, Manitoba, New Brunswick, Newfoundland, Northwest Territories, Nova Scotia, Nunavut, Ontario, Outside Canada, Prince Edward, Quebec, Saskatchewan, Yukon',
        Countries: 'Ethiopia',
      };
  return (
    <>
    <div className="container">
      <header className="header">
        <img src="/member.jpg" alt="Profile Picture" className="image" />
        <div className="profile">
          <h1 className="name">Abebe</h1>
          <p className="location">Ethiopia, Addis Ababa</p>
          <span className="rating"><FaStar/></span>
        </div>
      </header>
      <main className="main">
        <div className="sections">
          <div className="section"><a href="#About">Background</a></div>
          <div className="section" ><a href='#Expertise'>Expertise</a></div>
          <div className="section"><a href="#Profile">Criteria</a></div>
          <div className="section"><a href='#comp'>My Companies</a></div>
        </div>
        <button className="button">Nudge</button>
      </main>
    </div>
    <div className='col'>
    <div className="user-profile" id='About'>
      <h1 className="user-title">About Me</h1>
      <div className="about-section">
        <p>
          6 years in the Royal Navy as an aircraft engineering supervisor.
        </p>
      </div>
      <h2 className="expertise-title">My Areas of Expertise</h2>
      <div className="expertise-list">
        <p>Aeronautics Aerospace Engineering. Avionics</p>
      </div>
      <div className='left' id='Expertise'>
      <h2 className="investment-criteria-title">Criteria</h2>
      <div className="criteria-table-container">
      <div className="profile-detailss">
        {Object.entries(Criteria).map(([key, value]) => (
          <div className="detail-rows" key={key}>
            <span className="detail-labels">{key}</span>
            <span className="detail-values">{value}</span>
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
    <div className="profile-container">
      <h1 className="profile-heading" id='Profile'>My Profile</h1>
      <div className="profile-details">
        {Object.entries(profileData).map(([key, value]) => (
          <div className="detail-row" key={key}>
            <span className="detail-label">{key}</span>
            <span className="detail-value">{value}</span>
          </div>
        ))}
      </div>
      <h1 className="profile-heading"style={{marginTop: "40px",}} id='comp'>KeyWords</h1>
      <input type="text" placeholder='No keyword entered yet ' style={{borderColor:"gainsboro",fontSize: '17px' , height:"60px"}}/>
    </div>
    </div>
    </>
  )
}
