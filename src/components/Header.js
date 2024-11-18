import React from "react";
import logo from "../assets/img/logo.svg";

import "./Header.css";

const Header = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Episodes", link: "/episodes" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="Castaway" className="logo-img" />
      </a>

      <nav className="nav">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`nav-link ${item.name === "Home" ? "active" : ""}`}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
