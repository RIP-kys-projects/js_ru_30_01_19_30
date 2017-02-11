import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import AddCommentForm from './AddCommentForm/AddCommentForm'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    }
    static defaultProps = {
        comments: []
    }
    componentDidMount() {
        console.log('---CommentList', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
       // console.log('---', this.props, nextProps)
    }


    componentWillUnmount() {
        //console.log('---', 'unmounting')
    }

    state = {
        isOpen: false
    }

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;

        const {comments} = this.props
        if (!comments.length) return <h3>No comments yet</h3>;

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>);
        return (
            <div>
                <ul>{commentItems}</ul>
                <AddCommentForm />
            </div>
        )
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList