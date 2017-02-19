import React, { Component, PropTypes } from 'react'
import { addNewComment } from '../AC'
import {connect} from 'react-redux'

class NewCommentForm extends Component {
    static propTypes = {};

    state = {
        text: '',
        user: ''
    };

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        });
    };

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.addNewComment(
            {
                text: this.state.text,
                user: this.state.user
            }
        );
        this.setState({
            user: '',
            text: ''
        })
    };

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect( null, { addNewComment } )(NewCommentForm)