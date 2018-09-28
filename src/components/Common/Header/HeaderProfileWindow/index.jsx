import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class HeaderProfileWindow extends React.Component {
    static PropTypes = {

    };

    render() {
        return (          
            <div className="HeaderProfileWindow">
                <span className="HeaderProfileWindow__close"></span>
            <div className="HeaderProfileWindow__block">
                <img className="HeaderProfileWindow__photo" src="img/users/franklinbush.jpg" alt="foto_student" />
                <p className="HeaderProfileWindow__name">John Bush</p>
                <p className="HeaderProfileWindow__email">example@example.com</p>
            </div>
            <div className="HeaderProfileWindow__buttonBlock">
                <button className="HeaderProfileWindow__button HeaderProfileWindow__button__sign-in">sign in</button>
                <button className="HeaderProfileWindow__button HeaderProfileWindow__button__my-profile">my profile</button>
            </div>
            </div>
        );
    }
}