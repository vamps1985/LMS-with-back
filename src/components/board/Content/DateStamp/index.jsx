import React, { Component } from 'react';

import './styles.scss';


export default class DateStamp extends Component {
    state = {
        date: 0,
        time: 0,
    };
    render (){
        const { date, time } = this.props;

        return (
            <div className="date-stamp">
                <div className="date-stamp__date">
                    { date }
                </div>
                <div className="date-stamp__time">
                    {time}
                </div>
            </div>
        )
    }
}