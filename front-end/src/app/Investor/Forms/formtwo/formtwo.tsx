import React, { useState } from 'react';
import SignaturePad from 'react-signature-pad-wrapper';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../formone/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '@/app/RegsteredUser/Components/Button';
function SelfCertificationForm() {
  const [workedInFinance, setWorkedInFinance] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [heldDirectorPosition, setHeldDirectorPosition] = useState(false);
  const [annualTurnover, setAnnualTurnover] = useState('');
  const [certifiedAccountant, setCertifiedAccountant] = useState(false);
  const [membershipNumber, setMembershipNumber] = useState('');
  const  [optionD, setOptionD]=useState("")
  const [oD, setD] = useState(false);

  const handleWorkedInFinanceChange = (event) => {
    setWorkedInFinance(event.target.value === 'yes');
  };

  const handleBusinessNameChange = (event) => {
    setBusinessName(event.target.value);
  };

  const handleHeldDirectorPositionChange = (event) => {
    setHeldDirectorPosition(event.target.value === 'yes');
  };

  const handleAnnualTurnoverChange = (event) => {
    setAnnualTurnover(event.target.value);
  };

  const handleCertifiedAccountantChange = (event) => {
    setCertifiedAccountant(event.target.value === 'yes');
  };

  const handleMembershipNumberChange = (event) => {
    setMembershipNumber(event.target.value);
  };
  const HandleoptionD = (event) => {
    setOptionD(event.target.value);
  };
  const HandleD = (event) => {
    setD(event.target.value === 'yes');
  };
  const [signature, setSignature] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // const handleSignature = (sig) => {
  //   setSignature(sig);
  // };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    const [isSigning, setIsSigning] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleSignature = () => {
      // Handle signature logic here
    };
  
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
    const handleOptionChange = (isSigning, event) => {
      event.preventDefault();
      setIsSigning(isSigning);
    };
  return (
    <>
    <h1 className='h1'>High Net Worth Individual Investor Statement</h1>
    <h2 className='h2'>For the purposes of the Financial Services and Markets Act (Financial Promotion) Order 2005...</h2>
    <div className="container">
    <form>
      <div className="question">
        {/* <p>If you meet <b>condition A, B or C below</b>, you may choose to be classified as a self-certified sophisticated investor for the purposes of the Financial Services and Markets Act 2000 (Financial Promotion) Order 2005.</p> */}
        <p>In the last financial year, did you have:</p>
        <p>A) <b>An annual income of £100,000 or more?</b> Income does NOT include any one-off pension withdrawals.</p>
        <div className="radio-buttons">
          <label htmlFor="workedInFinanceYes">Yes</label>
          <input
            type="radio"
            id="workedInFinanceYes"
            value="yes"
            checked={workedInFinance}
            onChange={handleWorkedInFinanceChange}
            className="custom-radio"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label htmlFor="workedInFinanceNo">No</label>
          <input
            type="radio"
            id="workedInFinanceNo"
            value="no"
            checked={!workedInFinance}
            onChange={handleWorkedInFinanceChange}
          />
        </div>
      </div>
      {workedInFinance && (
        <div className="business-name">
          <label htmlFor="businessName">If yes, please specify your income (as defined above) to the nearest £10,000 in the last financial year</label>
          <input
            type="text"
            id="businessName"
            value={businessName}
            onChange={handleBusinessNameChange}
          />
          <p>B) <b>Net assets of £250,000 or more? </b>Net assets do NOT include: your home (primary residence), any loan secured on it or any equity released from it; your pension (or any pension withdrawals) or any rights under insurance contracts. Net assets are total assets minus any debts you owe.</p>
          <div className="radio-buttons">
            <label htmlFor="heldDirectorPositionYes">Yes</label>
            <input
              type="radio"
              id="heldDirectorPositionYes"
              value="yes"
              checked={heldDirectorPosition}
              onChange={handleHeldDirectorPositionChange}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="heldDirectorPositionNo">No</label>
            <input
              type="radio"
              id="heldDirectorPositionNo"
              value="no"
              checked={!heldDirectorPosition}
              onChange={handleHeldDirectorPositionChange}
            />
          </div>
          {heldDirectorPosition && (
            <div className="annual-turnover">
              <label htmlFor="annualTurnover">If yes, please specify your net assets (as defined above) to the nearest £100,000 in the last financial year</label>
              <input
                type="text"
                id="annualTurnover"
                value={annualTurnover}
                onChange={handleAnnualTurnoverChange}
              />
            </div>
          )}
        </div>
      )}
      
          <p>C) None of these apply to me.</p>
      <div className="radio-buttons">
        <label htmlFor="certifiedAccountantYes">Yes</label>
        <input
          type="radio"
          id="certifiedAccountantYes"
          value="yes"
          onChange={HandleD}
          />
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="certifiedAccountantNo">No</label>
            <input
              type="radio"
              id="certifiedAccountantNo"
              value="no"
              checked={!oD}
              onChange={HandleD}
            /> */}
          </div>
          {oD && (
            <div className="membership-number">
            <label htmlFor="membershipNumber">
              <span className="warning-icon">&#x26A0;&#xFE0F;</span>
              If none of these apply to you, I'm afraid you won't be able to continue the registration process.
            </label>
          </div>
          )}
          <p>I declare that I have answered yes to A and/or B and wish to be treated as a high net worth individual.</p>
          <p>I understand that this means:</p>
          <p>1. &nbsp;&nbsp;I can receive financial promotions where the contents may not comply with rules made by the Financial Conduct Authority (FCA); and</p>
          <p>2. &nbsp;&nbsp;I can expect no protection from the FCA, the Financial Ombudsman Service or the Financial Services Compensation Scheme.</p>
          <p>I am aware that it is open to me to seek advice from someone who specialises in advising on investments.</p>
          <p><b>I accept that I could lose all of the money I invest.</b></p>
          <div className="containerrs">
      <div className="form-group">
      <div className="form-group">
      <div className="date-input-container">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
        />
        <FontAwesomeIcon icon={faCalendarAlt} className="date-icon" />
      </div>
    </div>
       
      </div>
      
      <div className="form-group">
      <div className="option-buttons">
        <button
          className={`option-button ${isSigning ? 'active' : ''}`}
          onClick={(event) => handleOptionChange(true, event)}
        >
          Signature
        </button>
        <button
          className={`option-button ${!isSigning ? 'active' : ''}`}
          onClick={(event) => handleOptionChange(false, event)}
        >
          Upload
        </button>
      </div>
      {isSigning ? (
        <>
        <div className='signature-container'>
          <label style={{ textAlign: 'center', fontWeight:"lighter"}}>
            Draw your Signature here please
          </label>
          <SignaturePad
            id="signature-pad"
            minWidth={540}
            minHeight={150}
            penColor="black"
            onEnd={handleSignature}
          />
        </div>
        <label style={{ marginTop:"30px", fontWeight:"lighter" }}>By signing this document with an electronic signature, I agree that such signature will be as valid as handwritten signatures to the extent allowed by local law.</label>
        </>
      ) : (
        <>
        <div className='document-signing-form'>
      <label htmlFor="signature-upload">Select a signature file or scan to upload</label>
      <input type="file" id="signature-upload" style={{ display: 'none' }} onChange={handleFileUpload} />
      <label htmlFor="signature-upload" className="upload-button">
        <h4>Upload Signature</h4>
      </label>
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      
    </div>
    <label style={{ marginTop:"30px", fontWeight:"lighter" }}>By signing this document with an electronic signature, I agree that such signature will be as valid as handwritten signatures to the extent allowed by local law.</label>
    </>
      )}
    </div>
    </div>
    {/* <button className='submit-button'>Accept & Sign</button> */}
    </form>
    </div>
    </>
      );
    }
    
    export default SelfCertificationForm;
    
