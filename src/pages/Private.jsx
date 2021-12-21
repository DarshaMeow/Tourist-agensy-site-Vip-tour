import React, {useContext} from 'react';
import {AppContext} from "../App";
import Login from "./Login";

const Private = () => {
    const {isAuth, tours} = useContext(AppContext)

    if (!isAuth) {
        return (
            <Login />
        )
    }

    const tourId = localStorage.getItem('tourId')
    const name = localStorage.getItem('name')
    const phone = localStorage.getItem('phone')

    const comment = JSON.parse(localStorage.getItem('comment'))

    if (tourId && name && phone) {
        const tour = tours.find(tour => tour.id == tourId)
        return (
            <div>
                <h2>Top Secret</h2>
                <div>
                    <h3>{name}</h3>
                    <p>{phone}</p>
                    <span>{tour.title}</span>
                </div>
                {comment && <div>
                    <h3>Comment</h3>
                    <p>{comment.name}</p>
                    <p>{comment.email}</p>
                    <p>{comment.text}</p>
                    <span></span>
                </div>}


            </div>
        );
    }

    return (
        <div>
            <h2>Top Secret</h2>
            <div>
                Нет заявок
            </div>
            {comment && <div>
                <h3>Comment</h3>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.text}</p>
                <span></span>
            </div>}
        </div>
    )


};

export default Private;
