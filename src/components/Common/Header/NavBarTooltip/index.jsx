import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
    
export default class NavBarTooltip extends React.Component {
    static propTypes = {
        // module: PropTypes.string.isRequired,
        events: PropTypes.string.isRequired, 
    };

    render() {
        const { events } = this.props;
        return <span className="NavBar__tooltip">{events}</span>;  
    }

    // render() {
    //     const { module, events } = this.props;
    //     return <span className="NavBar__tooltip" {...module}>{events}</span>;  
    // }
}