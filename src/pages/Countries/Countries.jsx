import React, {useContext} from 'react';
import {AppContext} from "../../App";
import Header from "../../Components/Header/Header";
import Card from "../../Components/Card/Card";

const Countries = () => {
    const {tours} = useContext(AppContext)

    if (!tours.length) {
        return  (
            <div>...Loading</div>
        )
    }
    return (
        <div className="countries-page">
            <Header/>
            <h1>Страны</h1>
            {tours.map((card) => {
                return (
                    <Card key={card.id} card={card}/>
                )
            })}
        </div>
    );
};

export default Countries;
