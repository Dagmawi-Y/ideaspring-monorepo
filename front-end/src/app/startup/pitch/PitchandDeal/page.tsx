"use client"
import React, { useState } from 'react';
import './form.css';
import FormInput from './forms';
import Try from "../../try/page"
import { RiArrowRightLine } from 'react-icons/ri';

const App = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
    location: '',
    industry1: '',
    industry2: '',
    stage: '',
    idealInvestorRole: '',
    previousRaise: '',
    totalRaise: '',
    totalRaiseProgress: '',
    minimumInvestment: '',
  });

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputs = [
    {
      id: 1,
      name: 'Pitch Title',
      type: 'textarea', // Change the type to 'textarea'
      // placeholder: 'Short Summary',
      errorMessage:
        "Pitch Title should be less than 25 characters and shouldn't include any special characters!",
      label: 'Short Summary',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'The Business',
      type: 'textarea', // Change the type to 'textarea'
      // placeholder: 'Website',
      errorMessage: 'It should be a valid website address!',
      label: 'The Business',
      required: true,
    },
    {
      id: 3,
      name: 'The Market',
      type: 'textarea', // Change the type to 'textarea'
      // placeholder: 'Location',
      label: 'The Market',
    },
    {
      id: 4,
      name: 'Progress/Proof',
      type: 'textarea', // Change the type to 'textarea'
      // placeholder: 'Website',
      errorMessage: 'It should be a valid website address!',
      label: 'Progress/Proof',
      required: true,
    },
    {
      id: 5,
      name: 'Objectives/Future',
      type: 'textarea', // Change the type to 'textarea'
      // placeholder: 'Location',
      label: 'Objectives/Future',
    },
    {
      id: 6,
      name: 'Loan',
      type: 'checkbox',
      label: 'Loan',
    },
    {
      id: 7,
      name: 'Equity',
      type: 'checkbox',
      label: 'Equity',
    },
  ];
  const [userInput, setUserInput] = useState('');
  const maxLength = 75;

  const handleChanges = (event) => {
    const value = event.target.value;
    setUserInput(value);
  };

  const charactersRemaining = maxLength - userInput.length;
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Pitch and Deal</h1>
        <h2>a</h2>
        <h3>50% complete</h3>
        <div className="col">
          <div className="formpage">
            {inputs.map((input) => {
              if (input.type === 'checkbox') {
                return (
                  <div className="form-group" key={input.id}>
                    <input
                      type="checkbox"
                      id={input.name}
                      name={input.name}
                      checked={values[input.name]}
                      onChange={(e) => handleChange(input.name, e.target.checked)}
                    />
                    <label htmlFor={input.name}>{input.label}</label>
                  </div>
                );
              } else {
                return (
                  <div className="form-group" key={input.id}>
                    <br />
                    <label htmlFor={input.name}>{input.label}</label>
                    <br />
                    <textarea
                      id={input.name}
                      name={input.name}
                      value={values[input.name]}
                      onChange={(e) => handleChange(input.name, e.target.value)}
                      placeholder={input.placeholder}
                    />
                  </div>
                );
              }
            })}
            <br/>
            <label style={{fontSize:"larger"}}>Highlights</label>
            <br/>
            <br/>
            <div className="containerk">
            <div className="characters-remaining" style={{color:"#898888b8", marginLeft: "350px",fontSize:"13px"}}>{charactersRemaining} characters remaining</div>
              <div style={{display:"flex"}}>
              <p style={{
                border:"1px solid #dddddd",
                padding:"20px",
                height:"5px",
                marginTop: "10px",
                backgroundColor:"#eeeef0",
              }}>1</p>
      <input
        type="text"
        maxLength={maxLength}
        style={{width:"410px"}}
      />
      </div>
      
    </div>
    <div className="containerk">
            <div className="characters-remaining" style={{color:"#898888b8", marginLeft: "350px",fontSize:"13px"}}>{charactersRemaining} characters remaining</div>
              <div style={{display:"flex"}}>
              <p style={{
                border:"1px solid #dddddd",
                padding:"20px",
                height:"5px",
                marginTop: "10px",
                backgroundColor:"#eeeef0",
              }}>2</p>
      <input
        type="text"
        maxLength={maxLength}
        onChange={handleChanges}
        style={{width:"410px"}}
      />
      </div>
      
    </div>
    <div className="containerk">
            <div className="characters-remaining" style={{color:"#898888b8", marginLeft: "350px",fontSize:"13px"}}>{charactersRemaining} characters remaining</div>
              <div style={{display:"flex"}}>
              <p style={{
                border:"1px solid #dddddd",
                padding:"20px",
                height:"5px",
                marginTop: "10px",
                backgroundColor:"#eeeef0",
              }}>3</p>
      <input
        type="text"
        onChange={handleChanges}
        style={{width:"410px"}}
      />
      </div>
      
    </div>
    <div className="containerk">
            <div className="characters-remaining" style={{color:"#898888b8", marginLeft: "350px",fontSize:"13px"}}>{charactersRemaining} characters remaining</div>
              <div style={{display:"flex"}}>
              <p style={{
                border:"1px solid #dddddd",
                padding:"20px",
                height:"5px",
                marginTop: "10px",
                backgroundColor:"#eeeef0",
              }}>4</p>
      <input
        type="text"
        maxLength={maxLength}
        onChange={handleChanges}
        style={{width:"410px"}}
      />
      </div>
      
    </div>
    <div className="containerk">
            <div className="characters-remaining" style={{color:"#898888b8", marginLeft: "350px",fontSize:"13px"}}>{charactersRemaining} characters remaining</div>
              <div style={{display:"flex"}}>
              <p style={{
                border:"1px solid #dddddd",
                padding:"20px",
                height:"5px",
                marginTop: "10px",
                backgroundColor:"#eeeef0",
              }}>5</p>
      <input
        type="text"
        maxLength={maxLength}
        onChange={handleChanges}
        style={{width:"410px"}}
      />
      </div>
      
    </div>
    <div className="containerk">
            <div className="characters-remaining" style={{color:"#898888b8", marginLeft: "350px",fontSize:"13px"}}>{charactersRemaining} characters remaining</div>
              <div style={{display:"flex"}}>
              <p style={{
                border:"1px solid #dddddd",
                padding:"20px",
                height:"5px",
                marginTop: "10px",
                backgroundColor:"#eeeef0",
              }}>6</p>
      <input
        type="text"
        maxLength={maxLength}
        onChange={handleChanges}
        style={{width:"410px"}}
      />
      </div>
      </div>
            <br/>
            <label style={{fontSize:"larger"}}>Tags</label>
            <br/>
            <br/>
            <p className='cap'>Enter 5 to 10 relevant keywords. These are really important to help investors find your pitch in our search engine. We always suggest using short and obvious tags that you think investors would actually search for. - (Press the Return key after each keyword to enter it)</p>
            <br/>
            <br/>
            
            <Try/>
            <button type="submit">Save and Continue</button>
          </div>
          <div className="image">
            <div className="explore__card">
              <span>
                <i className="ri-heart-pulse-fill"></i>
              </span>
              <img src="/office2.jpg" alt="logo" />
              <p>
                Offers a dedicated section or feature on the website to showcase
                selected Entrepreneurs to a broader audience, including potential
                investors, industry experts, and the Entrepreneurs community at large.
              </p>
              <a href="#" style={{color:"#f88630"}}>Join Now <RiArrowRightLine /></a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;