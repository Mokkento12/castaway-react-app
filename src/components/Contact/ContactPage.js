import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Feel free to reach out via email at:{" "}
        <a href="mailto:contact@website.com">contact@website.com</a>
      </p>
      <p>Or follow us on our social media channels.</p>
    </div>
  );
};

export default ContactPage;
