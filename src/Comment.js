import React, {Component} from 'react'

export default function Comment(props) {
    const {comment} = props;

    return (
        <div>
            <h4>{comment.user}</h4>
            <div>{comment.text}</div>
        </div>
    )
}