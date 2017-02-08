import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    state = {
        openArticleId: null
    };

    toggleOpenArticle = openArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            openArticleId
        })
    };

    render() {
        return <Component {...this.props} openArticleId={this.state.openArticleId} toggleOpenArticle={this.toggleOpenArticle}/>
    }
}