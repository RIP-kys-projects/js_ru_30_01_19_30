import React, { Component, PropTypes } from 'react'

class ArticleIndexPage extends Component {
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
                <h1>{currentLang.selectArticleTitle}</h1>
            </div>
        )
    }
}

export default ArticleIndexPage