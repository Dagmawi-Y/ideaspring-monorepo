'use client'
import {useState} from 'react';
import "./style.css"
import Navbar from "../nav/page"
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';


const Login = () => {
  const login = () => {
    const x = document.getElementById('login');
    const y = document.getElementById('register');
    const z = document.getElementById('btn');

    x.style.left = '47px';
    y.style.right = '-550px';
    z.style.left = '0px';
  };

  const register = () => {
    const x = document.getElementById('login');
    const y = document.getElementById('register');
    const z = document.getElementById('btn');

    x.style.left = '-550px';
    y.style.right = '45px';
    z.style.left = '270px';
  };

  const myLogPassword = () => {
    const a = document.getElementById('logPassword');
    const b = document.getElementById('eye');
    const c = document.getElementById('eye-slash');

    if (a.type === 'password') {
      a.type = 'text';
      b.style.opacity = '0';
      c.style.opacity = '1';
    } else {
      a.type = 'password';
      b.style.opacity = '1';
      c.style.opacity = '0';
    }
  };
  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [displayValidation, setDisplayValidation] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (logEmail === '' || logPassword === '') {
      setDisplayValidation(true);
    } else {
      // Perform login action
      setDisplayValidation(false);
      window.location.href = '/startup/pitch';

    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (regUsername === '' || regEmail === '' || regPassword === '' || !acceptTerms) {
      setDisplayValidation(true);
    } else {
      // Perform registration action
      setDisplayValidation(false);
      window.location.href = '/startup/pitch';
    }
    
  };

  const toggleLogPasswordVisibility = () => {
    const logPasswordField = document.getElementById('logPassword');
    logPasswordField.type = logPasswordField.type === 'password' ? 'text' : 'password';
  };

  const toggleRegPasswordVisibility = () => {
    const regPasswordField = document.getElementById('regPassword');
    regPasswordField.type = regPasswordField.type === 'password' ? 'text' : 'password';
  };

  const myRegPassword = () => {
    const d = document.getElementById('regPassword');
    const b = document.getElementById('eye-2');
    const c = document.getElementById('eye-slash-2');

    if (d.type === 'password') {
      d.type = 'text';
      b.style.opacity = '0';
      c.style.opacity = '1';
    } else {
      d.type = 'password';
      b.style.opacity = '1';
      c.style.opacity = '0';
    }
  };

  return (
    <>
      {/* <div className="Navbar"><Navbar/></div> */}
      <div className="container">
        <div className="box">
          <div className="box-login" id="login">
            <div className="top-header">
              <h3>Hello, Again!</h3>
              <small>We are happy to have you back.</small>
            </div>
            <div className="input-group">
              <div className="input-field">
                <input
                  type="text"
                  className="input-box"
                  id="logEmail"
                  value={logEmail}
                  onChange={(e) => setLogEmail(e.target.value)}
                  required
                />
                <label htmlFor="logEmail">Email address</label>
                {displayValidation && logEmail === '' && (
                  <span className="validation-message">Please fill in the email field.</span>
                )}
              </div>
              <div className="input-field">
                <input
                  type="password"
                  className="input-box"
                  id="logPassword"
                  value={logPassword}
                  onChange={(e) => setLogPassword(e.target.value)}
                  required
                />
                <label htmlFor="logPassword">Password</label>
                <div className="eye-area">
                  <div className="eye-box" onClick={toggleLogPasswordVisibility}>
                  <FaEye className="icon" id="eye" style={{color:"#fea808", marginTop: "-20px",}}/>
                  <FaEyeSlash className="icon" id="eye-slash" style={{color:"#fea808"}}/>
                  </div>
                </div>
                {displayValidation && logPassword === '' && (
                  <span className="validation-message">Please fill in the password field.</span>
                )}
              </div>
              <div className="remember">
                <input
                  type="checkbox"
                  id="formCheck"
                  className="check"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="formCheck">Remember Me</label>
              </div>
              <div className="input-field">
              <Link href='/pitch'>
                <input
                  type="submit"
                  className="input-submit"
                  value="Sign In"
                  onClick={handleLogin}
                  required
                />
                </Link>
              </div>
              <div className="forgot">
                <a href="#">Forgot password?</a>
              </div>
            </div>
          </div>

          <div className="box-register" id="register">
            <div className="top-header">
              <h3>Get Started Now</h3>
              <small>
                It's easy to create a pitch using our online form. Your pitch can be in front of our investors before you know it.
              </small>
            </div>
            <div className="input-group">
              <div className="input-field">
                <input
                  type="text"
                  className="input-box"
                  id="regUsername"
                  value={regUsername}
                  onChange={(e) => setRegUsername(e.target.value)}
                  required
                />
                <label htmlFor="regUsername">Username</label>
                {displayValidation && regUsername === '' && (
<span className="validation-message">Please fill in the username field.</span>
                )}
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="input-box"
                  id="regEmail"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  required
                />
                <label htmlFor="regEmail">Email address</label>
                {displayValidation && regEmail === '' && (
                  <span className="validation-message">Please fill in the email field.</span>
                )}
              </div>
              <div className="input-field">
                <input
                  type="password"
                  className="input-box"
                  id="regPassword"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  required
                />
                <label htmlFor="regPassword">Password</label>
                <div className="eye-area">
                  <div className="eye-box" onClick={toggleRegPasswordVisibility}>
                  <FaEye className="icon" id="eye" style={{color:"#fea808", marginTop: "-20px"}}/>
                  <FaEyeSlash className="icon" id="eye-slash" style={{color:"#f9d48e"}} />
                  </div>
                </div>
                {displayValidation && regPassword === '' && (
                  <span className="validation-message">Please fill in the password field.</span>
                )}
              </div>

              <div className="remember">
                <input
                  type="checkbox"
                  id="formCheck2"
                  className="check"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  style={{marginTop:"-55px"}}
                />

                <label htmlFor="formCheck2" style={{justifyContent:"flex-start"}}>
                  I certify that I agree to the website's Privacy Policy, Terms and Conditions, and Refund Policy; and I understand it is my responsibility to do due diligence on any investor I meet via this platform.
                </label>

              </div>
              {displayValidation && !acceptTerms && (
                  <span className="validation-message" > Please accept the terms and conditions.</span>
                )}
              <div className="input-field">
                <a href='/pitch'>
                <input
                  type="submit"
                  className="input-submit"
                  value="Sign Up"
                  onClick={handleRegister}
                  required
                />
                </a>
              </div>
            </div>
          </div>

          <div className="switch">
            <a href="#" className="login active" onClick={login}>
              Login
            </a>
            <a href="#" className="register" onClick={register}>
              Register
            </a>
            <div className="btn-active" id="btn"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;