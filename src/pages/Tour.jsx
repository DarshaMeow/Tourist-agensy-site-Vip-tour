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
        <div>
            <h2>Tour</h2>
            <div className="card">
                <img src={'https://travelmamas.com/wp-content/uploads/2020/04/first_state_usa_square.jpg'} width={100}/>
                <img src={'https://travelmamas.com/wp-content/uploads/2020/04/first_state_usa_square.jpg'} width={100}/>
                <h2>{tour.title}</h2>
                <p>{tour.description}</p>
                <span>{tour.price}р</span>
                <button onClick={() => navigate(`/send/${id}`)}>Оставить заявку</button>
            </div>
        </div>
    );
};

export default Tour;
