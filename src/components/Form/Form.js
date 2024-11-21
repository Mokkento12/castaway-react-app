import React from "react";
import "./Form.css";

const Form = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();

    console.log("Форма отправлена!");
  };
  return (
    <div className="form-container">
      <div className="form-desc-container">
        <span className="form-text">Email Newsletter</span>
        <h2 className="form-title">Subscribe for updates</h2>
      </div>
      <form onSubmit={handlerSubmit} action="#" className="form">
        <input type="text" placeholder="Name" className="input-form"></input>
        <input type="email" placeholder="Email" className="input-form"></input>
        <button className="button-form">Submit</button>
      </form>
    </div>
  );
};

export default Form;
