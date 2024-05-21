import React from "react";
import Button from "../Components/Button";
import "./style5.css";
interface RecommendedProps {
  handleClick: (result: string) => void;
}

const Recommended: React.FC<RecommendedProps> = ({ handleClick }) => {
  return (
    <>
      <div>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All investors" className="bt"  style={{paddingTop: "39px",}}/>
          <Button
          onClickHandler={handleClick}
          value="Technology"
          title="Technology"
          name="test"
          className="bt"
        />
        <Button
          onClickHandler={handleClick}
          value="Entertainment"
          title="Entertainment"
          name="test"
          className="bt"
        />
        <Button
          onClickHandler={handleClick}
          value="Agriculture"
          title="Agriculture"
          name="test"
          className="bt"
        />
        <Button
          onClickHandler={handleClick}
          value="Health"
          title="Health"
          name="test"
          className="bt"
        />
        <Button
          onClickHandler={handleClick}
          value="Logistics"
          title="Logistics"
          name="test"
          className="bt"
        />
        <Button
          onClickHandler={handleClick}
          value="Construction"
          title="Construction"
          name="test"
          className="bt"
        />
        <Button
          onClickHandler={handleClick}
          value="Manufacturing"
          title="Manufacturing"
          name="test"
          className="bt"
        />
        <Button
          onClickHandler={handleClick}
          value="Education"
          title="Education"
          name="test"
          className="bt"
        />
        <Button
          onClickHandler={handleClick}
          value="Tourism"
          title="Tourism"
          name="test"
          className="bt"
        />
        </div>
      </div>
    </>
  );
};

export default Recommended;