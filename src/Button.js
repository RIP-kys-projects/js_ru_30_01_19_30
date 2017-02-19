import React, {Component} from 'react'
import CommentList from './CommentList'
//не очень логичное решение прятать CommentList внутрь Button, лучше наоборот

export default class Button extends Component {
    state = {
        isOpen: false
    };

    render() {
        const btnStyle = { display: 'block', backgroundColor: 'lightgreen'};

        return (
            <div>
                <button style={btnStyle} onClick={this.handleClick}>
                    {this.getBtnText()}
                </button>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        if (!this.state.isOpen) return null;

        return (
            <section>
                <CommentList comments={this.props.comments} />
            </section>
        );
    }

    getBtnText() {
        if (!this.state.isOpen) return 'Show comments';
        return 'Hide comments';
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}
