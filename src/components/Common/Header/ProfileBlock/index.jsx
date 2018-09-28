import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export default class ProfileBlock extends React.Component {
    static propTypes = {
        myProfile: PropTypes.string.isRequired,
        signOut: PropTypes.string.isRequired, 
    };

    render() {
        const { myProfile, signOut }= this.props;
        return (
            <div className="ProfileBlock">
                 <NavLink
                    exact
                    className="ProfileBlock__my-profile"
                    to={'/profile'}
                >
		          {myProfile}
                </NavLink>
                <NavLink
                    exact
                    className="ProfileBlock__my-profile"
                    to={'/sign-out'}
                >
                  {signOut}
                </NavLink>
	        </div>
        );
    }
}