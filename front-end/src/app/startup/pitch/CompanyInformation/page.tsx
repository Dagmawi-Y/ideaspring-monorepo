"use client"
import React, { useState } from 'react';
import './form.css';
import Select from 'react-select';
import FormInput from './forms';
import { RiArrowRightLine } from 'react-icons/ri';
import { useRouter } from 'next/router'; // Use useRouter for navigation

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

  // const handleChange = (name, value) => {
  //   if (name === 'Location' || name === 'Industry 1' || name === 'Industry 2' || name === 'Stage' || name === 'Ideal Investor Role' || name === 'PreviousRaise' || name === 'TotalRaise' || name === 'Total-Raise' || name === 'Minimum investment') {
  //     setValues({ ...values, [name]: value });
  //   } else if (value && value.target) { // Check if value has a target property
  //     setValues({ ...values, [name]: value.target.value });
  //   }
  // };
  const [errors, setErrors] = useState({}); // State to store validation errors


  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) }); // Update errors on change
  };

  const validateField = (name, value) => {
    let errorMessage = '';
    switch (name) {
      case 'username':
      case 'email':
        if (!value) {
          errorMessage = 'This field is required.';
        } else if (!/^[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
          errorMessage = 'Invalid email format.';
        }
        break;
      case 'password':
      case 'confirmPassword':
        if (!value) {
          errorMessage = 'This field is required.';
        } else if (value.length < 6) {
          errorMessage = 'Password must be at least 6 characters long.';
        }
        break;
      case 'pitchTitle':
        if (!value) {
          errorMessage = inputs.find((input) => input.name === name).errorMessage;
        } else if (!/^[A-Za-z0-9]{3,16}$/.test(value)) {
          errorMessage = 'Invalid pitch title format (3-16 characters).';
        }
        break;
      case 'website': // Assuming website is optional
        if (value && !/^https?:\/\/[^\s]+/.test(value)) {
          errorMessage = 'Invalid website URL format.';
        }
        break;
      case 'mobile number': // Assuming mobile number validation is specific
        // Add your custom mobile number validation logic here
        break;
        default:
          errorMessage = inputs.find((input) => input.name === name)?.required && !value
            ? inputs.find((input) => input.name === name).errorMessage
            : '';
    }
    return errorMessage;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFieldsValid = Object.values(errors).every((error) => !error); // Check for all valid fields

    if (allFieldsValid) {
      // Perform form submission logic here (e.g., send data to server)
      console.log('Form submitted successfully:', values);

      // Navigate to the 'Success' component using router.push
    } else {
      console.error('Form submission failed due to validation errors:', errors);
    }
  };

  const inputs = [
    {
      id: 1,
      name: 'Pitch Title',
      type: 'text',
      placeholder: 'Pitch Title',
      errorMessage:
        "This is a required field",
      label: 'Pitch Title',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'Website (Optional)',
      type: 'url',
      placeholder: 'Website',
      label: 'Website (optional)',
    },
    {
      id: 3,
      name: 'Location',
      type: 'select',
      placeholder: 'Location',
      label: 'Where is your company based?',
    },
    {
      id: 4,
      name: 'Mobile number',
      type: 'text',
      placeholder: 'Mobile number',
      errorMessage:
        'This is a required field',
      label: 'Mobile number',

      required: true,
    },
    {
      id: 5,
      name: 'Industry 1',
      type: 'select',
      placeholder: 'Industry 1',
      errorMessage:
        'This is a required field',
      label: 'Industry 1',
      required: true,
    },
    {
      id: 6,
      name: 'Industry 2',
      type: 'select',
      placeholder: 'Industry 2',
      label: 'Industry 2 (optional)',
    },
    {
      id: 7,
      name: 'Stage',
      type: 'select',
      placeholder: 'Stage',
      errorMessage:
        'This is a required field',
      label: 'Stage',
      required: true,
    },
    {
      id: 8,
      name: 'Ideal Investor Role',
      type: 'select',
      placeholder: 'Ideal Investor Role',
      errorMessage:
      'This is a required field',
      label: 'Ideal Investor Role',
      required: true,
    },
    {
      id: 9,
      name: 'PreviousRaise',
      type: 'select',
      placeholder: 'PreviousRaise',
      label: 'If you did a previous round, how much did you raise?',
    },
    {
      id: 10,
      name: 'TotalRaise',
      type: 'select',
      placeholder: 'TotalRaise',
      errorMessage:
        'This is a required field',
      label: 'How much are you raising in total?',
      required: true,
    },
    {
      id: 11,
      name: 'Total-Raise',
      type: 'select',
      placeholder: 'Total-Raise',
      errorMessage:
      'This is a required field',
       label: 'How much of this total have your raised?',
      required: true,
    },
    {
      id: 12,
      name: 'Minimum investment',
      type: 'select',
      placeholder: 'Minimum investment',
      errorMessage:
      'This is a required field',      
      label: 'What is the minimum investment per investor?',
      required: true,
    },
  ];

  const LocationOptions = [
    { value: 'addis_ababa', label: 'Addis Ababa' },
    { value: 'dire_dawa', label: 'Dire Dawa' },
    { value: 'mekelle', label: 'Mekelle' },
    { value: 'gondar', label: 'Gondar' },
    { value: 'bahir_dar', label: 'Bahir Dar' },
    { value: 'hawassa', label: 'Hawassa' },
    { value: 'jimma', label: 'Jimma' },
    { value: 'debrezeit', label: 'Debre Zeit' },
    { value: 'adama', label: 'Adama' },
    { value: 'dessie', label: 'Dessie' },
    { value: 'bahirdar', label: 'Bahir Dar' },
    { value: 'hawzen', label: 'Hawzen' },
    { value: 'axum', label: 'Axum' },
    { value: 'arba_minch', label: 'Arba Minch' },
    { value: 'mekele', label: 'Mekele' },
    { value: 'jijiga', label: 'Jijiga' },
    { value: 'lalibela', label: 'Lalibela' },
    { value: 'harar', label: 'Harar' },
    { value: 'nazareth', label: 'Nazareth' },
    { value: 'awasa', label: 'Awasa' },
    { value: 'bale_mountains', label: 'Bale Mountains' },
  ];

  const industryOptions = [
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'information_technology', label: 'Information Technology' },
    { value: 'tourism', label: 'Tourism' },
    { value: 'construction', label: 'Construction' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'energy', label: 'Energy' },
    { value: 'finance', label: 'Finance' },
    { value: 'telecommunications', label: 'Telecommunications' },
    { value: 'retail', label: 'Retail' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'real_estate', label: 'Real Estate' },
    { value: 'media_and_entertainment', label: 'Media and Entertainment' },
    { value: 'food_and_beverage', label: 'Food and Beverage' },
    { value: 'automotive', label: 'Automotive' },
    { value: 'textile_and_apparel', label: 'Textile and Apparel' },
    { value: 'environmental_services', label: 'Environmental Services' },
    { value: 'pharmaceuticals', label: 'Pharmaceuticals' },
    { value: 'mining', label: 'Mining' },
  ];

  const stageOptions = [
    { value: 'Pre-Startup', label: 'Pre-Startup' },
    { value: 'Profitable', label: 'Profitable' },
    { value: 'MVP', label: 'MVP' },
    { value: 'Achieving-sales', label: 'Achieving-sales' },
    { value: 'Brekingeven', label: 'Breaking Even' },
    { value: 'other', label: 'Other' },
  ];

  const idealInvestorRoleOptions = [
    { value: 'silent', label: 'Silent' },
    { value: 'Daily-Involvement', label: 'Daily Involvement' },
    { value: 'Weekly-Involvement', label: 'Weekly Involvement' },
    { value: 'Monthly-Involvement', label: 'Monthly Involvement' },
    { value: 'any', label: 'Any' },
  ];

  const previousRaiseOptions = [
    { value: 0, label: '0' },
    { value: 100, label: '100' },
    { value: 500, label: '500' },
    { value: 1_000, label: '1,000' },
    { value: 5_000, label: '5,000' },
    { value: 10_000, label: '10,000' },
    { value: 50_000, label: '50,000' },
    { value: 100_000, label: '100,000' },
    { value: 500_000, label: '500,000' },
    { value: 1_000_000, label: '1,000,000' },
    { value: 2_000_000, label: '2,000,000' },
    { value: 3_000_000, label: '3,000,000' },
    { value: 4_000_000, label: '4,000,000' },
    { value: 5_000_000, label: '5,000,000' },
    { value: 6_000_000, label: '6,000,000' },
    { value: 7_000_000, label: '7,000,000' },
    { value: 8_000_000, label: '8,000,000' },
    { value: 9_000_000, label: '9,000,000' },
    { value: 10_000_000, label: '10,000,000' },
    { value: 15_000_000, label: '15,000,000' },
    { value: 20_000_000, label: '20,000,000' },
    { value: 25_000_000, label: '25,000,000' },
    { value: 30_000_000, label: '30,000,000' },
    { value: 35_000_000, label: '35,000,000' },
    { value: 40_000_000, label: '40,000,000' },
    { value: 45_000_000, label: '45,000,000' },
    { value: 50_000_000, label: '50,000,000' },
    { value: 60_000_000, label: '60,000,000' },
    { value: 70_000_000, label: '70,000,000' },
    { value: 80_000_000, label: '80,000,000' },
    { value: 90_000_000, label: '90,000,000' },
    { value: 100_000_000, label: '100,000,000' },
    { value: 200_000_000, label: '200,000,000' },
    { value: 300_000_000, label: '300,000,000' },
    { value: 400_000_000, label: '400,000,000' },
    { value: 500_000_000, label: '500,000,000' },
    { value: 1_000_000_000, label: '1,000,000,000' },
    { value: 2_000_000_000, label: '2,000,000,000' },
    { value: 3_000_000_000, label: '3,000,000,000' },
    { value: 4_000_000_000, label: '4,000,000,000' },
    { value: 5_000_000_000, label: '5,000,000,000' },
    { value: 10_000_000_000, label: '10,000,000,000' },
    { value: 50_000_000_000, label: '50,000,000,000' },
    { value: 100_000_000_000, label: '100,000,000,000' },
    { value: 500_000_000_000, label: '500,000,000,000' },
    { value: 1_000_000_000_000, label: '1,000,000,000,000' }
  ];

  const totalRaiseOptions = [
    { value: 0, label: '0' },
    { value: 100, label: '100' },
    { value: 500, label: '500' },
    { value: 1_000, label: '1,000' },
    { value: 5_000, label: '5,000' },
    { value: 10_000, label: '10,000' },
    { value: 50_000, label: '50,000' },
    { value: 100_000, label: '100,000' },
    { value: 500_000, label: '500,000' },
    { value: 1_000_000, label: '1,000,000' },
    { value: 2_000_000, label: '2,000,000' },
    { value: 3_000_000, label: '3,000,000' },
    { value: 4_000_000, label: '4,000,000' },
    { value: 5_000_000, label: '5,000,000' },
    { value: 6_000_000, label: '6,000,000' },
    { value: 7_000_000, label: '7,000,000' },
    { value: 8_000_000, label: '8,000,000' },
    { value: 9_000_000, label: '9,000,000' },
    { value: 10_000_000, label: '10,000,000' },
    { value: 15_000_000, label: '15,000,000' },
    { value: 20_000_000, label: '20,000,000' },
    { value: 25_000_000, label: '25,000,000' },
    { value: 30_000_000, label: '30,000,000' },
    { value: 35_000_000, label: '35,000,000' },
    { value: 40_000_000, label: '40,000,000' },
    { value: 45_000_000, label: '45,000,000' },
    { value: 50_000_000, label: '50,000,000' },
    { value: 60_000_000, label: '60,000,000' },
    { value: 70_000_000, label: '70,000,000' },
    { value: 80_000_000, label: '80,000,000' },
    { value: 90_000_000, label: '90,000,000' },
    { value: 100_000_000, label: '100,000,000' },
    { value: 200_000_000, label: '200,000,000' },
    { value: 300_000_000, label: '300,000,000' },
    { value: 400_000_000, label: '400,000,000' },
    { value: 500_000_000, label: '500,000,000' },
    { value: 1_000_000_000, label: '1,000,000,000' },
    { value: 2_000_000_000, label: '2,000,000,000' },
    { value: 3_000_000_000, label: '3,000,000,000' },
    { value: 4_000_000_000, label: '4,000,000,000' },
    { value: 5_000_000_000, label: '5,000,000,000' },
    { value: 10_000_000_000, label: '10,000,000,000' },
    { value: 50_000_000_000, label: '50,000,000,000' },
    { value: 100_000_000_000, label: '100,000,000,000' },
    { value: 500_000_000_000, label: '500,000,000,000' },
    { value: 1_000_000_000_000, label: '1,000,000,000,000' }
  ];

  const totalRaiseProgressOptions = [
    { value: 0, label: '0' },
    { value: 100, label: '100' },
    { value: 500, label: '500' },
    { value: 1_000, label: '1,000' },
    { value: 5_000, label: '5,000' },
    { value: 10_000, label: '10,000' },
    { value: 50_000, label: '50,000' },
    { value: 100_000, label: '100,000' },
    { value: 500_000, label: '500,000' },
    { value: 1_000_000, label: '1,000,000' },
    { value: 2_000_000, label: '2,000,000' },
    { value: 3_000_000, label: '3,000,000' },
    { value: 4_000_000, label: '4,000,000' },
    { value: 5_000_000, label: '5,000,000' },
    { value: 6_000_000, label: '6,000,000' },
    { value: 7_000_000, label: '7,000,000' },
    { value: 8_000_000, label: '8,000,000' },
    { value: 9_000_000, label: '9,000,000' },
    { value: 10_000_000, label: '10,000,000' },
    { value: 15_000_000, label: '15,000,000' },
    { value: 20_000_000, label: '20,000,000' },
    { value: 25_000_000, label: '25,000,000' },
    { value: 30_000_000, label: '30,000,000' },
    { value: 35_000_000, label: '35,000,000' },
    { value: 40_000_000, label: '40,000,000' },
    { value: 45_000_000, label: '45,000,000' },
    { value: 50_000_000, label: '50,000,000' },
    { value: 60_000_000, label: '60,000,000' },
    { value: 70_000_000, label: '70,000,000' },
    { value: 80_000_000, label: '80,000,000' },
    { value: 90_000_000, label: '90,000,000' },
    { value: 100_000_000, label: '100,000,000' },
    { value: 200_000_000, label: '200,000,000' },
    { value: 300_000_000, label: '300,000,000' },
    { value: 400_000_000, label: '400,000,000' },
    { value: 500_000_000, label: '500,000,000' },
    { value: 1_000_000_000, label: '1,000,000,000' },
    { value: 2_000_000_000, label: '2,000,000,000' },
    { value: 3_000_000_000, label: '3,000,000,000' },
    { value: 4_000_000_000, label: '4,000,000,000' },
    { value: 5_000_000_000, label: '5,000,000,000' },
    { value: 10_000_000_000, label: '10,000,000,000' },
    { value: 50_000_000_000, label: '50,000,000,000' },
    { value: 100_000_000_000, label: '100,000,000,000' },
    { value: 500_000_000_000, label: '500,000,000,000' },
    { value: 1_000_000_000_000, label: '1,000,000,000,000' }
  ];

  const minimumInvestmentOptions = [
    { value: 0, label: '0' },
    { value: 100, label: '100' },
    { value: 500, label: '500' },
    { value: 1_000, label: '1,000' },
    { value: 5_000, label: '5,000' },
    { value: 10_000, label: '10,000' },
    { value: 50_000, label: '50,000' },
    { value: 100_000, label: '100,000' },
    { value: 500_000, label: '500,000' },
    { value: 1_000_000, label: '1,000,000' },
    { value: 2_000_000, label: '2,000,000' },
    { value: 3_000_000, label: '3,000,000' },
    { value: 4_000_000, label: '4,000,000' },
    { value: 5_000_000, label: '5,000,000' },
    { value: 6_000_000, label: '6,000,000' },
    { value: 7_000_000, label: '7,000,000' },
    { value: 8_000_000, label: '8,000,000' },
    { value: 9_000_000, label: '9,000,000' },
    { value: 10_000_000, label: '10,000,000' },
    { value: 15_000_000, label: '15,000,000' },
    { value: 20_000_000, label: '20,000,000' },
    { value: 25_000_000, label: '25,000,000' },
    { value: 30_000_000, label: '30,000,000' },
    { value: 35_000_000, label: '35,000,000' },
    { value: 40_000_000, label: '40,000,000' },
    { value: 45_000_000, label: '45,000,000' },
    { value: 50_000_000, label: '50,000,000' },
    { value: 60_000_000, label: '60,000,000' },
    { value: 70_000_000, label: '70,000,000' },
    { value: 80_000_000, label: '80,000,000' },
    { value: 90_000_000, label: '90,000,000' },
    { value: 100_000_000, label: '100,000,000' },
    { value: 200_000_000, label: '200,000,000' },
    { value: 300_000_000, label: '300,000,000' },
    { value: 400_000_000, label: '400,000,000' },
    { value: 500_000_000, label: '500,000,000' },
    { value: 1_000_000_000, label: '1,000,000,000' },
    { value: 2_000_000_000, label: '2,000,000,000' },
    { value: 3_000_000_000, label: '3,000,000,000' },
    { value: 4_000_000_000, label: '4,000,000,000' },
    { value: 5_000_000_000, label: '5,000,000,000' },
    { value: 10_000_000_000, label: '10,000,000,000' },
    { value: 50_000_000_000, label: '50,000,000,000' },
    { value: 100_000_000_000, label: '100,000,000,000' },
    { value: 500_000_000_000, label: '500,000,000,000' },
    { value: 1_000_000_000_000, label: '1,000,000,000,000' }
  ];
  const options = {
    Location: LocationOptions,
    'Industry 1': industryOptions,
    'Industry 2': industryOptions,
    Stage: stageOptions,
    'Ideal Investor Role': idealInvestorRoleOptions,
    PreviousRaise: previousRaiseOptions,
    TotalRaise: totalRaiseOptions,
    'Total-Raise': totalRaiseProgressOptions,
    'Minimum investment': minimumInvestmentOptions,
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <div style={{display:"flex",flexDirection:"row"}}>
        <h1>Company Info</h1>
        <a href="/startup" className='link' style={{color:"#fe0505",marginLeft: "-40px",}}>Go back to dashboard</a>
        </div>
        <h2 className='h2'>a</h2>
        <h3>25% complete</h3>
        <div className="col">
          <div className="formpage">
            {inputs.map((input) =>
              input.type === 'select' ? (
                <div className="form-group" key={input.id}>
                  <br/>
                  <label htmlFor={input.name}>{input.label}</label>
                  <br/><br/>
                  <Select
                  id={input.name}
                  name={input.name}
                  value={values[input.name] ? options[input.name].find(option => option.value === values[input.name]) : ''}
                  options={options[input.name]}
                  onChange={(selectedOption) => handleChange(input.name, selectedOption.value)}
                  />
                </div>
                ) : (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={handleChange}
                />
                
              )
            )}
            <button type="submit">Submit</button>
          </div>
          <div className="image">
            <div className="explore__card">
              <span>
                <i className="ri-heart-pulse-fill"></i>
              </span>
              <img src="/office.jpeg" alt="logo" />
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