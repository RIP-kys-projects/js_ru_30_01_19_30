import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
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
                <h1>{this.props.count}</h1>
                <a href="#" onClick={this.handleIncrement}>{currentLang.counterMsg}</a>
            </div>
        )
    }

    handleIncrement = (ev) => {
        ev.preventDefault()
        this.props.increment()
    }
}

export default connect((state) => {
    return {
        count: state.count
    }
}, { increment })(Counter)