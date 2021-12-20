import React, { Component } from 'react';
import 'animate.css';


// const Comment = () => {
//     return(
//         <h1>Оставить отзыв</h1>
//     );
// };

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: "",
            gender: "",
            state: "Maharashtra"
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h1>Оставьте отзыв</h1>
                <form className="form">
                    <div className="form_left">
                        <input className="comment"
                            type="text"
                            placeholder="Введите ваше ФИО"
                            onChange={this.onChangeHandler}
                        />
                        <input className="comment"
                            type="text"
                            placeholder="Введите вашу почту"
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <div className="form_right">
                        <textarea className="comment_send"
                           type="text"
                           placeholder="Введите ваш отзыв"
                           onChange={this.onChangeHandler}>
                        </textarea>
                        <input className="button_send"
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
}

export default Comment;