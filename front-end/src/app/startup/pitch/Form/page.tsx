'use client';
import React, { useState } from 'react';
import './form.css';
import Select from 'react-select';
import FormInput from './forms';
import { RiArrowRightLine } from 'react-icons/ri';
import apiClient from '@/utils/apiClient';
import { setActiveLink } from '../page';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for React Toastify
import Cookies from 'js-cookie';

const App = ({ setActiveLink }) => {
  const [values, setValues] = useState({
    pitchTitle: '',
    website: '',
    mobileNumber: '',
    previousRoundAmount: '',
    totalRaisingAmount: '',
    raisedAmount: '',
    taxRelief: '',
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
    console.log(`Changing ${name} to ${value}`); // Log the name and value of the change
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    console.log({
      values,
    });

    const formData = {
      pitchTitle: values.pitchTitle || '',
      website: values.website || '',
      location: values.location || '',
      mobileNumber: values.mobileNumber ? values.mobileNumber : null,
      industry1:
        industryOptions.find(
          (option) => option.value === parseInt(values.industry1)
        )?.value ?? null,
      industry2:
        industryOptions.find(
          (option) => option.value === parseInt(values.industry2)
        )?.value ?? null,
      stage:
        stageOptions.find((option) => option.value === parseInt(values.stage))
          ?.value ?? null,
      idealInvestorRole:
        idealInvestorRoleOptions.find(
          (option) => option.value === parseInt(values.idealInvestorRole)
        )?.value ?? null,
      previousRoundAmount: +values.previousRoundAmount,
      totalRaisingAmount: +values.totalRaisingAmount,
      raisedAmount: +values.raisedAmount,
      minimumInvestment: +values.minimumInvestment,
      taxRelief:
        taxReliefOptions.find((option) => option.label === values.taxRelief)
          ?.value ?? null,
    };

    console.log('FormData:', formData);

    try {
      const response = await apiClient.post('startups/add', formData);

      Cookies.set('startup_id', response.data.startup_id);
      console.log({
        cookie: Cookies.get('startup_id'),
      });

      if (response.data.status === 'startup_exist_error') {
        toast.error(response.data.msg, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false, // Show progress bar
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: 'custom-toast',
        });
      } else {
        // Handle successful response
        console.log(response.data);
        setActiveLink('Pitch');
      }
    } catch (error) {
      // Handle the error
      console.error('Error:', error);
    }
  };

  const inputs = [
    {
      id: 1,
      name: 'pitchTitle',
      type: 'text',
      placeholder: 'Pitch Title',
      errorMessage:
        "Pitch Title should be less than 25 characters and shouldn't include any special characters!",
      label: 'Pitch Title',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'website',
      type: 'text',
      placeholder: 'Website',
      errorMessage: 'It should be a valid website address!',
      label: 'Website (optional)',
      required: true,
    },
    {
      id: 3,
      name: 'location',
      type: 'select',
      placeholder: 'Location',
      label: 'Where is your company based?',
    },
    {
      id: 4,
      name: 'mobileNumber',
      type: 'text',
      placeholder: 'Mobile number',
      errorMessage: 'This is a required filed',
      label: 'Mobile number',

      required: true,
    },
    {
      id: 5,
      name: 'industry1',
      type: 'select',
      placeholder: 'Industry 1',
      errorMessage: 'This is a required filed',
      label: 'Industry 1',
      required: true,
    },
    {
      id: 6,
      name: 'industry2',
      type: 'select',
      placeholder: 'Industry 2',
      label: 'Industry 2 (optional)',
    },
    {
      id: 7,
      name: 'stage',
      type: 'select',
      placeholder: 'Stage',
      errorMessage: 'This is a required filed',
      label: 'Stage',
      required: true,
    },
    {
      id: 8,
      name: 'idealInvestorRole',
      type: 'select',
      placeholder: 'Ideal Investor Role',
      errorMessage: 'This is a required filed',
      label: 'Ideal Investor Role',
      required: true,
    },
    {
      id: 9,
      name: 'previousRoundAmount',
      type: 'select',
      placeholder: 'PreviousRaise',
      label: 'If you did a previous round, how much did you raise?',
    },
    {
      id: 10,
      name: 'totalRaisingAmount',
      type: 'select',
      placeholder: 'TotalRaise',
      errorMessage: 'This is a required filed',
      label: 'How much are you raising in total?',
      required: true,
    },
    {
      id: 11,
      name: 'raisedAmount',
      type: 'select',
      placeholder: 'Total-Raise',
      errorMessage: 'This is a required filed',
      label: 'How much of this total have your raised?',
      required: true,
    },
    {
      id: 12,
      name: 'minimumInvestment',
      type: 'select',
      placeholder: 'Minimum investment',
      errorMessage: 'This is a required filed',
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
  ];

  const industries = [
    { id: 1, name: 'Agriculture' },
    { id: 2, name: 'Business Services' },
    { id: 3, name: 'Education & Training' },
    { id: 4, name: 'Energy & Natural Resources' },
    { id: 5, name: 'Entertainment & Leisure' },
    { id: 6, name: 'Fashion & Beauty' },
    { id: 7, name: 'Finance' },
    { id: 8, name: 'Food & Beverage' },
    { id: 9, name: 'Hospitality, Restaurants & Bars' },
    { id: 10, name: 'Manufacturing & Engineering' },
    { id: 11, name: 'Media' },
    { id: 12, name: 'Medical & Sciences' },
    { id: 13, name: 'Personal Services' },
    { id: 14, name: 'Products & Inventions' },
    { id: 15, name: 'Property' },
    { id: 16, name: 'Retail' },
    { id: 17, name: 'Sales & Marketing' },
    { id: 18, name: 'Software' },
    { id: 19, name: 'Technology' },
    { id: 20, name: 'Transportation' },
  ];

  const stages = [
    { id: 1, stageName: 'Achieving Sales' },
    { id: 2, stageName: 'Breaking Even' },
    { id: 3, stageName: 'MVP/Finished Product' },
    { id: 4, stageName: 'Other' },
    { id: 5, stageName: 'Pre-Startup/R&D' },
    { id: 6, stageName: 'Profitable' },
  ];

  const investorRoles = [
    { id: 1, roleName: 'Silent' },
    { id: 2, roleName: 'Daily Involvement' },
    { id: 3, roleName: 'Weekly Involvement' },
    { id: 4, roleName: 'Monthly Involvement' },
    { id: 5, roleName: 'Any' },
  ];

  const taxReliefs = [
    { id: 1, reliefName: 'SEIS' },
    { id: 2, reliefName: 'EIS' },
  ];

  const industryOptions = industries.map((industry) => ({
    value: industry.id,
    label: industry.name,
  }));

  const stageOptions = stages.map((stage) => ({
    value: stage.id,
    label: stage.stageName,
  }));

  const idealInvestorRoleOptions = investorRoles.map((role) => ({
    value: role.id,
    label: role.roleName,
  }));

  const taxReliefOptions = taxReliefs.map((relief) => ({
    value: relief.id,
    label: relief.reliefName,
  }));

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
  ];
  const options = {
    location: LocationOptions,
    industry1: industryOptions,
    industry2: industryOptions,
    stage: stageOptions,
    idealInvestorRole: idealInvestorRoleOptions,
    previousRoundAmount: previousRaiseOptions,
    totalRaisingAmount: totalRaiseOptions,
    raisedAmount: totalRaiseProgressOptions,
    minimumInvestment: minimumInvestmentOptions,
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Company Info</h1>
        <h2 className="h2">a</h2>
        <h3>25% complete</h3>
        <div className="col">
          <div className="formpage">
            {inputs.map((input) =>
              input.type === 'select' ? (
                <div className="form-group" key={input.id}>
                  <br />
                  <label htmlFor={input.name}>{input.label}</label>
                  <br />
                  <br />
                  <Select
                    id={input.name}
                    name={input.name}
                    value={
                      options[input.name].find(
                        (option) => option.value === values[input.name]
                      ) || null
                    }
                    options={options[input.name]}
                    onChange={(selectedOption) =>
                      handleChange(
                        input.name,
                        selectedOption ? selectedOption.value : null
                      )
                    }
                  />
                </div>
              ) : (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={(e) => handleChange(input.name, e.target.value)}
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
                Offers a dedicated section or feature on the website to showcase
                selected Entrepreneurs to a broader audience, including
                potential investors, industry experts, and the Entrepreneurs
                community at large.
              </p>
              <a href="#" style={{ color: '#f88630' }}>
                Join Now <RiArrowRightLine />
              </a>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default App;
