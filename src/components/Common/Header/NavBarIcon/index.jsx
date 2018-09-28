import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class NavBarIcon extends React.Component {
    static propTypes = {
      className: PropTypes.string.isRequired,
    };

    render() {
        const { className } = this.props;
        return <div className={`NavBar__icon NavBar__icon-${className}`}>{this.props.children}</div>
    }
}
