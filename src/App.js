import './App.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main";
import Tour from "./pages/Tour";
import Private from "./pages/Private";
import {createContext, useEffect, useState} from "react";
import {cards} from "./database";
import Send from "./pages/Send";

export const AppContext = createContext(null)

function App() {
    const [tours, setTours] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    const [valute, updateState] = useState({})

    useEffect(() => {
        const response = cards
        setTours(response)
    }, [])


    useEffect(()=>{
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then(response => response.json())
            .then(json => {
                valute.EUR = json.Valute.EUR.Value
                valute.USD = json.Valute.USD.Value
                updateState(valute)
            });
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
                    <Link to="/information" target="_blank" className="footer__item">О нас</Link>
                    <Link to="/comment" target="_blank" className="footer__item">Оставить отзыв</Link>
                </div>
            </footer>
        </AppContext.Provider>
    );
}

export default App;
