import React, {useState} from 'react';
import "./Comment.css";

const Comment = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        text: "Maharashtra"
    })

    function onChangeHandler(e) {
        setState((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert('Отзыв в localStorage!')
        localStorage.setItem('comment', JSON.stringify(state))
    }

    return (
        <div className="comment-page">
            <h1 className="comment-h1">Оставьте отзыв</h1>
            <form className="comment-form" onSubmit={handleSubmit}>
                <div className="form_left">
                    <input className="comment"
                           type="text"
                           placeholder="Введите ваше ФИО"
                           onChange={onChangeHandler}
                           name="name"
                    />
                    <input className="comment"
                           type="text"
                           placeholder="Введите вашу почту"
                           name="email"
                           onChange={onChangeHandler}
                    />
                </div>
                <div className="form_right">
                        <textarea className="comment__send"
                                  type="text"
                                  placeholder="Введите ваш отзыв"
                                  name="text"
                                  onChange={onChangeHandler}>

                        </textarea>
                    <input className="button__send"
                           type="submit"
                           value="Отправить"
                    />
                </div>
            </form>
            {/*<p>State of Component</p>*/}
            {/*<pre>{JSON.stringify(this.state, null, 2)}</pre>*/}
        </div>
    );
}

export default Comment;
