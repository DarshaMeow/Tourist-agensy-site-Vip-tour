import React, {createContext, useEffect, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import {cards} from "./database";
import Comment from "./Pages/Comment/Comment";
import TopPart from "./Components/Top-section/TopPart";
import RecPlaces from "./Components/Rec-places/RecPlaces";
import Search from "./Components/Search/Search";
import VisitorForm from "./Components/Visitor-Form/VisitorForm";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Countries from "./Pages/Countries/Countries";
import Tour from "./Pages/Countries/Tour";
import Information from "./Pages/Information/Information";
import Login from "./Pages/Authorization/Login";

export const AppContext = createContext(null)


function Main() {
    return (
        <div>
            <TopPart/>
            <RecPlaces/>
            <Search/>
            <VisitorForm/>
            <Footer/>
        </div>
    );
}

function App() {

    const [tours, setTours] = useState([])
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const response = cards
        setTours(response)
    }, [])
    return (
        <AppContext.Provider value={{tours, isAuth, setIsAuth}}>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="*" element={<Navigate to='/'/>}/>
                    <Route path="/countries" element={<Countries/>}/>
                    <Route path="/tour/:id" element={<Tour/>}/>
                    <Route path="/information" element={<Information/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/comment" element={<Comment/>}/>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;

