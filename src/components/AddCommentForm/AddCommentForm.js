import React, { Component } from 'react'
import './AddCommentForm.css'

export default class AddCommentForm extends Component {
    state = {
        username: '',
        //ок, но в JS принят camelCase
        user_comment: '',
    };

    render() {
        return (
            <form className="AddCommentForm">
                <input
                    placeholder="Username"
                    id="username"
                    className="AddCommentForm__input AddCommentForm__input_username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleUserInputChange}
                />
                <input
                    placeholder="New comment"
                    id="new_comment"
                    className="AddCommentForm__input AddCommentForm__input_new-comment"
                    type="text"
                    value={this.state.user_comment}
                    onChange={this.handleCommentInputChange}
                />
                <button
                    type="button"
                    className="AddCommentForm__input AddCommentForm__input_submit"
                    onClick={this.handleSubmitClick}
                >
                    Add your comment
                </button>
            </form>
        )
    }

    /* Роман, а можно ли создать один обработчик на изменения инпутов (handleInputChange), а внутри его в зависимости от
     * id или класса уже назначать поведение?
     * Моя реализация с обработчиком на каждый инпут - не есть гуд */

    handleUserInputChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                username: ev.target.value
            })
        }
    };

    handleCommentInputChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                user_comment: ev.target.value
            })
        }
    };

    handleSubmitClick = (ev) => {
        ev && ev.preventDefault();
        console.log('username:     ', this.state.username);
        console.log('user_comment: ', this.state.user_comment);
        this.setState({
            username: '',
            user_comment: ''
        })
    };
}
