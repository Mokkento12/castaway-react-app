import React from "react";
import "./EpisodesPage.css";

import cardImg1 from "../../assets/img/card-img-1.jpg";
import cardImg2 from "../../assets/img/card-img-2.jpg";
import cardImg3 from "../../assets/img/card-img-3.jpg";

const EpisodesPage = () => {
  const episodes = [
    {
      img: cardImg1,
      label: "Gear",
      episode: "Episode 3",
      title: "Should you get outboard audio gear?",
      desc: "Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.",
    },
    {
      img: cardImg2,
      label: "Tips & Tricks",
      episode: "Episode 2",
      title: "Mic tricks to take you to the next level",
      desc: "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.",
    },
    {
      img: cardImg3,
      label: "Gear",
      episode: "Episode 1",
      title: "The best microphone under $200",
      desc: "With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.",
    },
  ];

  return (
    <div className="episodes">
      <header className="header-ep">
        <h2 className="ep-title">Latest episodes</h2>
        <a href="#" className="button">
          View all episodes
        </a>
      </header>
      {episodes.map((ep, index) => (
        <div key={index} className="card-container">
          <div className="card-image-block">
            <img className="card-image" src={ep.img} alt="" />
          </div>
          <div className="card-text-block">
            <span className="ep-label">{ep.label}</span>
            <h3 className="card-title">{ep.episode}</h3>
            <h2 className="card-title-strong">{ep.title}</h2>
            <p className="card-desc">{ep.desc}</p>
            <a href="#" className="button">
              View Episode Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodesPage;
