import React from 'react';
//import PropTypes from 'prop-types';
import './styles.scss';

export default class Logo extends React.Component {
    render() {
        return (
            <a href="#" className="Logo">
                <div className="Logo__elem Logo__elem-white">go</div>
                <div className="Logo__elem Logo__elem-orange">it</div>
            </a>
        );
    }
}

// Logo.propTypes = {

// };