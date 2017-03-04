import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

class MenuItem extends Component {
    static propTypes = {
        path: PropTypes.string.isRequired
    };

    static contextTypes = {
        lang: PropTypes.string,
        locale: PropTypes.object
    };

    render() {
        const {path} = this.props;
        const currentLang = this.context.locale[this.context.lang] || this.context.locale['en'];
        return (
            <div>
                <Link to={path} activeStyle={{color: 'red'}}>{currentLang.menu.items[path]}</Link>
            </div>
        )
    }
}

export default MenuItem