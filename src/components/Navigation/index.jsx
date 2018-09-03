import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

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


const NavIsLogin = () => (
    <Fragment>
        <div className="c-header__nav-bar">
            {items.map(item => (
                <NavLink
                    key={item.module}
                    exact
                    className="c-header__icon"
                    to={item.link}
                >
                    <div className={"c-header__icon c-header__icon-" + item.module}>
                        <span className="c-header__tooltip">1</span>
                    </div>

                </NavLink>
            ))}

        </div>
        <NavLink
            exact
            className="c-header__photo-profile"
            to={'/profile'}
        >
            <div className="c-header__photo-profile-circle"></div>
            <div className="c-header__photo-profile-semicircle"></div>
        </NavLink>
    </Fragment>
);
const NavNoLogin = ({openModal}) => (
    <div>
        <form className="" action="index.html" method="post">
            <button className="button-small" id="open_login" type="button" name="login">Log In
            </button>
            <button className="button-small" id="open_signin" onClick={openModal} type="button"
                    name="registration">Sign In
            </button>
        </form>
    </div>
);

const Navigation = ({isLogin, showModal}) =>
    isLogin ? <NavIsLogin/> : <NavNoLogin openModal={showModal} /> ;

export default Navigation;
