"use client"
import React, { useState } from 'react';
import "./style.css"
const App = () => {
  const [keywords, setKeywords] = useState([]);

  const handleAddKeyword = (newKeyword) => {
    if (newKeyword) {
      setKeywords([...keywords, newKeyword]);
    }
    newKeyword.preventDefault();
  };

  const handleRemoveKeyword = (index) => {
    const updatedKeywords = [...keywords];
    updatedKeywords.splice(index, 1);
    setKeywords(updatedKeywords);
  };

  return (
    <div className='cont'>
      <div className="keywords">
        {keywords.map((keyword, index) => (
          <div className="keyword" key={index}>
            <input type="text" value={keyword} disabled />
            <button onClick={() => handleRemoveKeyword(index)}>-</button>
          </div>
        ))}
        <div className="keyword">
          <input type="text" name="keyword" placeholder="Add Keyword" />
          <button onClick={() => {
            const newKeyword = document.querySelector('input[name="keyword"]').value.trim();
            handleAddKeyword(newKeyword);
            document.querySelector('input[name="keyword"]').value = '';
          }}>+</button>
        </div>
      </div>
    </div>
  );
};

export default App;