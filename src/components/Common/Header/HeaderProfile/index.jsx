import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class HeaderProfile extends React.Component {

    render() {
        return (
            <div className="HeaderProfile">
                {this.props.children}
            </div>
        );
    }
}
