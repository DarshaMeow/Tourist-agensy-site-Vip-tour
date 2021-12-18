import React, {useState} from 'react';
import {useParams} from "react-router-dom";

const Send = () => {
    const {tourId} = useParams()
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    function sendUserData(e) {
        e.preventDefault()
        localStorage.setItem('name', name)
        localStorage.setItem('phone', phone)
        localStorage.setItem('tourId',tourId)
    }

    return (
        <form onSubmit={sendUserData}>
            <h1>Заказать звонок</h1>
            <div>
                <input type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Номер телефона"
                />
            </div>
            <div>
                <input type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ФИО"
                />
            </div>
            <input type="submit"
                   value="Отправить мои данные"
            />
        </form>
    );
};

export default Send;
