import React, { PropTypes, Component } from 'react'

import moment from 'moment';
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/dist/style.css'
import './DayPickerComponent.css'

export default class DayPickerComponent extends Component {

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    /* В примере именно так задано, но как-то непривычно. Думал, что или в конструкторе писать this.state = {}
     * или как свойство класса state = {}. */
    state = {
        from: null,
        to: null,
    };

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick(e) {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    }

    render() {
        const { from, to } = this.state;

        const MONTHS = ['Студзень', 'Люты', 'Сакавік', 'Красавік', 'Травень',
            'Чэрвень', 'Ліпень', 'Жнівень', 'Верасень', 'Кастрычнік', 'Лістапад',
            'Снежань'];
        const WEEKDAYS_LONG = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'];
        const WEEKDAYS_SHORT = ['Нд', 'Пн', 'Ат', 'Ср', 'Чц', 'Пт', 'Сб' ];

        return (
            <div>
                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                    <p>
                        You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                        { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
                    </p>
                }
                <DayPicker
                    locale="be"
                    months={ MONTHS }
                    weekdaysLong={ WEEKDAYS_LONG }
                    weekdaysShort={ WEEKDAYS_SHORT }
                    firstDayOfWeek={ 1 }

                    initialMonth={ new Date(2017, 1) }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
            </div>
        )
    }
}