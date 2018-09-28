import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import NavBarIcon from '@/components/Common/Header/NavBarIcon';
import NavBarTooltip from '@/components/Common/Header/NavBarTooltip';
import NavBarNotification from '@/components/Common/Header/NavBarNotification';
import items from '../navBarItems';
import './styles.scss';

const navBarItems = items.map(item => (
    <NavLink
        key={item.module}
        exact
        className="NavBar__icon"
        to={item.link}
    >
     <NavBarIcon className={item.module}>   
        <NavBarTooltip module={item.module} events={item.events} />
     </NavBarIcon>
    </NavLink>
));

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="NavBar">
                {navBarItems}
                {this.props.children}
            </div>
        );
    }
}