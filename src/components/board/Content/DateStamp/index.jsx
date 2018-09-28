import React, { Component } from 'react';

import './styles.scss';


export default class DateStamp extends Component {
    state = {
        date: 0,
        time: 0,
    };
    render (){
        return (
            <div className="date-stamp">
                <div className="date-stamp__date">
                    02/12/2018
                </div>
                <div className="date-stamp__time">
                    21:45
                </div>
            </div>
        )
    }
}