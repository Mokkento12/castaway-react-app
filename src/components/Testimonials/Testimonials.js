import React from "react";
import starImage from "../../assets/img/star.svg";

import "./Testimonials.css";

const testimonials = [
  {
    name: "Betty Lacey",
    text: "I can’t recommend this podcast enough",
  },
  {
    name: "Adam Driver",
    text: "Jacob is the best in the business",
  },
  {
    name: "Marcus Brown",
    text: "A wealth of audio knowledge",
  },
  {
    name: "Jessica Knowl",
    text: "Every episode is a gem!",
  },
  {
    name: "Scott Adams",
    text: "Whoa whoa, let me take some notes!",
  },
  {
    name: "Steven Blast",
    text: "I’ve upped my game considerably since I started listening",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <ul className="testimonials-container">
        {testimonials.map((item, index) => (
          <li key={index} className="testimonial-item">
            <div className="rating">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <img
                    key={i}
                    src={starImage}
                    alt="star"
                    className="rating-image"
                  />
                ))}
            </div>
            <p className="testimonial-text">{item.text}</p>
            <span className="testimonial-name">{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
