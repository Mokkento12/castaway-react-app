import React from "react";
import heroImage from "../../assets/img/hero-image.jpg";
import heroImg1 from "../../assets/img/hero-img-1.svg";
import heroImg2 from "../../assets/img/hero-img-2.svg";
import heroImg3 from "../../assets/img/hero-img-3.svg";
import heroImg4 from "../../assets/img/hero-img-4.svg";
import heroImg5 from "../../assets/img/hero-img-5.svg";

import "./HeroPage.css";

const HomePage = () => {
  const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

  return (
    <div>
      <div className="hero-block">
        <div className="image-container">
          <img src={heroImage} alt="hero" className="hero-image" />
        </div>
        <div className="hero-text-container">
          <p className="hero-text">
            Take your podcast&nbsp;to the
            <br />
            <span>next</span> <strong>level</strong>
          </p>
          <h2 className="hero-link-title">Listen on</h2>
          <ul className="hero-link-list">
            {heroImages.map((img, index) => (
              <li key={index} className="hero-link">
                <img
                  src={img}
                  alt={`hero icon ${index + 1}`}
                  className="hero-link-img"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
