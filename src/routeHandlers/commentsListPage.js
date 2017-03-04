import React, { Component, PropTypes } from 'react'

class commentsListPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <div>CommentsList title</div>
                {this.props.children}
                <div>pagination line</div>
            </div>
        )
    }
}

export default commentsListPage