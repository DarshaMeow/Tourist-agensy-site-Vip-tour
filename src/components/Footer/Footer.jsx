import "./footer.style.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
        <p>*представлен биржевой курс, курс туроператоров может отличаться</p>
      <div className="links">
        <a href="/information">О нас</a>
          <a href="/login">Войти</a>
      </div>
      <p>Автор сайта: Шарафутдинова Дарья </p>
    </div>
  );
};

export default Footer;
