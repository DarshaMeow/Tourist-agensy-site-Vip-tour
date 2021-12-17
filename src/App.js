import './App.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main";
import Tour from "./pages/Tour";
import Private from "./pages/Private";
import {createContext, useEffect, useState} from "react";
import {cards} from "./database";
import Send from "./pages/Send";
import axios from 'axios';
import Countries from "./pages/Countries";
import Information from "./pages/Information";

export const AppContext = createContext(null)

function App() {
    const [tours, setTours] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    const [valute, updateState] = useState({})

    const USDviuw = document.querySelector('.usd')
    const EURviuw = document.querySelector('.eur')

    const Valute = {
        USD: "",
        EUR: ""
    }

    axios.get ("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((res)=> {
        valute.USD = res.data.Valute.USD.Value
        valute.EUR = res.data.Valute.EUR.Value
        USDviuw.textContent = Valute.USD
        EURviuw.textContent = Valute.EUR
    })

    useEffect(() => {
        const response = cards
        setTours(response)
    }, [])

    return (
        <AppContext.Provider value={{tours, setTours, isAuth, setIsAuth, valute}}>
            <Navigation/>

            <main className="main">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/tour/:id" element={<Tour/>}/>
                    <Route path="/private" element={<Private/>}/>
                    <Route path="/send/:tourId" element={<Send/>}/>
                    <Route path="*" element={<Navigate to='/'/>}/>
                    <Route path="../information" element={<Information/>}/>
                </Routes>
            </main>

            <footer className="footer">
                <div className="footer__section">
                    <ul>Вип-Тур
                        <li>+7 961 575 93 57</li>
                        <li>Магнитогорск, ул. Октябрьская, д. 21</li>
                    </ul>
                </div>
                <div className="footer__section">
                    <Link to="/information" className="footer__item">О нас</Link>
                    <Link to="/comment" className="footer__item">Оставить отзыв</Link>
                </div>
            </footer>
        </AppContext.Provider>
    );
}

export default App;
