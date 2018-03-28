import React, { Component } from 'react';
import './styles.scss';

export default class Pointer extends Component {

    render() {
        const { toggle } = this.props;
        return (
            <div className="pointer post__pointer">
                <div className="pointer__arrow pointer--down" onClick={() => toggle()}></div>
            </div>
        )
    }
}
