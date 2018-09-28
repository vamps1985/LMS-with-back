import React from 'react';
//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export default class PhotoProfile extends React.Component {
    render() {
        return (
            <div className="PhotoProfile">
                <NavLink
                    exact
                    className="PhotoProfile"
                    to={'/profile'}
                >
                <div className="PhotoProfile__circle"></div>
                <div className="PhotoProfile__semicircle"></div>
                </NavLink>
            </div>
        );
    };
};