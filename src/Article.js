import React, {Component} from 'react'
import Button from './Button'

export default class Article extends Component {
    state = {
        isOpen: false
    };
/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }
*/

    render() {
        const {article} = this.props;
        console.log('---', 123);
        return (
            <div>
                <h3 onClick={this.handleClick/*.bind(this)*/}>{article.title}</h3>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        if (!this.state.isOpen) return null;

        const btnStyle = { display: 'block', backgroundColor: 'lightgreen'};

        return (
            <section>
                {this.props.article.text}
                <Button comments={this.props.article.comments} />
            </section>
        );
    }

    handleClick = (ev) => {
        console.log(this);
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    /*handleClick(ev){
        console.log(this);
        this.setState({
            isOpen: !this.state.isOpen
        })
    };*/
}