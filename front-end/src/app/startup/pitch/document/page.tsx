"use client"
import React, { useState } from 'react';
import "../Form/form.css"
import "./style.css"
import { RiArrowRightLine } from 'react-icons/ri';

const App = () => {
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className="app">
      <form >
        <h1>Document</h1>
        <h2 className='h2' style={{width:"710px"}}>a</h2>
        <h3>70% complete</h3>
        <div className="col">
          <div className="formpage">
            <p className='page'>"Do you have any business documents? Don’t worry if not, as we’ll send you advice on how to make them once you’ve submitted your pitch. If you do have some, make sure you upload them as they will make your pitch look super professional."</p>
            <p className='page'><b>Please note: </b>If an investor downloads one of your documents, you will then be able to message them directly. So make sure you upload at least one document!</p>         
        <div className="upload-logo">
            <p className="logo-text">Business Plan</p>
            <div className="upload-section">
            <input type="file" onChange={handleFileChange} placeholder='Upload your logo' />
            <p className='file'>Files: Word, Excel, PowerPoint & PDF. Max file size: 10MB</p>
            </div>
            </div>
            <div className="upload-logo">
            <p className="logo-text">Financials</p>
            <div className="upload-section">
            <input type="file" onChange={handleFileChange} placeholder='Upload your logo' />
            <p className='file'>Files: Word, Excel, PowerPoint & PDF. Max file size: 10MB</p>
            </div>
            </div>
            <div className="upload-logo">
            <p className="logo-text">Pitch Deck</p>
            <div className="upload-section">
            <input type="file" onChange={handleFileChange} placeholder='Upload your logo' />
            <p className='file'>Files: Word, Excel, PowerPoint & PDF. Max file size: 10MB</p>
            </div>
            </div>
            <div className="upload-logo">
            <p className="logo-text">Executive Summary</p>
            <div className="upload-section">
            <input type="file" onChange={handleFileChange} placeholder='Upload your logo' />
            <p className='file'>Files: Word, Excel, PowerPoint & PDF. Max file size: 10MB</p>
            </div>
            </div>
            <div className="upload-logo">
            <p className="logo-text">Additional Documents</p>
            <div className="upload-section">
            <input type="file" onChange={handleFileChange} placeholder='Upload your logo' />
            <p className='file'>Files: Word, Excel, PowerPoint & PDF. Max file size: 10MB</p>
            </div>
            </div>
            
            <button type="submit"><a href='/InvestorFirstPage' style={{color:"white"}}>Submit</a></button>
          </div>
          <div className="image" >
            <div className="explore__card">
              <span>
                <i className="ri-heart-pulse-fill"></i>
              </span>
              <img src="/document.jpg" alt="logo" />
              <p>
          Offers a dedicated section or feature on the website to showcase selected Entrepreneurs to a broader audience, including potential investors, industry experts, and the Entrepreneurs community at large.
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