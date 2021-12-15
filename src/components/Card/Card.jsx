import React from 'react';
import './Card.css'
import {useNavigate} from "react-router-dom";

const Card = ({card}) => {
    const {id, title, description, url} = card
    let navigate = useNavigate()
    return (
        <div className="card">
            <img src={url} width={200}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => navigate(`/tour/${id}`)}>Перейти</button>
        </div>
    )
}

export default Card;
