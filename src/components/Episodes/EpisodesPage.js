import React from "react";
import "./EpisodesPage.css";

const EpisodesPage = () => {
  const episodes = [
    { title: "Episode 1", description: "Description of Episode 1" },
    { title: "Episode 2", description: "Description of Episode 2" },
  ];

  return (
    <div>
      <h1>Episodes</h1>
      <ul>
        {episodes.map((episode, index) => (
          <li key={index}>
            <h2>{episode.title}</h2>
            <p>{episode.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodesPage;
