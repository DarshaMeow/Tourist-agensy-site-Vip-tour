import React from "react";
import { useState } from "react";
import Destination from "./Destination/Destination";
import "./Header.style.css";
import Valute from "../Valute/Valute";

const LeftSide = ({ click, setClick }) => {
  return (
    <>
      <nav className="left-side links">
        <p onClick={() => (!click ? setClick(true) : setClick(false))}>
          Страны <i className="far fa-chevron-down"></i>
        </p>
          <a href="/information">О нас</a>
      </nav>
      {click && <Destination click={click} setClick={setClick} />}
    </>
  );
};

const MidSide = () => {
  return (
    <div className="mid-side">
      <a href="/">Вип-Тур</a>
        <a href="/" className="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/1598/1598420.png" />
        </a>
    </div>
  );
};

const RightSide = () => {
  return (
    <div className="right-side search-area">
        <nav className="left-side links">
            <a href="/login">Войти</a>
        </nav>
        <nav className="left-side links">
            <a href="#search">Поиск туров</a>
        </nav>
        <nav className="left-side links">
            <a href="#call">Заказать звонок</a>
        </nav>
        <nav className="left-side links">
            <a href="/comment">Оставить отзыв</a>
        </nav>
        <Valute/>
    </div>
  );
};

const Header = () => {
  const [destClick, setDestClick] = useState(false);

  return (
    <div className="header">
      <LeftSide click={destClick} setClick={setDestClick} />
      <MidSide />
      <RightSide />
    </div>
  );
};

export default Header;
