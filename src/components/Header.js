import React from "react";
import logo from "../assets/img/logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="Castaway" className="logo-img"></img>
      </a>
      <ul className="header-list">
        <li className="header-item active">Home</li>
        <li className="header-item">Episodes</li>
        <li className="header-item">About</li>
        <li className="header-item">Contact</li>
      </ul>
    </header>
  );
};

export default Header;
