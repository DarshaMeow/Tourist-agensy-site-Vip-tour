import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import './Navigation.scss'

const Navigation = () => {

    const [currency, setCurrency] = useState({})

    useEffect(() => {
        axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
            .then((res) => {
                const result = {
                    USD: res.data.Valute.USD.Value,
                    EUR: res.data.Valute.EUR.Value
                }
                setCurrency(result)
            })
    }, [])


    return (
        <header className="header">
            <div className="header__section-left">
                <div className="header__section-logo">
                    <Link to="/main" className="header__logo">Вип-Тур</Link>
                    <Link to="/main">
                        <img src="https://cdn-icons-png.flaticon.com/512/1598/1598420.png"
                             width="50px"
                             height="50px"
                        />
                    </Link>
                </div>
                <div className="header__links">
                    <Link to="/information" className="header__item">О нас</Link>
                    <Link to="/countries" className="header__item">Страны</Link>
                    <Link to="/comment" className="header__item">Оставить отзыв</Link>
                </div>

            </div>
            <div className="header__section-right">
                <div className="valute">
                    <span>USD: {currency.USD}</span>
                    <span>EUR: {currency.EUR}</span>
                    <span>*курс туроператора может отличаться</span>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
