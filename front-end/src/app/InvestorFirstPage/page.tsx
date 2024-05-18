'use client'
import { useState } from "react";
import Navigation from "./Navigation/page";
import Products from "./products/page";
import products from "./db/data";
import Recommended from "./Recommended/page";
import Sidebar from "./side/page";
import Card from "./Components/Card";
import "./style1.css";
import NavBar from "../startup/NavBar/page"
import Title from "../InvestorFirstPage/title/page"
import { css } from 'styled-jsx/css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event:any) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
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

  function filteredData(products, selected, query) {
    let filteredProducts = products;

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

  const result = filteredData(products, selectedCategory, query);
  const { className, styles } = css`
    body {
      font-family: ' sans-serif';
    }
  `

  return (
    <>
    {/* <NavBar/> */}
    <div className="ola">
    <Recommended handleClick={handleClick} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Title/>
      <Products result={result} />
    </div>
    </>
  );
}

export default App;