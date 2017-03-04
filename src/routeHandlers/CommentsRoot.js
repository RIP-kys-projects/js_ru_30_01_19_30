import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'

class CommentRoot extends Component {
    static propTypes = {

    };

    static contextTypes = {
        lang: PropTypes.string,
        locale: PropTypes.object
    };

    render() {
        const currentLang = this.context.locale[this.context.lang] || this.context.locale['en'];
        return (
            <div>
                <h1>{currentLang.commentsPaginationTitle}</h1>
                {this.props.children}
                <CommentsPaginator />
            </div>
        )
    }
}

export default CommentRoot