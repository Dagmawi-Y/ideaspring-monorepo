'use client';
import { useEffect, useState } from 'react';
import './style.css';
import Navbar from '../nav/page';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import axios from 'axios';
import apiClient from '@/utils/apiClient';
import cookie from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [displayValidation, setDisplayValidation] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (logEmail === '' || logPassword === '') {
      setDisplayValidation(true);
      setIsLoading(false);
    } else {
      setDisplayValidation(false);
      try {
        const response = await apiClient.post('/auth/login', {
          email: logEmail,
          password: logPassword,
        });

        const token = response.data.access_token;
        cookie.set('token', token, {
          expires: 1 / 24,
          // httpOnly: true,
          // secure: true,
          // sameSite: 'Strict',
        });
        // Redirect to the desired page
        window.location.href = '/startup/pitch';
      } catch (error) {
        console.error('Login failed:', error);
        toast.error('Login failed. Please check your credentials.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false, // Show progress bar
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: 'custom-toast',
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      firstName === '' ||
      lastName === '' ||
      regEmail === '' ||
      regPassword === '' ||
      !acceptTerms
    ) {
      setDisplayValidation(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await apiClient.post('/auth/register', {
        first_name: firstName,
        last_name: lastName,
        email: regEmail,
        password: regPassword,
        role: 'entrepreneur',
      });
      console.log('Registration successful:', response.data);
      setTimeout(() => {
        login();
        // Switch to the login form after a successful registration
      }, 2000);
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please check your details.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleLogPasswordVisibility = () => {
    const logPasswordField = document.getElementById('logPassword');
    logPasswordField.type =
      logPasswordField.type === 'password' ? 'text' : 'password';
  };

  const toggleRegPasswordVisibility = () => {
    const regPasswordField = document.getElementById('regPassword');
    regPasswordField.type =
      regPasswordField.type === 'password' ? 'text' : 'password';
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
                  <span className="validation-message">
                    Please fill in the email field.
                  </span>
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
                  <div
                    className="eye-box"
                    onClick={toggleLogPasswordVisibility}
                  >
                    <FaEye
                      className="icon"
                      id="eye"
                      style={{ color: '#fea808', marginTop: '-20px' }}
                    />
                    <FaEyeSlash
                      className="icon"
                      id="eye-slash"
                      style={{ color: '#fea808' }}
                    />
                  </div>
                </div>
                {displayValidation && logPassword === '' && (
                  <span className="validation-message">
                    Please fill in the password field.
                  </span>
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
                <button
                  type="submit"
                  className="input-submit"
                  onClick={isLoading ? undefined : handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loader-container">
                      {' '}
                      {/* Apply styles here */}
                      <Oval color="#fff" height={20} width={20} />
                    </span>
                  ) : (
                    'Sign In'
                  )}
                </button>
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
                It's easy to create a pitch using our online form. Your pitch
                can be in front of our investors before you know it.
              </small>
            </div>
            <div className="input-group">
              <div className="input-field">
                <input
                  type="text"
                  className="input-box"
                  id="regUsername"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <label htmlFor="regUsername">First Name</label>
                {displayValidation && firstName === '' && (
                  <span className="validation-message">
                    Please fill in the username field.
                  </span>
                )}
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="input-box"
                  id="regUsername"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <label htmlFor="regUsername">Last Name</label>
                {displayValidation && lastName === '' && (
                  <span className="validation-message">
                    Please fill in the username field.
                  </span>
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
                <label htmlFor="regEmail">Email Address</label>
                {displayValidation && regEmail === '' && (
                  <span className="validation-message">
                    Please fill in the email field.
                  </span>
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
                  <div
                    className="eye-box"
                    onClick={toggleRegPasswordVisibility}
                  >
                    <FaEye
                      className="icon"
                      id="eye"
                      style={{ color: '#fea808', marginTop: '-20px' }}
                    />
                    <FaEyeSlash
                      className="icon"
                      id="eye-slash"
                      style={{ color: '#f9d48e' }}
                    />
                  </div>
                </div>
                {displayValidation && regPassword === '' && (
                  <span className="validation-message">
                    Please fill in the password field.
                  </span>
                )}
              </div>

              <div className="remember">
                <input
                  type="checkbox"
                  id="formCheck2"
                  className="check"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  style={{ marginTop: '-55px' }}
                />

                <label
                  htmlFor="formCheck2"
                  style={{ justifyContent: 'flex-start' }}
                >
                  I certify that I agree to the website's Privacy Policy, Terms
                  and Conditions, and Refund Policy; and I understand it is my
                  responsibility to do due diligence on any investor I meet via
                  this platform.
                </label>
              </div>
              {displayValidation && !acceptTerms && (
                <span className="validation-message">
                  {' '}
                  Please accept the terms and conditions.
                </span>
              )}
              <div className="input-field">
                <button
                  type="submit"
                  className="input-submit"
                  onClick={isLoading ? undefined : handleRegister}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loader-container">
                      {' '}
                      {/* Apply styles here */}
                      <Oval color="#fff" height={20} width={20} />
                    </span>
                  ) : (
                    'Sign Up'
                  )}
                </button>
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
      {showSuccessMessage && (
        <div className="success-message">
          You have successfully registered. Please verify your email to
          continue.
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Login;
