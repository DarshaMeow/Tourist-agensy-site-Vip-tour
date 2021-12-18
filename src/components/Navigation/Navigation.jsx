import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";


const Navigation = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)
    const {valute} = useContext(AppContext)
    let navigate = useNavigate();

    return (
        <header className="header">
            <div className="header__section-left">
                <div className="header__section-logo">
                    <Link to="/main" className="header__logo">Вип-Тур</Link>
                    <img src="https://cdn-icons-png.flaticon.com/512/1598/1598420.png" width="50px" height="50px"/>
                </div>
                <Link to="/information" className="header__item">О нас</Link>
                <Link to="/countries" className="header__item">Страны</Link>
                <Link to="/comment" className="header__item">Оставить отзыв</Link>
            </div>
            <div className="header__section-right">
                {/*{!isAuth && <button onClick={() => navigate(`/private`)}>Зарегистрироваться</button>}*/}
                {/*{!isAuth && <button onClick={() => navigate(`/private`)}>Войти</button>}*/}
                {/*{isAuth && <button onClick={() => setIsAuth(false)}>Выйти</button>}*/}
                <div className="valute">
                    <span>USD: {valute.USD}</span>
                    <span>EUR: {valute.EUR}</span>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
