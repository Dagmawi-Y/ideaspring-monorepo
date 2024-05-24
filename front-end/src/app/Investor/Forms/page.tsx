"use client"
import React, { useState, useRouter } from 'react';
import FormOneStepOne from './formone/page';
import FormOneStepTwo from './RangeSlider/page';
import FormOneStepThree from "./formthree/page"
import FormOneStepFour from "./Industries/page"
import FormOneStepFive from "./last/page"
import FormTwoStepOne from './formtwo/formtwo';
import FormTwoStepTwo from './RangeSlider/page';
import FormTwoStepThree from "./formthree/page"
import FormTwoStepFour from "./Industries/page"
import FormTwoStepFive from "./last/page"
import './style.css'; 
import Navbar from "./NavBar/page"

const Home = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [currentStep, setCurrentStep] = useState(-1);

  const formComponents = {
    formOne: [
      <FormOneStepOne key="formOneStepOne" />,
      <FormOneStepTwo key="formOneStepTwo" />,
      <FormOneStepThree key="FormOneStepThree"/>,
      <FormOneStepFour key="FormOneStepFour"/>,
      <FormOneStepFive key="FormOneStepFive" />,
    ],
    formTwo: [
      <FormTwoStepOne key="formTwoStepOne" />,
      <FormTwoStepTwo key="formTwoStepTwo" />,
      <FormTwoStepThree key="FormThree/page"/>,
      <FormTwoStepFour key="Industries/page"/>,
      <FormTwoStepFive key="FormTwoStepFive" />,
    ],
  };

  const handleNext = () => {
    if (selectedForm && currentStep < formComponents[selectedForm].length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === formComponents[selectedForm].length - 1) {
      window.location.href = "/Investor";    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      setCurrentStep(-1);
      setSelectedForm(null);
    }
  };

  const handleRadioChange = (event) => {
    setSelectedForm(event.target.value);
  };

  return (
    <div>
      <Navbar/>
      {currentStep === -1 ? (
        <div>
          <div className="h1">What type of investor are you?</div>
          <div className="h2">
            For the purposes of the Financial Services and Markets Act (Financial Promotion) Order 2005, I declare that I
            am a:
          </div>
          <div className="flex">
            <div className="custom-container">
              <div className="custom-box">
                <div className="custom-radio-container">
                  <input
                    className="custom-radio-container"
                    type="radio"
                    value="formOne"
                    checked={selectedForm === 'formOne'}
                    onChange={handleRadioChange}
                  />
                  <label>
                    <span></span>
                    <h3>Self-Certified Sophisticated Investor</h3>
                  </label>
                </div>
              </div>
              </div>
               <div className="custom-container">
                 <div className="custom-box">
                   <div className="custom-radio-container">
                     <input
                       className="custom-radio-container"
                       type="radio"
                       value="formTwo"
                       checked={selectedForm === 'formTwo'}
                       onChange={handleRadioChange}
                     />
                     <label>
                       <span></span>
                       <h3>High Net Worth Individual</h3>
                     </label>
                   </div>
                 </div>
               </div>
             </div>
             <div className="button-container" style={{ justifyContent: "space-between" }}>
               <button className="icon-button" onClick={handleBack} disabled={true}>
                 Back
               </button>
               <button className="icon-button" onClick={handleNext} disabled={!selectedForm}>
                 Next
               </button>
             </div>
           </div>
         ) : (
           <div>
             {formComponents[selectedForm][currentStep]}
             <div className="button-container" style={{ justifyContent: "space-between" }}>
               <button className="icon-button" onClick={handleBack}>
                 Back
               </button>
               <button
                    className="icon-button"
                    onClick={handleNext}
                    >
                    {currentStep === formComponents[selectedForm].length - 1 ? 'Submit' : 'Next'


                    }
                    </button>
             </div>
           </div>
         )}
       </div>
     );
   };

   export default Home;
