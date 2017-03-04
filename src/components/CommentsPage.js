import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Comment from './Comment'
import {loadPageComments} from '../AC'
import Loader from './Loader'
import {mapToArr} from '../utils'

class CommentsPage extends Component {
    static propTypes = {

    };

    componentDidMount() {
        console.log('component did mount  -  CommentsPage')
        this.props.loadPageComments()
    }

    render() {

        const comments = this.props.comments;

        if(!comments.size) return <Loader/>;

        const commentsIdList = comments.map( record => record.id );

        const commentItems = commentsIdList.map(id => <li key={id}><Comment id={id} /></li>)

        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
            </div>
        )
    }
}

export default connect((state, props) => {
    const comments = state.comments.entities;
    return { comments }
}, { loadPageComments })(CommentsPage)