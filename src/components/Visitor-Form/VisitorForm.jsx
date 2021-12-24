import React, { useState } from "react";

import "./Visitor-Form.style.css";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setNumber("");
    setEmail("");
    setQuery("");
  };

  return (
    <div>
      <form>
        <div className="input-container">
          <label htmlFor="name">Ваше имя: </label>
          <input
            required
            autoComplete="off"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="number">Номер телефона : </label>
          <input
            required
            autoComplete="off"
            id="number"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email: </label>
          <input
            required
            autoComplete="off"
            id="email"
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value.replace(/[^a-zA-Z\d]/gi, ""))
            }
          />
        </div>
      </form>
      <div className="submit-btn">
        <button onClick={handleSubmit}>
          Отправить <i className="far fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

const VisitorForm = () => {
  return (
    <div className="form" id="call">
      <div className="visitor-form">
        <div className="text">
          <h1>
            Заказать звонок
          </h1>
        </div>
        <div className="form-wrapper">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default VisitorForm;
