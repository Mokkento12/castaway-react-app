import React from "react";
import { NavLink } from "react-router-dom"; // Используем NavLink вместо обычного <a>
import logo from "../../assets/img/logo.svg";

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
      <NavLink to="/" className="logo">
        <img src={logo} alt="Castaway" className="logo-img" />
      </NavLink>

      <nav className="nav">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} // Добавляем класс "active" при совпадении пути
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
