import Head from 'next/head';
import Image from 'next/image';
import "./style.css"
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaGlobe } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope, faSolarPanel, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Nav from "../../nav/page"
export default function Profile() {
  return (
    <>
    <Nav/>
    <div className="containerd">
      <Head>
        <title>Profile Page</title>
      </Head>

      <div className="profile">
        <div className="leftColumn">
            <div style={{display:"flex"}}>
          <Image
            src="/member.jpg" // Add the path to your profile picture
            alt="Profile Picture"
            width={100}
            height={100}
            className="profilePic"
          />
          <div style={{marginLeft:"15px"}}>
          <h1 className="name">
            Amela O. <span className="flag">🇬🇧</span>
          </h1>
          <p className="location">
          <FaMapMarkerAlt /> London, United Kingdom
          </p>
          </div>
          </div>
          <div style={{justifyContent:"flex-start"}}>
          <div className="investmentRange">
            <h2>Investment Range</h2>
            <p>£0 - £25,000</p>
          </div>

          <div className="details">
          <p>
              <FaCalendarAlt /> May 2024
            </p>
            <p>
              <FaUser /> Angel Investor
            </p>
            <p>
              <FaGlobe /> United Kingdom
            </p>
          </div>
        </div>
        </div>
        <div className="rightColumn">

          <div className="aboutMe">
            <h2>About Me</h2>
            <p>
              Experienced business development professional and deal negotiator with a strong deal sheet and track record of identifying new business development opportunities worldwide and completing a wide range of partnering transactions in the biopharma industry including in/out-licensing, R&D collaborations, commercial deals and M&A.
            </p>
          </div>

          <div className='expertise'>
            <h2>My Areas of Expertise</h2>
            <p>
              Expertise in Life-Sciences Dealmaking, Strategic Alliances and Partnerings.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='centered'>
    <div className="containers">
    <Head>
      <title>Profile Page</title>
    </Head>

    <div className="section">
      <h2>Companies</h2>
      <div className="box">
        <p>No companies added yet</p>
      </div>
    </div>

    <div className="section">
      <h2>Interests</h2>
      <div className="subSection">
        <h4>Industries</h4>
        <div className="industries">
          <div className="industry">
          <FontAwesomeIcon icon={faMicroscope} style={{width:"50px", height:"50px"}}/>
            <p>Medical & Sciences</p>
          </div>
          <div className="industry">
          <FontAwesomeIcon icon={faSolarPanel} style={{width:"50px", height:"50px"}}/>
            <p>Energy & Natural Resources</p>
          </div>
          <div className="industry">
          <FontAwesomeIcon icon={faMobileAlt} style={{width:"50px", height:"50px"}}/>
            <p>Technology</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div className='centered'>
  <div className="containerr">
      <Head>
        <title>Profile Page</title>
      </Head>

      <div className="sectione">
        <div className="subSectione">
          <h2>Stages</h2>
          <div className="box">
            <p>Pre-Startup/R&D</p>
          </div>
        </div>

        <div className="subSectione">
          <h2>Keywords</h2>
          <div className="box">
            <p>No keywords entered yet</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="subSectione">
          <h2>Location</h2>
          <div className="tags">
            <span className="tags">Addis Ababa</span>
          </div>
        </div>

        <div className="subSection">
          <h2>Countries</h2>
          <div className="tags">
            <span className="tags">Ethiopia</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
  );
}