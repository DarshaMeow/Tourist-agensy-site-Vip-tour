import React, {useContext, useState} from 'react';
import {AppContext} from "../../App";
import {users} from "../../database";
import {useNavigate} from "react-router-dom";
import "./Authorization.css";

const Login = () => {
    const {setIsAuth} = useContext(AppContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()
        const isUser = users.find((item) => item.login === login)
        if (!isUser) {
            return alert('no such user!')
        }
        if (isUser.password !== password) {
            return alert('error password!')
        }
        setIsAuth(true)
        navigate('/private')
        console.log("handleLogin", isUser)
    }

    return (
        <div className="authorization">
            <h1>Авторизация</h1>
            <form onSubmit={handleLogin}>
                <input type="text"
                       placeholder="login"
                       value={login}
                       onChange={(e) => setLogin(e.target.value)}
                />
                <input type="text"
                       placeholder="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;
