import React from "react";
import HeroPage from "../HeroPage/HeroPage";
import EpisodesPage from "../Episodes/EpisodesPage";

const Homepage = () => {
  return (
    <div>
      <HeroPage />
      <EpisodesPage />
      {/* Добавьте другие секции */}
    </div>
  );
};

export default Homepage;
