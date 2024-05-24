'use client'
import Navbar from "../../Investor/NavBar/page";
import "./style.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

export default function Contact(){
  return (
    <>
    <Navbar />
    <div className="containerian">
      <span className="big-circle"></span>
      <img src="/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
          We welcome your inquiries, feedback, and suggestions. 
          Please don't hesitate to reach out to us using the contact form below.
          </p>

          <div className="info">
      <div className="information">
        <MdLocationOn className="icon" />
        <p>Addis Ababa, Ethiopia</p>
      </div>
      <div className="information">
        <MdEmail className="icon" />
        <p>cogrow@gmail.com</p>
      </div>
      <div className="information">
        <MdPhone className="icon" />
        <p>+251 987 6543</p>
      </div>
    </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
            <a href="#">
        <FaFacebookF />
      </a>
      <a href="#">
        <FaTwitter />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FaLinkedinIn />
      </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

