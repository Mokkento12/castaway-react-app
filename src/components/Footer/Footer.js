import React from "react";
import logo from "../../assets/img/logo.svg";
import socialImg1 from "../../assets/img/IMAGE.svg";
import socialImg2 from "../../assets/img/IMAGE-1.svg";
import socialImg3 from "../../assets/img/IMAGE-2.svg";
import heroImg1 from "../../assets/img/hero-img-1.svg";
import heroImg2 from "../../assets/img/hero-img-2.svg";
import heroImg3 from "../../assets/img/hero-img-3.svg";
import heroImg4 from "../../assets/img/hero-img-4.svg";
import heroImg5 from "../../assets/img/hero-img-5.svg";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [socialImg1, socialImg2, socialImg3];
  const footerLinks1 = [
    { text: "Home", href: "/" },
    { text: "About", href: "/" },
    { text: "Episodes", href: "/" },
    { text: "Contact", href: "/" },
  ];
  const footerLinks2 = [
    "Style Guide",
    "Instructions",
    "Changelog",
    "Credit",
    "Powered by Webflow",
    "Licenses",
  ];

  const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img src={logo} alt="Logo" className="footer-logo" />
          <div className="social-links">
            {socialLinks.map((img, index) => (
              <a href="/" className="social-link" key={index}>
                <img
                  src={img}
                  alt={`Social link ${index + 1}`}
                  className="social-link-image"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <ul className="footer-links-column">
            {footerLinks1.map((link, index) => (
              <li key={index} className="footer-list-item">
                <a href={link.href} className="footer-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <ul className="footer-links-column">
            {footerLinks2.map((text, index) => (
              <li key={index} className="footer-list-item">
                <a href="/" className="footer-link">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links-row">
          {heroImages.map((img, index) => (
            <a href="/" className="footer-link" key={index}>
              <img
                src={img}
                alt={`Hero image ${index + 1}`}
                className="footer-img"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
