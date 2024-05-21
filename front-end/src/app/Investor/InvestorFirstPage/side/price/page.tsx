import React from "react";
import Input from "../../Components/Input";
import './style3.css'

interface PriceProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Price: React.FC<PriceProps> = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Market Scope</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="Domestic"
          title="Domestic"
          name="test2"
          style={{ overflow: 'hidden' }}
        />

        <Input
          handleChange={handleChange}
          value='International'
          title="International"
          name="test2"
          style={{ overflow: 'hidden' }}
        />
      </div>
    </>
  );
};

export default Price;