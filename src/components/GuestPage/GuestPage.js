import React from "react";
import arrowImg from "../../assets/img/arrow.png";
import guestImg from "../../assets/img/guest-img.jpg";
import "./GuestPage.css";

const GuestPage = () => {
  return (
    <div className="guest-container">
      <div className="guest-desc">
        <button className="guest-btn">
          <img src={arrowImg} alt="Button"></img>
        </button>
        <span className="button-text">Meet your host</span>
        <h2 className="guest-name">Jacob Paulaner</h2>
        <p className="guest-text">
          Jacob has a background in audio engineering, and has been podcasting
          since the early days.
        </p>
        <p className="guest-text">
          He’s here to help you level up your game by sharing everything he’s
          learned along the way.
        </p>
      </div>
      <div
        className="guest-photo"
        style={{ backgroundImage: `url(${guestImg})` }}
      ></div>
    </div>
  );
};

export default GuestPage;
