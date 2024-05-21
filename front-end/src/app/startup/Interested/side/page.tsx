import React from "react";
import Category from "./Catagory/page";
import Price from "./price/page";
import Colors from "./color/page";
import "./style2.css";

interface SidebarProps {
  handleChange: (value: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleChange }) => {
  return (
    <>
      <section className="sidebarr">
        {/* <div className="logo-containerr">
          <h1>FILTER</h1>
        </div> */}
        {/* <Category handleChange={handleChange} />
        <Price handleChange={handleChange} /> */}
        {/* <Colors handleChange={handleChange} /> */}
      </section>
    </>
  );
};

export default Sidebar;