// Module
import React from "react";
import Human from "../assets/human.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Human} alt="human" className="images" />
      <div className="title">
        <h1>Nail Artist - Graphic Designer - Content Editor</h1>
      </div>
    </header>
  );
};

export default Header;
