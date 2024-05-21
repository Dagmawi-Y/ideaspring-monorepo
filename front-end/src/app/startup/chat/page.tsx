import React from "react";
import "./style.css";
import Nav from "../chat/nav/page";
import ChatBody from "./ChatBody/page";
import Navbar from "../startup/NavBar/page"

function App() {
  return (
    <div className="__main">
      {/* <Navbar/> */}
      {/* <Nav /> */}
      <ChatBody />
    </div>
  );
}

export default App;