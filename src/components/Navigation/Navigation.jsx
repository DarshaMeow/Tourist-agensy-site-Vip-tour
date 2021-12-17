import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";


const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)
    const {valute} = useContext(AppContext)
    let navigate = useNavigate();

    return (
    <header className="header">
        <div className="header__section">
            <Link to="/main" className="header__logo">Вип-Тур</Link>
            <Link to="/information" className="header__item header__button">О нас</Link>
            <Link to="/countries" className="header__item header__button">Страны</Link>
            <Link to="/comment" className="header__item header__button">Оставить отзыв</Link>
        </div>
        <div className="header__section">
            <div className="header__logo">+7 961 575 93 57</div>
            <div className="header__logo">Магнитогорск</div>
            {!isAuth && <button onClick={() => navigate(`/private`)}>Войти</button>}
            {isAuth && <button onClick={() => setIsAuth(false)}>Выйти</button>}
        </div>
        <p>USD: {valute.USD}</p>
        <p>EUR: {valute.EUR}</p>
    </header>
    );
};

export default Navigation;
