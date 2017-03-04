import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {loadPageComments} from '../AC'

class CommentsPage extends Component {
    static propTypes = {

    };

    componentDidMount() {
        console.log('component did mount  -  CommentsPage')
        this.props.loadPageComments()
    }

    render() {
        // const {comments = [], id} = this.props.article
        // const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)

        return (
            <div>
                CommentsPage from components
            </div>
        )
    }
}

export default connect(null, { loadPageComments })(CommentsPage)