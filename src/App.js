import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main";
import Tour from "./pages/Tour";
import Private from "./pages/Private";
import {createContext, useEffect, useState} from "react";
import {cards} from "./database";
import Send from "./pages/Send";
import axios from 'axios';
import Information from "./pages/Information";
import Comment from "./pages/Comment";
import Countries from "./pages/Countries";

export const AppContext = createContext(null)

function App() {
    const [tours, setTours] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    const [valute, updateState] = useState({})

    const USDview = document.querySelector('.usd')
    const EURview = document.querySelector('.eur')

    const Valute = {
        USD: "",
        EUR: ""
    }

    axios.get ("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((res)=> {
        valute.USD = res.data.Valute.USD.Value
        valute.EUR = res.data.Valute.EUR.Value
            USDview.textContent = Valute.USD
            EURview.textContent = Valute.EUR
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
                    <Route path="/send" element={<Send/>}/>
                    <Route path="*" element={<Navigate to='/'/>}/>
                    <Route path="/information" element={<Information/>}/>
                    <Route path="/countries" element={<Countries/>}/>
                    <Route path="/comment" element={<Comment/>}/>
                </Routes>
            </main>

        </AppContext.Provider>
    );
}

export default App;
