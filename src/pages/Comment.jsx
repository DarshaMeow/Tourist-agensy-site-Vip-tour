import React, { Component } from 'react';


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
                <form>
                    <div>
                        <label>ФИО: </label>
                        <input
                            type="text"
                            name="studentName"
                            placeholder="Введите ваше ФИО"
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input
                            type="text"
                            name="studentName"
                            placeholder="Введите вашу почту"
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <div>
                        <label>Пол: </label>
                        <label>Мужской</label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.onChangeHandler}
                        />
                        <label>Женский</label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <div>
                        <input type="submit"
                               value="Отправить"
                        />
                    </div>
                </form>
                {/*<br />*/}
                {/*<hr />*/}
                {/*<p>State of Component</p>*/}
                {/*<pre>{JSON.stringify(this.state, null, 2)}</pre>*/}
            </div>
        );
    }
}

export default Comment;