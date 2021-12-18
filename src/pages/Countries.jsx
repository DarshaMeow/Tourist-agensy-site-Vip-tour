import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card/Card";
import {AppContext} from "../App";
import Comment from "./Comment";


const Countries = () => {
    const {tours} = useContext(AppContext)

    if (!tours.length) {
        return  (
            <div>...Loading</div>
        )
    }
    return (
        <div>
            <h1>Туры</h1>
            {tours.map((card) => {
                return (
                    <Card key={card.id} card={card}/>
                )
            })}
        </div>
    );
};

export default Countries;