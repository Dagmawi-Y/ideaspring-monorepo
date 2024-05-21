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
          <Button onClickHandler={handleClick} value="" title="All Startups" className="bt" />
          <Button onClickHandler={handleClick} value="Pre-Startup" title="Pre-Startup" className="bt"/>
          <Button onClickHandler={handleClick} value="MVP" title="MVP (finished product)" className="bt"/>
          <Button onClickHandler={handleClick} value="Achieving-sales" title="Achieving-sales" className="bt" />
          <Button onClickHandler={handleClick} value="Profitable" title="Profitable" className="bt"/>
        </div>
      </div>
    </>
  );
};

export default Recommended;