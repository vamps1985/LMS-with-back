import React, { Component } from 'react';
import './styles.scss';

export default class Pointer extends Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <div className="pointer post__pointer">
                <div className="pointer__arrow pointer--down"></div>
            </div>
        )
    }
}