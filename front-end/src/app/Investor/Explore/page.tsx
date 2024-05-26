'use client'
import { useState } from "react";
import Featured from "./startups/page";
import features from "./db/data";
import Tech from "./startups/page";
import techs from "./db2/data";
import Card from "./Components/Card";
import "./style1.css";
import { css } from 'styled-jsx/css'
import Top from "./Top/page"
import Property from "./startups/page";
import properties from "./db3/data";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event:any) => {
    setQuery(event.target.value);
  };

  const filteredItems = features.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(features, selected, query) {
    let filteredProducts = features;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice, description, location, investmentRange,AreaOfExperties,TotalRequired,MinperInvestor,h1,h2,h3}) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          description={description}
          location={location}
          investmentRange={investmentRange}
          AreaOfExperties={AreaOfExperties}
          MinperInvestor={MinperInvestor}
          TotalRequired={TotalRequired}
          h1={h1}
          h2={h2}
          h3={h3}
        />
      )
    );
  }

  const result = filteredData(features, selectedCategory, query);
  const result2 = filteredData(techs, selectedCategory, query);
  const result3 = filteredData(properties, selectedCategory, query);
  const { className, styles } = css`
    body {
      font-family: ' sans-serif';
    }
  `

  return (
    <>
    <Top/>
    <div className="ola">
      <p style={{color:"black",marginLeft: "245px",fontSize:"19px"}}>Featured</p>
      <Featured result={result} />
      <p style={{color:"black",marginLeft: "245px",fontSize:"19px", marginTop: "70px",}}>Technology</p>
      <Tech result={result2} />
      <p style={{color:"black",marginLeft: "245px",fontSize:"19px", marginTop: "70px",}}>Property</p>
      <Property result={result3} />
    </div>
    </>
  );
}

export default App;