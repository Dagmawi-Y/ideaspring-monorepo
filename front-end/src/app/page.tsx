'use client';
import { useState } from 'react';
import './style.css';
import {
  FaArrowLeft,
  FaExchangeAlt,
  FaArrowRight,
  FaUsers,
  FaBullhorn,
  FaHandshake,
  FaShoppingBasket,
  FaStar,
  FaVideo,
  FaBuilding,
  FaCheckCircle,
  FaQuoteRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { RiStarFill, RiUserStarFill, RiMessage2Line } from 'react-icons/ri';
import {
  RiStarHalfFill,
  RiBuildingLine,
  RiCheckboxCircleLine,
  RiArrowLeftLine,
  RiArrowRightLine,
} from 'react-icons/ri';
export default function Home() {
  const [showDropdownButtons, setShowDropdownButtons] = useState(false);

  const handleGetStartedClick = () => {
    setShowDropdownButtons(!showDropdownButtons);
  };
  return (
    <body>
      <nav>
        <div className="nav__logo">
          <a href="/">
            <img src="/flogo.png" alt="logo" />
          </a>
        </div>
        <ul className="nav__links">
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">Program</a>
          </li>
          <li className="link">
            <a href="#">Service</a>
          </li>
          <li className="link">
            <a href="#">About</a>
          </li>
          <li className="link">
            <a href="#">Community</a>
          </li>
        </ul>
        <button className="btn">Join Now</button>
      </nav>

    <header className="section__container header__container">
      <div className="header__content">
        <span className="bg__blur"></span>
        <span className="bg__blur header__blur"></span>
        <h4> Join the free community of Entrepreneurs and Angel Investors</h4>
        <h1><span>Where</span> Ideas Find Wings</h1>
        <p>
        <strong>CoGrow</strong> is Entrepreneurs and Angel Investors Networking Platform that seamlessly connects Entrepreneurs with angel investors,
        and innovative financing service through motivated team and the art of technology.

        </p>
        <div>
      <button className="btn" onClick={handleGetStartedClick}>
        Get Started
      </button>
      {showDropdownButtons && (
        <div className="dropdown-container">
          <a href="/startup/Registration" className="dropdown-button">
            As Entrepreneur
          </a>
          <a href="/Investor/Registration" className="dropdown-button">
            As Investor
          </a>
          <a href="/Registration?role=engager" className="dropdown-button">
            As Engager
          </a>
        </div>
      )}
    </div>
      </div>
      <div className="header__image">
        <img src="/head.png" alt="header" />
      </div>
    </header>

      <section className="section__container explore__container">
        <div className="explore__header">
          <h2 className="section__header">OUR SERVICES</h2>
          <div className="explore__nav">
            <span>
              <FaArrowLeft />
            </span>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div className="explore__grid">
          <div className="explore__card">
            <span>
              <FaExchangeAlt />
            </span>
            <h4>Entrepreneurs and Investor Matching</h4>
            <p>
              Utilizes a sophisticated matching algorithm that analyzes the
              profiles of startups and angel investors to identify compatible
              matches.
            </p>
            <a href="/startup/Registration">
              Join Now <FaArrowRight />
            </a>
          </div>
          <div className="explore__card">
            <span>
              <FaBullhorn />
            </span>
            <h4>Entrepreneurs Showcase</h4>
            <p>
              Offers a dedicated section or feature on the website to showcase
              selected Entrepreneurs to a broader audience, including potential
              investors, industry experts, and the Entrepreneurs community at
              large.
            </p>
            <a href="#">
              Join Now <FaArrowRight />
            </a>
          </div>
          <div className="explore__card">
            <span>
              <FaHandshake />
            </span>
            <h4>Networking Opportunities</h4>
            <p>
              Curates and promotes events and networking opportunities
              specifically tailored for Entrepreneurs and angel investors.
            </p>
            <a href="#">
              Join Now <FaArrowRight />
            </a>
          </div>
          <div className="explore__card">
            <span>
              <FaUsers />
            </span>
            <h4>Community Engagment</h4>
            <p>
              Provides a dedicated online community forum or discussion platform
              where Entrepreneurs, angel investors, and industry professionals
              can engage in discussions, seek advice, and share insights
            </p>
            <a href="#">
              Join Now <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      <section className="section__container class__container">
        <div className="class__image">
          <span className="bg__blur"></span>
          <img src="/office.jpeg" alt="class" className="class__img-1" />
          <img src="/office2.jpg" alt="class" className="class__img-2" />
        </div>
        <div className="class__content">
          <h2 className="section__header">THE SERVICE YOU WILL GET HERE</h2>
          <p>
            The premier destination for startups and investors to connect,
            collaborate, and drive innovation. Our platform offers a unique
            opportunity to bridge the gap between visionary entrepreneurs and
            forward-thinking investors. Our rigorous screening process ensures
            that only the most innovative and high-potential ventures make it to
            our platform.
          </p>
          <button className="btn">JOIN NOW</button>
        </div>
      </section>

      <section className="section__container join__container">
        <h2 className="section__header"> ABOUT THE COMPANY </h2>
        <p className="section__subheader">
          Our diverse membership base creates a friendly and supportive
          atmosphere, where you can make friends and stay motivated.
        </p>
        <div className="join__image">
          <img src="/office4.avif" alt="Join" />
          <div className="join__grid">
            <div className="join__card">
              <span>
                <RiStarFill />
              </span>
              <div className="join__card__content">
                <h4>Profile Management</h4>
                <p>
                  comprehensive profile management services for entrepreneur and
                  investors
                </p>
              </div>
            </div>
            <div className="join__card">
              <span>
                <RiUserStarFill />
              </span>
              <div className="join__card__content">
                <h4>Rating and Review</h4>
                <p>
                  Allows engagers to provide feedback and ratings based on their
                  experiences.{' '}
                </p>
              </div>
            </div>
            <div className="join__card">
              <span>
                <RiMessage2Line />
              </span>
              <div className="join__card__content">
                <h4>Direct Messaging</h4>
                <p>
                  Facilitates seamless communication between entrepreneur and
                  investors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container price__container">
        <h2 className="section__header">OUR ACTIVE PARTICIPANTS</h2>
        <p className="section__subheader">
          Entrepreneurs from diverse industries and growth stages make up our
          dynamic startup community. Angle invesrtors and Engagers.
        </p>
        <div className="price__grid">
          <div className="price__card">
            <div className="price__card__content">
              <h4>Entrepreneurs</h4>
              <h3>More than 2000</h3>
              <p>
                <RiCheckboxCircleLine />
                Startups
              </p>
              <p>
                <RiCheckboxCircleLine />
                Minimum valuable product (MVP)
              </p>
              <p>
                <RiCheckboxCircleLine />
                Pre-Startup
              </p>
              <p>
                <RiCheckboxCircleLine />
                Pre-Startup
              </p>
            </div>
            <button className="btn price__btn">Join Now</button>
          </div>
          <div className="price__card">
            <div className="price__card__content">
              <h4>Investors</h4>
              <h3>More than 500</h3>
              <p>
                <RiCheckboxCircleLine />
                Angle Investors
              </p>
              <p>
                <RiCheckboxCircleLine />
                Big investment
              </p>
              {/* <p>
              <i className="ri-checkbox-circle-line"></i>
              
            </p> */}
            </div>
            <button className="btn price__btn">Join Now</button>
          </div>
          <div className="price__card">
            <div className="price__card__content">
              <h4>Engagers</h4>
              <h3>More than 1000</h3>
              <p>
                <RiCheckboxCircleLine />
                Comment on ideas
              </p>
              <p>
                <RiCheckboxCircleLine />
                Ratings
              </p>
              {/* <p>
              <i className="ri-checkbox-circle-line"></i>
              Smart workout plan
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              At home workouts
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              Personal Training
            </p> */}
            </div>
            <button className="btn price__btn">Join Now</button>
          </div>
        </div>
      </section>

      <section className="review">
        <div className="section__container review__container">
          <span>
            <i className="ri-double-quotes-r"></i>
          </span>
          <div className="review__content">
            <h4>MEMBER REVIEW</h4>
            <p>
              What truly sets LinkUp Connect apart is our exceptional team of
              expert advisors. Our advisors are seasoned professionals with
              extensive experience in the startup and investment landscape. They
              are knowledgeable, approachable, and genuinely invested in helping
              entrepreneurs and investors achieve their goals.
            </p>
            <div className="review__rating">
              <span>
                <RiStarFill />
              </span>
              <span>
                <RiStarFill />
              </span>
              <span>
                <RiStarFill />
              </span>
              <span>
                <RiStarFill />
              </span>
              <span>
                <RiStarHalfFill />
              </span>
            </div>
            <div className="review__footer">
              <div className="review__member">
                <img src="/member.jpg" alt="member" />
                <div className="review__member__details">
                  <h4>Jane Cooper</h4>
                  <p>Software Developer</p>
                </div>
              </div>
              <div className="review__nav">
                <span>
                  <RiArrowLeftLine />
                </span>
                <span>
                  <RiArrowRightLine />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="section__container footer__container">
        <span className="bg__blur"></span>
        <span className="bg__blur footer__blur"></span>
        <div className="footer__col">
          <div className="footer__logo">
            <img src="/cogrow.png" alt="logo" />
          </div>
          <p>
            Take the first step towards an exciting journey of entrepreneurial
            success with our unbeatable partnership plans. Let's collaborate,
            innovate, and conquer the business world together!
          </p>
          <div className="footer__socials">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <a href="#">Business</a>
          <a href="#">Franchise</a>
          <a href="#">Partnership</a>
          <a href="#">Network</a>
        </div>
        <div className="footer__col">
          <h4>About Us</h4>
          <a href="#">Blogs</a>
          <a href="#">Security</a>
          <a href="#">Careers</a>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">BMI Calculator</a>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
    </body>
  );
}
