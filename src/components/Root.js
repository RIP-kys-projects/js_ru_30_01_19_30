import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import store from '../store'
import Menu, {MenuItem} from './Menu'

class Root extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        lang: 'en'
    }

    static childContextTypes = {
        user: PropTypes.string,
        lang: PropTypes.string,
        locale: PropTypes.object
    }

    getChildContext() {
        return {
            user: this.state.user,
            lang: this.state.lang,
            locale: {
                en: {
                    menu: {
                        title: 'Main menu',
                        items: {
                            "/articles": 'articles',
                            "/filters": 'filters',
                            "/counter": 'counter',
                            "/comments/1": 'comments/1'
                        }
                    },
                    selectArticleTitle: 'Select article',
                    commentsPaginationTitle: 'Comments pagination',
                    loadingMsg: 'Loading...',
                    counterMsg: 'Increment',
                },
                ru: {
                    menu: {
                        title: 'Главное меню',
                        items: {
                            "/articles": 'статьи',
                            "/filters": 'фильтры',
                            "/counter": 'счётчик',
                            "/comments/1": 'комментарии/1'
                        }
                    },
                    selectArticleTitle: 'Выберите статью',
                    commentsPaginationTitle: 'Пагинация комментариев',
                    loadingMsg: 'Идёт загрузка...',
                    counterMsg: 'Увеличить значение',
                }
            }
        }
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <input value={this.state.user} onChange={this.handleUserChange} />
                    <div>
                        <label htmlFor="en">EN
                            <input id="en" type="radio" name="lang" value="en" onChange={this.handleRadioChange} checked={this.state.lang === 'en'} />
                        </label>
                        <label htmlFor="ru">RU
                            <input id="ru" type="radio" name="lang" value="ru" onChange={this.handleRadioChange} checked={this.state.lang === 'ru'}/>
                        </label>
                    </div>
                    <Menu>
                        <MenuItem path="/articles" />
                        <MenuItem path="/filters" />
                        <MenuItem path="/counter" />
                        <MenuItem path="/comments/1" />
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    handleUserChange = ev => {
        this.setState({
            user: ev.target.value
        })
    };

    /**
     * Handles radiobutton change
     * @param ev
     */
    handleRadioChange = ev => {
        let target = ev.target;
        this.setState({
            lang: target.value
        })
    }
}

export default Root