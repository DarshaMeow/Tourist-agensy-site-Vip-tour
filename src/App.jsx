import React, {createContext, useEffect, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import {cards} from "./database";
import TopPart from "./components/Top-section/TopPart";
import RecPlaces from "./components/Rec-places/RecPlaces";
import Search from "./components/Search/Search";
import VisitorForm from "./components/Visitor-Form/VisitorForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Countries from "./pages/Countries/Countries";
import Tour from "./pages/Countries/Tour";
import Information from "./pages/Information/Information";
import Login from "./pages/Authorization/Login";
import Comment from "./pages/Comment/Comment";

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

