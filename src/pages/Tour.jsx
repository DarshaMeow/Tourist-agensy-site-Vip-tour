import React, {useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../App";

const Tour = () => {
    const {tours} = useContext(AppContext)
    let navigate = useNavigate();
    let {id} = useParams();

    const tour = tours.find((item) => item.id === Number(id))

    if (!tour) {
        return (
            <div>
                Тур не найден!
            </div>
        )
    }

    return (
        <div className="tour-page">
            <div className="card">
                <h2 className="tour-h2">{tour.title}</h2>
                <img src={tour.url} width={500}/>
                <img src={tour.url1} width={500}/>
                <img src={tour.url2} width={500}/>
                <img src={tour.url3} width={500}/>
                <img src={tour.url4} width={500}/>
                <img src={tour.url5} width={500}/>
                <p>{tour.description}</p>
                <p>{tour.fullDescription}</p>
                <button onClick={() => navigate(`/send/${id}`)}>Оставить заявку</button>
            </div>
        </div>
    );
};

export default Tour;
