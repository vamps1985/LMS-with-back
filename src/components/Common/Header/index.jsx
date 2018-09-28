import React, {Component, Fragment} from 'react';
// import {NavLink} from 'react-router-dom';
import Navigation from '@/components/Navigation'

import './styles.scss';

const items = [
    {
        link: '/calendar',
        module: 'calendar',
    },
    {
        link: '/messenger',
        module: 'messenger',
    },
    {
        link: '/board',
        module: 'adv',
    },
    {
        link: '/registration',
        module: 'registration'
    }
];


export default class Header extends Component {

    render() {

        const {isLogin, showModal} = this.props;
        return (
            <header className="header">
                <a href="#" className="c-logo">
                    <div className="c-logo__elem c-logo__elem-white">go</div>
                    <div className="c-logo__elem c-logo__elem-orange">it</div>
                </a>
                <Navigation showModal={showModal} isLogin={isLogin}/>
            </header>
        );
    }
}
