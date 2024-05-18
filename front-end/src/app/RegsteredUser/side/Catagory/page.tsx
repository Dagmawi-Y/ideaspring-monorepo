import React from "react";
import Input from "../../Components/Input";
import "./style4.css"
interface CategoryProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Category: React.FC<CategoryProps> = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Sector</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Technology"
          title="Technology"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Entertainment"
          title="Entertainment"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Agriculture"
          title="Agriculture"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Health"
          title="Health"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Logistics"
          title="Logistics"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Construction"
          title="Construction"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Manufacturing"
          title="Manufacturing"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Education"
          title="Education"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Tourism"
          title="Tourism"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;