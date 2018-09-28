import React from 'react';
//import PropTypes from 'prop-types';
//import { NavLink } from 'react-router-dom';
//import items from "../navBarItems";
import './styles.scss';
    

export default class NavBarNotification extends React.Component {
    // static PropTypes = {
    //     key: PropTypes.string.isRequired,
    //     events: PropTypes.string.isRequired, 
    // };

  render() {
        // const { key, events } = this.props;
    return (
        <div className="NavBar__notification NavBar__notification-pos-calendar">
          <ul className="NavBar__notification__list">
            <li className="NavBar__notification__item">[ 2 события на этой неделе ]</li>
            <li className="NavBar__notification__item">[ 8 событий на этом месяце ]</li>
            <li className="NavBar__notification__item">[ Дедлайн ДЗ2 на этой неделе! ]</li>
          </ul>
        </div>
      );
  }
}
