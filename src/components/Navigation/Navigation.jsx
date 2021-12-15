import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";

const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)
    const {valute} = useContext(AppContext)
    let navigate = useNavigate();

    console.log(valute.USD)
    console.log(valute.EUR)
    return (
    <header className="header">
        <div className="header__section">
            <div className="header__logo">
                Вип-Тур
            </div>
            <Link to="/" className="header__item header__button">О нас</Link>
            <Link to="/tour" className="header__item header__button">Страны</Link>
            <Link to="/" className="header__item header__button">Туристам</Link>
        </div>
        <div className="header__section">
            <div className="header__item header__button">+7 961 575 93 57</div>
            <div className="header__item header__button">Магнитогорск</div>
            {!isAuth && <button onClick={() => navigate(`/private`)}>Login</button>}
            {isAuth && <button onClick={() => setIsAuth(false)}>Logout</button>}
        </div>
        <p>EUR: {valute.EUR}</p>
        <p>USD: {valute.USD}</p>
    </header>
    );
};

export default Navigation;
