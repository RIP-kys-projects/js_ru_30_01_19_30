import React from 'react'
import Comment from './Comment'

export default function CommentsList(props) {
    const {comments} = props;
    const commentElements = comments.map((comment) =>
        <li key={comment.id}>
            <Comment comment={comment} />
        </li>);

    return (
        <ul>
            {commentElements}
        </ul>
    )
}