import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'

import Chart from './Chart'

import Select from 'react-select'
import 'react-select/dist/react-select.css'
import '../styles/react-select_custom.css'

import DayPickerComponent from "./DayPickerComponent/DayPickerComponent";
/* Не превращается ли "точка входа" в перечисление import-ов ? */

class App extends Component {
    state = {
        user: '',
        selection: null,
        selectedDay: new Date(),
    };

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <Select options = {options} onChange={this.handleSelectChange} value={this.state.selection} multi/>
                <DayPickerComponent />
                <ArticleList articles={articles} />
                <Chart articles={articles}/>
            </div>
        )
    }

    handleSelectChange = selection => this.setState({ selection });

    handleUserChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                user: ev.target.value
            })
        }
    };
}

App.propTypes = {
    articles: PropTypes.array.isRequired
};

export default App