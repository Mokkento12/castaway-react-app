import React from "react";
import HeroPage from "../HeroPage/HeroPage";
import EpisodesPage from "../Episodes/EpisodesPage";
import GuestPage from "../GuestPage/GuestPage";

const Homepage = () => {
  return (
    <div>
      <HeroPage />
      <EpisodesPage />
      <GuestPage />
      {/* Добавьте другие секции */}
    </div>
  );
};

export default Homepage;
