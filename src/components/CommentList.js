import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import {connect} from 'react-redux'
import NewCommentForm from './NewCommentForm'
import {loadComments} from '../AC'
import {arrayToMap, mapToArr} from '../utils'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    state = {
        isOpen: false
    }

    componentWillUpdate(nextProps, nextState){
        console.log('*** componentWillUpdate - CommentList');
        console.log('*** componentWillUpdate - nextState.isOpen: ', nextState.isOpen);
        console.log('*** componentWillUpdate - !nextProps.comments.isLoading: ', !nextProps.comments.isLoading);
        console.log('*** componentWillUpdate - !nextProps.comments.isLoaded: ', !nextProps.comments.isLoaded);
        if (nextState.isOpen && !nextProps.comments.isLoading && !nextProps.comments.isLoaded) this.props.loadComments(this.props.article.id);
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
        const comments = this.props.comments;
        const {id} = this.props.article;
        const commentsList = mapToArr(comments.entities);

        if (!this.state.isOpen || !this.props.comments || !comments) return null

        if (!commentsList.length) return (<div>
            <h3>No comments yet</h3>
            <NewCommentForm articleId={id}/>
        </div>)

        // по идее сюда нужно загружать необходимые комменты
        const commentItems = commentsList.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return <div>
            <ul>{commentItems}</ul>
            <NewCommentForm articleId={id} />
        </div>
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


 export default connect((state) => {
        return {
            comments: state.comments
        }
    }, { loadComments })(CommentList)

//export default CommentList