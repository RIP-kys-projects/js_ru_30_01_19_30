import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'
export {MenuItem}

class Menu extends Component {
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
                <h2>{currentLang.menu.title}:</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Menu