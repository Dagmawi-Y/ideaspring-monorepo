import './style.css'
import {FaStar} from "react-icons/fa";

export default function Home() {
    const profileData = {
        minimumInvestment: '£0',
        maximumInvestment: '£90,000',
        investorType: 'Angel Investor',
        registrationDate: '7 May 2024',
        network: 'United Kingdom',
      };
      const Criteria = {
        InvestmentRange: '£30,000 to £60,000',
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
          <h1 className="name">Deepam A.</h1>
          <p className="location">Edmonton, Canada</p>
          <span className="rating"><FaStar/></span>
        </div>
      </header>
      <main className="main">
        <div className="sections">
          <div className="section">Background</div>
          <div className="section">Expertise</div>
          <div className="section">Criteria</div>
          <div className="section">My Companies</div>
        </div>
        <button className="button">Nudge</button>
      </main>
    </div>
    <div className='col'>
    <div className="user-profile">
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
      <div className='left'>
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
      <h1 className="profile-heading">My Profile</h1>
      <div className="profile-details">
        {Object.entries(profileData).map(([key, value]) => (
          <div className="detail-row" key={key}>
            <span className="detail-label">{key}</span>
            <span className="detail-value">{value}</span>
          </div>
        ))}
      </div>
      <h1 className="profile-heading"style={{marginTop: "40px",}}>KeyWords</h1>
      <input type="text" placeholder='No keyword entered yet ' style={{borderColor:"gainsboro",fontSize: '17px' , height:"60px"}}/>
    </div>
    </div>
    </>
  )
}
