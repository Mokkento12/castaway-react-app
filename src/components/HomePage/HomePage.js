import React from "react";
import HeroPage from "../HeroPage/HeroPage";
import EpisodesPage from "../Episodes/EpisodesPage";
import GuestPage from "../GuestPage/GuestPage";
import Form from "../Form/Form";

const Homepage = () => {
  return (
    <div>
      <HeroPage />
      <EpisodesPage />
      <GuestPage />
      <Form />
      {/* Добавьте другие секции */}
    </div>
  );
};

export default Homepage;
