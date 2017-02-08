import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
        openArticleId: null
    };

    toggleOpenArticle = openArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault();

        if ( this.state.openArticleId == openArticleId ){
            this.setState({
                openArticleId: null
            })
        } else {
            this.setState({
                openArticleId: openArticleId
            })
        }
    };

    render() {
        return <Component {...this.props} openArticleId={this.state.openArticleId} toggleOpenArticle={this.toggleOpenArticle}/>
    }
}
